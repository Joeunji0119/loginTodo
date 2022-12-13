/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import { GetTodo } from "constants/types";
import { atom, selector } from "recoil";

const access_token = localStorage.getItem("access_token");
const headers = {
  headers: {
    "Content-Type": `application/json`,
    Authorization: `Bearer ${access_token}`,
  },
};

export const todoListDatas = atom<GetTodo[]>({
  key: "todoListDatas",
  default: [],
});

// export const todoListState = selector({
//   key: "todoListState",
//   get: async ({ get }) => {
//     try {
//       const { data } = await axios.get("http://localhost:4000/todo", headers);
//       return data;
//     } catch (error) {
//       console.log("error", error);
//     }
//   },
// });
