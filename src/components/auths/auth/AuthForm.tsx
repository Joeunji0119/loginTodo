import React from "react";

import * as S from "../../common/Style";
import useAuth from "../hooks/useAuth";

const Authform = () => {
  const { PageStatus, toogle, onSubmit, image, uploadImage, navi, statusButton, register, errors } =
    useAuth();

  return (
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
              {...register("file", {
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
                  남성
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
  );
};

export default Authform;
