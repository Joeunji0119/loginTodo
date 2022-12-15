/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import { CreateTodo } from "constants/types";

const access_token = localStorage.getItem("access_token");
const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  },
};

export const getDataAxios = async () => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/todo`, headers);
  return res;
};

export const getUserDataAxios = async () => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`, headers);
  return res;
};

export const CreatTodoAxios = async (datas: CreateTodo) => {
  await axios.post(`${process.env.REACT_APP_BASE_URL}/todo/create`, datas, headers);
};

export const PatchTodoAxios = async (data: any) => {
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
