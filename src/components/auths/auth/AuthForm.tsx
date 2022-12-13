/* eslint-disable no-constant-condition */
/* eslint-disable no-useless-escape */
/* eslint-disable import/no-named-as-default */

import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as S from "../../common/Style";
import { AuthSignInAxios, AuthSignUpAxios } from "../api/authAxios";
import DropBox from "../dropBox/DropBox";
import useAuth from "../hooks/useAuth";
import Errormodal from "../modal/Errormodal";
import BirthInput from "./input/BirthInput";
import EmailInput from "./input/EmailInput";
import ImageInput from "./input/ImageInput";
import NameInput from "./input/NameInput";
import PasswordInput from "./input/PasswordInput";

const Authform = () => {
  const [errorModal, setErrorModal] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const { PageStatus, toogle, setToogle, navi, statusButton } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!toogle) {
      await AuthSignUpAxios(data)
        .then((res) => {
          if (res.data.status === 201) {
            setServerErrorMessage("201");
            setErrorModal((pre) => !pre);
            setToogle((pre: boolean) => !pre);
          }
        })
        .catch((err) => {
          const { message } = err.response.data;
          setServerErrorMessage(message);
          setErrorModal((pre) => !pre);
        });
    }

    if (toogle) {
      AuthSignInAxios(data)
        .then((res) => {
          if (res.data.status === 200) {
            setServerErrorMessage("200");
            setErrorModal((pre) => !pre);
            localStorage.setItem("access_token", res.data.accessToken);
            setTimeout(() => {
              navigate("/todo");
            }, 3000);
          }
        })
        .catch((err) => {
          const { message } = err.response.data;
          setServerErrorMessage(message);
          setErrorModal(true);
        });
    }
  };

  console.log(errorModal);
  // console.log(serverErrorMessage);

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
        <S.GotoLoginBtn {...navi}>{statusButton}</S.GotoLoginBtn>
      </S.FormContainer>
      {errorModal && (
        <Errormodal
          serverErrorMessage={serverErrorMessage}
          errorModal={errorModal}
          setErrorModal={setErrorModal}
        />
      )}
    </>
  );
};

export default Authform;
