<<<<<<< HEAD
/* eslint-disable import/extensions */
import React, { useState } from "react";

const useAuth = () => {
=======
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";

const useAuth = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
>>>>>>> bb6b831 (feat : 라이브러리와 취업을 위해서 잠시 중단)
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

<<<<<<< HEAD
  return {
    PageStatus,
    toogle,
    setToogle,
    navi,
    statusButton,
  };
=======
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

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    if (!toogle) {
      formData.append("name", data.name);
      formData.append("gender", data.gender);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("birth", data.birth);
      formData.append("file", data.file[0]);

      axios.post(`${process.env.REACT_APP_BASE_URL}/user/signup`, formData).then((res) => {
        if (res.data.status === 201) {
          setToogle((pre) => !pre);
        }
      });
    }
    if (toogle) {
      formData.append("email", data.email);
      formData.append("password", data.password);

      axios.post(`${process.env.REACT_APP_BASE_URL}/user/signin`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("access_token", res.data.accessToken);
          navigate("/todo");
        }
      });
    }
  });
  return { PageStatus, onSubmit, toogle, image, uploadImage, navi, statusButton, register, errors };
>>>>>>> bb6b831 (feat : 라이브러리와 취업을 위해서 잠시 중단)
};

export default useAuth;
