/* eslint-disable no-alert */
/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./Style";

const AuthPage = () => {
  const [image, setImage] = useState("");
  const [toogle, setToogle] = useState(true);

  const PageStatus = toogle ? "로그인" : "회원가입";
  const statusButton = toogle ? "회원가입하기" : "로그인하기";

  const navi = toogle
    ? {
        onClick: () => {
          setToogle((pre) => !pre);
        },
      }
    : {
        onClick: () => {
          setToogle((pre) => !pre);
        },
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = handleSubmit((data, e) => {
    console.log(data);

    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    const formData = new FormData();
    if (!toogle) {
      formData.append("name", data.name);
      formData.append("gender", data.gender);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("birth", data.birth);
      formData.append("imgUrl", image);

      axios.post("http://localhost:4000/user/signup", formData, headers);
    }
    if (toogle) {
      formData.append("email", data.email);
      formData.append("password", data.password);
      axios.post("http://localhost:4000/user/signin", formData, headers);
    }
  });

  return (
    <S.BackgroundColor>
      <S.AuthLayout>
        <S.Logo>Auth</S.Logo>
        <S.LoginContainer>
          <S.LoginTitle> {PageStatus}</S.LoginTitle>
          <S.FormContainer onSubmit={onSubmit}>
            {toogle ? (
              " "
            ) : (
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
            )}
            {errors.name && <div className="error"> 이름을 입력하세요 </div>}
            {toogle ? (
              " "
            ) : (
              <S.NameInput
                {...register("name", {
                  required: true,
                })}
                placeholder=" 이름을 입력하세요"
              />
            )}
            {errors.date && <div className="error"> 생년월일을 입력하세요 </div>}
            {toogle
              ? " "
              : (
                  <S.Birth
                    type="date"
                    {...register("birth", {
                      value: "2022-01-01",
                    })}
                    placeholder=" 생년월일"
                  />
                ) && (
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
                )}
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
              placeholder=" 비밀번호를 입력하세요"
            />
            <S.SubmitButton>{PageStatus}</S.SubmitButton>

            <S.GotoLoginBtn {...navi}>{statusButton}</S.GotoLoginBtn>
          </S.FormContainer>
        </S.LoginContainer>
      </S.AuthLayout>
    </S.BackgroundColor>
  );
};

export default AuthPage;
