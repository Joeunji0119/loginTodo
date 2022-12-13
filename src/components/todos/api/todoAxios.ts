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
  const res = await axios.get("http://localhost:4000/todo", headers);
  return res;
};

export const CreatTodoAxios = async (datas: CreateTodo) => {
  await axios.post("http://localhost:4000/todo/create", datas, headers);
};

export const PatchTodoAxios = async (datas: CreateTodo, targetId: number) => {
  await axios.patch(`http://localhost:4000/todo/${targetId}`, datas, headers);
};

export const DeleteTodoAxios = async (targetId: number) => {
  await axios.delete(`http://localhost:4000/todo/${targetId}`, headers);
};

export const PatchCheckBoxAxios = async (targetId: number) => {
  await axios.patch(`http://localhost:4000/todo/check/${targetId}`, {}, headers);
};

// export const Test = () => {
//   const res = axios.get("http://localhost:4000/user", headers);

//   return res;
// };
