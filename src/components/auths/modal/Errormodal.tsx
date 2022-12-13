/* eslint-disable no-constant-condition */
import React from "react";
import * as S from "./Style";

const Errormodal = ({ serverErrorMessage, setServerErrorMessage, setErrorModal }: any) => {
  const goBack = () => {
    setErrorModal((pre: boolean) => !pre);
  };

  return (
    <S.Background>
      <S.Layout>
        <S.ErrorMessage>
          {serverErrorMessage === ("200" || "201") ? "성공" : serverErrorMessage}
        </S.ErrorMessage>
        <S.GoBackButton onClick={goBack}> 확인 </S.GoBackButton>
      </S.Layout>
    </S.Background>
  );
};

export default Errormodal;
