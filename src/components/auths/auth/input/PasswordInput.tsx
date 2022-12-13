import { ERROR_MESSAGE } from "constants/authErrors";
import React from "react";
import * as S from "../../../common/Style";

const PasswordInput = ({ register, errors }: any) => {
  return (
    <>
      {errors.password && <S.ErrorMessage> {errors.password?.message} </S.ErrorMessage>}
      <S.PassWordInput
        type="password"
        {...register("password", {
          pattern: {
            message: ERROR_MESSAGE.PASSWORD,
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
          },
        })}
        placeholder=" 비밀번호를 입력하세요. (영문/숫자 혼합, 8자 이상 20자 이하)"
      />
    </>
  );
};

export default PasswordInput;
