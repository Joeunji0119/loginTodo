/* eslint-disable import/no-named-as-default */
/* eslint-disable no-alert */
/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import React from "react";
import { useForm } from "react-hook-form";
import * as S from "../common/Style";
import Authform from "./auth/AuthForm";
import useAuth from "./hooks/useAuth";

const AuthPage = () => {
  const { PageStatus } = useAuth();

  return (
    <S.BackgroundColor>
      <S.AuthLayout>
        <S.Logo>Auth</S.Logo>
        <S.LoginContainer>
          <S.LoginTitle> {PageStatus}</S.LoginTitle>
          <Authform />
        </S.LoginContainer>
      </S.AuthLayout>
    </S.BackgroundColor>
  );
};

export default AuthPage;
