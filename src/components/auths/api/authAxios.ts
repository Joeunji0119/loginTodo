/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { FieldValues } from "react-hook-form";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

instance.interceptors.request.use((config) => {
  return config;
});

const formData = new FormData();

export const AuthSignUpAxios = async (data: FieldValues) => {
  formData.append("name", data.name);
  formData.append("gender", data.gender);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("birth", data.birth);
  formData.append("file", data.file[0]);

  return axios.post(`${process.env.REACT_APP_BASE_URL}/user/signup`, formData);
};

export const AuthSignInAxios = (data: FieldValues) => {
  formData.append("email", data.email);
  formData.append("password", data.password);

  return axios.post(`${process.env.REACT_APP_BASE_URL}/user/signin`, data);
};
