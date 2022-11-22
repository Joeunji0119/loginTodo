/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import { CreateTodo, GetTodo } from "constants/types/types";

const access_token = localStorage.getItem("access_token");
const headers = {
  headers: {
    "Content-Type": `application/json`,
    Authorization: `Bearer ${access_token}`,
  },
};

export const CreatTodo = async (datas: CreateTodo): Promise<GetTodo[]> => {
  await axios.post("http://localhost:4000/todo/create", datas, headers);
  const { data } = await axios.get("http://localhost:4000/todo", headers);
  return data;
};

export const PatchTodo = async (datas: CreateTodo, targetId: number) => {
  await axios.patch(`http://localhost:4000/todo/${targetId}`, datas, headers);
};

export const DeleteTodo = async (targetId: number) => {
  await axios.delete(`http://localhost:4000/todo/${targetId}`, headers);
};

export const Test = () => {
  const res = axios.get("http://localhost:4000/user", headers);

  return res;
};

export const GetData = async () => {
  const { data } = await axios.get("http://localhost:4000/todo", headers);
  return data;
};
