/* eslint-disable no-alert */
/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./AuthStyle";

const AuthPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    if (!e.target.files) {
      return;
    }
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = handleSubmit((data, e) => {
    // const formData = new FormData();
    console.log(data);
    axios({
      baseURL: "http://localhost:4000/user/signup",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <S.BackgroundColor>
      <S.AuthLayout>
        <S.Logo>Auth</S.Logo>
        <S.LoginContainer>
          <S.LoginTitle> 회원가입 </S.LoginTitle>
          <S.FormContainer onSubmit={onSubmit}>
            <S.ImageContainer>
              <S.ImageShowing src={image} />
              <S.ImageSearchButtonForShow>
                사진 선택
                <S.ImageSearchButton
                  type="file"
                  accept="image/*"
                  {...register("imgUrl", {
                    onChange: (e) => {
                      uploadImage(e);
                    },
                  })}
                />
              </S.ImageSearchButtonForShow>
            </S.ImageContainer>
            {errors.name && <div className="error"> 이름을 입력하세요 </div>}
            <S.NameInput
              {...register("name", {
                required: true,
              })}
              placeholder=" 이름을 입력하세요"
            />
            {errors.date && <div className="error"> 생년월일을 입력하세요 </div>}
            <S.Birth
              type="date"
              {...register("birth", {
                // valueAsDate: true,
                value: "2022-01-01",
              })}
              placeholder=" 생년월일"
            />
            <S.Gender>
              <S.Female>
                <option defaultValue="" {...register("gender")}>
                  남자
                </option>
                <option value="male">남성</option>
                <option value="female">여성</option>
                <option value="female">기타</option>
              </S.Female>
            </S.Gender>
            {errors.email && <div className="error"> 이메일을 입력하세요 </div>}
            <S.IdInput
              {...register("email", {
                required: true,
              })}
              placeholder=" 이메일을 입력하세요"
            />
            {errors.password && <div className="error"> 비밀번호를 입력하세요 </div>}
            <S.PassWordInput
              type="password"
              {...register("password", {
                required: true,
              })}
              // value={info.userPassword}
              // onChange={onChangeinfo}
              placeholder=" 비밀번호를 입력하세요"
            />
            <S.SubmitButton
            //  disabled={!passed} onClick={toAuth}
            >
              로그인
            </S.SubmitButton>
          </S.FormContainer>
        </S.LoginContainer>
      </S.AuthLayout>
    </S.BackgroundColor>
  );
};

export default AuthPage;
