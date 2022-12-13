/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-named-as-default */
/* eslint-disable @typescript-eslint/naming-convention */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { TodoListData } from "constants/types";
import { useState } from "react";
import * as S from "../common/Style";
import { GetTodoQuery } from "./api/handleQueryTodos";
import {
  CreatTodoAxios,
  DeleteTodoAxios,
  PatchCheckBoxAxios,
  // PatchTodoAxios,
} from "./api/todoAxios";
import Todos from "./Todos";

const TodoPage = () => {
  const access_token = localStorage.getItem("access_token");
  const headers = {
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Bearer ${access_token}`,
    },
  };
  const [todoInput, setTodoInput] = useState("");
  const [modifyStatus, setModifyStatus] = useState(false);

  const queryClient = useQueryClient();

  const createTodoMutation = useMutation({
    mutationFn: CreatTodoAxios,
    onSuccess: async () => queryClient.invalidateQueries(["getTodoListDatas"]),
  });

  const deleteTodoMutation = useMutation({
    mutationFn: DeleteTodoAxios,
    onSuccess: async () => queryClient.invalidateQueries(["getTodoListDatas"]),
  });

  const handleCheckBoxMutation = useMutation({
    mutationFn: PatchCheckBoxAxios,
    onSuccess: async () => queryClient.invalidateQueries(["getTodoListDatas"]),
  });

  // const patchTodoMutation = useMutation({
  //   mutationFn: PatchTodoAxios,
  //   onSuccess: async () => queryClient.invalidateQueries(["getTodoListDatas"]),
  // });

  const deleteTodo = async (checkedId: number) => {
    deleteTodoMutation.mutate(checkedId);
  };

  const createTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createTodoMutation.mutate({ content: todoInput });
    setTodoInput("");
  };

  const handleCheckBox = async (checkedId: number) => {
    handleCheckBoxMutation.mutate(checkedId);
  };

  // const patchCheckBox = useMutation(PatchCheckBoxAxios);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  // const modifyTodo = (datas, targetId: number) => {
  // patchTodoMutation.mutate(targetId);
  // };

  const {
    data,
    // ,is÷Loading, isError
  } = GetTodoQuery();

  const modifyInputValue = (e: any, checkedId: number) => {
    data?.data.todoList.map(({ id, content, createAt, updateAt, isCheck }: TodoListData) => {
      if (id === checkedId) {
        content = e.target.value;
      }
      return { id, content, createAt, updateAt, isCheck };
    });
  };

  return (
    <S.BackgroundColor>
      <S.AuthLayout>
        å<S.Logo>TODO-LIST</S.Logo>
        <S.LoginContainer>
          <S.LoginTitle> Todo-List</S.LoginTitle>
          <S.FormContainer>
            <S.TodoCreatContainer>
              <S.TodoInput
                onChange={(e) => onChangeValue(e)}
                value={todoInput}
                placeholder=" 오늘의 TODO를 만들어보세요! :)"
              />
              <S.TodoCreateButton onClick={(e) => createTodo(e)}>입력</S.TodoCreateButton>
            </S.TodoCreatContainer>
            <S.TodoDiv>
              {data?.data?.todoList.map((todo: any) => {
                return (
                  <Todos
                    key={todo?.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    modifyInputValue={modifyInputValue}
                    // handleModify={handleModify}
                    modifyStatus={modifyStatus}
                    setModifyStatus={setModifyStatus}
                    handleCheckBox={handleCheckBox}
                    // modifyTodo={modifyTodo}
                  />
                );
              })}
            </S.TodoDiv>
          </S.FormContainer>
        </S.LoginContainer>
      </S.AuthLayout>
    </S.BackgroundColor>
  );
};

export default TodoPage;
