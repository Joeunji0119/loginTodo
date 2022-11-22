/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/prefer-default-export */
import { useQuery } from "@tanstack/react-query";
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
  });
};
