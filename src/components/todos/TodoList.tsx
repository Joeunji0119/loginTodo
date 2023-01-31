/* eslint-disable no-param-reassign */
/* eslint-disable import/no-named-as-default */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ModifyProps, TodoListData } from "constants/types";
import { useState } from "react";
import * as S from "../common/Style";
import { GetTodoQuery } from "./api/handleQueryTodos";
import {
  CreatTodoAxios,
  DeleteTodoAxios,
  PatchCheckBoxAxios,
  PatchTodoAxios,
} from "./api/todoAxios";
import Todos from "./Todos";

const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");

  const queryClient = useQueryClient();
  const { data } = GetTodoQuery();

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

  const patchTodoMutation = useMutation({
    mutationFn: PatchTodoAxios,
    onSuccess: async () => queryClient.invalidateQueries(["getTodoListDatas"]),
  });

  const modifyTodo = (checkedId: number, inputValue: string) => {
    patchTodoMutation.mutate({ checkedId, inputValue });
  };

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

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const updateValue = () => {
    // console.log(datas);
    // data?.data.todoList.map(({ id, content, isCheck, createAt, updateAt }: TodoListData) => {
    // if (id === checkedId) {
    //   content = inputValue;
    //   return { id, content, isCheck, createAt, updateAt };
    // }
    // });
  };

  return (
    <S.BackgroundColor>
      <S.AuthLayout>
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
              {data?.data?.todoList.map((todo: TodoListData) => {
                return (
                  <Todos
                    key={todo?.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    handleCheckBox={handleCheckBox}
                    modifyTodo={modifyTodo}
                    updateValue={updateValue}
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
export default TodoList;
