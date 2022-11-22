import { useGetTodoListData } from "components/todos/api/handleQueryTodos";
import React from "react";
import * as S from "./Style";

const Header = () => {
  const { data } = useGetTodoListData();
  // console.log(data.userName);
  return (
    <S.Layout>
      <S.Logo>TODOLIST</S.Logo>
      <S.Today>date : 2022-12-01</S.Today>
      <S.Name> {data?.userName} 님 환영합니다</S.Name>
      <S.Together> together : 1일 </S.Together>
    </S.Layout>
  );
};

export default Header;
