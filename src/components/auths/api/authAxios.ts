/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { FieldValues } from "react-hook-form";

const formData = new FormData();

export const AuthSignUpAxios = async (data: FieldValues) => {
  formData.append("name", data.name);
  formData.append("gender", data.gender);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("birth", data.birth);
  formData.append("file", data.file[0]);

  const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/signup`, formData);
  return res;
};

export const AuthSignInAxios = (data: FieldValues) => {
  formData.append("email", data.email);
  formData.append("password", data.password);

  const res = axios.post(`${process.env.REACT_APP_BASE_URL}/user/signin`, data);
  return res;
};
