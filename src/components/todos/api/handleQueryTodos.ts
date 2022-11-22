/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/prefer-default-export */
import { useQuery } from "@tanstack/react-query";
<<<<<<< HEAD
import { getDataAxios, getUserDataAxios } from "./todoAxios";

export const GetTodoQuery = () => {
  return useQuery({
    queryKey: ["getTodoListDatas"],
    queryFn: getDataAxios,
  });
};

export const GetTodoUserQuery = () => {
  return useQuery({
    queryKey: ["getTodoUserData"],
    queryFn: getUserDataAxios,
=======
import axios from "axios";

const access_token = localStorage.getItem("access_token");

const headers = {
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
};

export const useGetTodoListData = () => {
  return useQuery({
    queryKey: ["getTodoListDatas"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:4000/todo", headers);
      return data;
    },
>>>>>>> bb6b831 (feat : 라이브러리와 취업을 위해서 잠시 중단)
  });
};
