/* eslint-disable no-useless-escape */
import { ERROR_MESSAGE } from "constants/authErrors";
import React from "react";
import * as S from "../../../common/Style";

const EmailInput = ({ register, errors }: any) => {
  return (
    <>
      {errors.email && <S.ErrorMessage> {errors.email?.message} </S.ErrorMessage>}
      <S.IdInput
        {...register("email", {
          pattern: {
            message: ERROR_MESSAGE.EMAIL,
            value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
          },
        })}
        placeholder=" 이메일을 입력하세요"
      />
    </>
  );
};

export default EmailInput;
