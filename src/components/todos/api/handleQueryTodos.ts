/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/prefer-default-export */
import { useQuery } from "@tanstack/react-query";
import { getDataAxios } from "./todoAxios";

export const GetTodoQuery = () => {
  return useQuery({
    queryKey: ["getTodoListDatas"],
    queryFn: getDataAxios,
  });
};
