/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import { CreateTodo, ModifyProps } from "constants/types";

const access_token = localStorage.getItem("access_token");
const headers = {
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
};

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});

instance.interceptors.request.use((config) => {
  return config;
});

export const getDataAxios = async () => {
  return instance.get("/todo");
};

export const getUserDataAxios = async () => {
  // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`, headers);
  return instance.get("/user");
};

export const CreatTodoAxios = async (datas: CreateTodo) => {
  await axios.post(`${process.env.REACT_APP_BASE_URL}/todo/create`, datas, headers);
};

export const PatchTodoAxios = async (data: ModifyProps) => {
  console.log(11111, data);
  await axios.patch(
    `${process.env.REACT_APP_BASE_URL}/todo/${data.id}`,
    { content: data.content },
    headers
  );
};

export const DeleteTodoAxios = async (targetId: number) => {
  await axios.delete(`${process.env.REACT_APP_BASE_URL}/todo/${targetId}`, headers);
};

export const PatchCheckBoxAxios = async (targetId: number) => {
  await axios.patch(`${process.env.REACT_APP_BASE_URL}/todo/check/${targetId}`, {}, headers);
};
