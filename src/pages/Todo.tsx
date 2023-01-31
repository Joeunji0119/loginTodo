/** @jsxImportSource @emotion/react */
import Header from "components/header/Header";
import TodoList from "components/todos/TodoList";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Todo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
};

export default Todo;
