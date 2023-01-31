/* eslint-disable no-constant-condition */
/* eslint-disable no-useless-escape */
/* eslint-disable import/no-named-as-default */
import { FormValues } from "constants/types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as S from "../common/Style";
import { AuthSignInAxios, AuthSignUpAxios } from "./api/authAxios";
import {
  BirthInput,
  EmailInput,
  ImageInput,
  NameInput,
  PasswordInput,
  DropBox,
} from "./authform/index";
import useAuth from "./hooks/useAuth";
import Errormodal from "./modal/Errormodal";

const Authform = () => {
  const [errorModal, setErrorModal] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState<number | string>();
  const { PageStatus, toogle, setToogle, handleToogle, statusButton } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!toogle) {
      return AuthSignUpAxios(data)
        .then((res) => {
          if (res.data.status === 201) {
            setServerErrorMessage(res.data.status);
            setErrorModal((pre) => !pre);
            setToogle((pre) => !pre);
          }
        })
        .catch((err) => {
          const { message } = err.response.data;
          setServerErrorMessage(message);
          setErrorModal((pre) => !pre);
        });
    }

    if (toogle) {
      return AuthSignInAxios(data)
        .then((res) => {
          if (res.data.status === 200) {
            setServerErrorMessage(res.data.status);
            setErrorModal((pre) => !pre);
            localStorage.setItem("access_token", res.data.accessToken);
            navigate("/todo");
          }
        })
        .catch((err) => {
          const { message } = err.response.data;
          setServerErrorMessage(message);
          setErrorModal(true);
        });
    }
  };

  return (
    <>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        {!toogle && <ImageInput register={register} errors={errors} />}
        {!toogle && <NameInput register={register} errors={errors} />}
        {!toogle && <BirthInput register={register} />}
        {!toogle && <DropBox register={register} />}

        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />

        <S.SubmitButton>{PageStatus}</S.SubmitButton>
        <S.GotoLoginBtn onClick={handleToogle}>{statusButton}</S.GotoLoginBtn>
      </S.FormContainer>
      {errorModal && (
        <Errormodal serverErrorMessage={serverErrorMessage} setErrorModal={setErrorModal} />
      )}
    </>
  );
};

export default Authform;
