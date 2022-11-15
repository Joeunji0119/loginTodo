import Todo from "pages/todo/Todo";
import React from "react";
import * as S from "./Style";

const TodoPage = () => {
  return (
    <S.BackgroundColor>
      <S.AuthLayout>
        <S.Logo>TODO-LIST</S.Logo>
        <S.LoginContainer>
          {/* <S.LoginTitle> Todo-List</S.LoginTitle> */}
          <S.FormContainer>
            <S.TodoInput />
            <Todo />
          </S.FormContainer>
        </S.LoginContainer>
      </S.AuthLayout>
    </S.BackgroundColor>
  );
};

export default TodoPage;
