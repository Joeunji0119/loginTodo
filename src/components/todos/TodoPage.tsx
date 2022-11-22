/* eslint-disable import/no-named-as-default */
/* eslint-disable @typescript-eslint/naming-convention */

// import axios from "axios";
// import { GetTodo, TodoListData } from "constants/types/types";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "../common/Style";
// import { todoListDatas } from "./api/atom";
import { useGetTodoListData } from "./api/handleQueryTodos";
import { CreatTodo, DeleteTodo, GetData, PatchTodo } from "./api/todoAxios";
import Todos from "./Todos";

const TodoPage = () => {
  // const access_token = localStorage.getItem("access_token");
  // const headers = {
  //   headers: {
  //     "Content-Type": `application/json`,
  //     Authorization: `Bearer ${access_token}`,
  //   },
  // };
  const [todoInput, setTodoInput] = useState("");
  const [modifyStatus, setModifyStatus] = useState(false);
  // const todosList = useRecoilValue(todoListState);
  // const [change, setChange] = useRecoilState(todoListDatas);

  // console.log(11111, setChange);

  const datas = {
    content: todoInput,
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const createTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const data = await CreatTodo(datas);
    // setChange(data);

    setTodoInput("");
  };

  const handleModify = (e: React.MouseEvent<HTMLButtonElement>, targetId: number) => {
    e.preventDefault();
    PatchTodo(datas, targetId);
  };
  const deleteTodo = (e: React.MouseEvent<HTMLButtonElement>, targetId: number) => {
    e.preventDefault();
    DeleteTodo(targetId);
  };

  // useEffect(() => {
  //   const { data } = axios.get("http://localhost:4000/todo", headers);
  // }, []);

  const { data } = useGetTodoListData();
  return (
    <S.BackgroundColor>
      <S.AuthLayout>
        <S.Logo>TODO-LIST</S.Logo>
        <S.LoginContainer>
          <S.LoginTitle> Todo-List</S.LoginTitle>
          <S.FormContainer>
            <S.TodoCreatContainer>
              <S.TodoInput
                onChange={(e) => onChangeValue(e)}
                placeholder=" 오늘의 TODO를 만들어보세요! :)"
              />
              <S.TodoCreateButton onClick={(e) => createTodo(e)}> 입력</S.TodoCreateButton>
            </S.TodoCreatContainer>
            <S.TodoDiv>
              {data?.todoList.map((todo: any) => {
                return (
                  <Todos
                    key={todo?.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    handleModify={handleModify}
                    modifyStatus={modifyStatus}
                    setModifyStatus={setModifyStatus}
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
