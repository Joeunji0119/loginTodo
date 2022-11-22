<<<<<<< HEAD
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";

import { useRef } from "react";
import * as S from "../common/Style";

const Todos = ({
  todo,
  deleteTodo,
  modifyStatus,
  setModifyStatus,
  handleCheckBox,
  modifyTodo,
}: any) => {
  const modifyButtonText = modifyStatus ? "제출" : "수정";
  const deleteButtonText = modifyStatus ? "취소" : "삭제";
  const ref = useRef();

  const inputProps = !modifyStatus
    ? { readOnly: true }
    : {
        onChange: (e: any) => {
          ref.current = e.target.value;
        },
      };

  const modifyProps = !modifyStatus
    ? {
        onClick: (e: any) => {
          e.preventDefault();
          isChecked
            ? alert("체크된 항목은 수정이 불가능합니다 🥲")
            : setModifyStatus((pre: boolean) => !pre);
        },
      }
    : {
        onClick: (e: any) => {
          e.preventDefault();
          const data = {
            id: todo.id,
            content: ref.current,
          };
          modifyTodo(data);
          setModifyStatus((pre: boolean) => !pre);
=======
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

import * as S from "../common/Style";

const Todos = ({ todo, handleModify, deleteTodo, modifyStatus, setModifyStatus }: any) => {
  const modifyButtonText = modifyStatus ? "제출" : "수정";

  const inputProps = !modifyStatus ? { readOnly: true } : "";

  const modifyProps = modifyStatus
    ? { onClick: (e: React.MouseEvent<HTMLButtonElement>) => handleModify(e, todo?.id) }
    : {
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setModifyStatus((pre: any) => !pre);
>>>>>>> bb6b831 (feat : 라이브러리와 취업을 위해서 잠시 중단)
        },
      };

  const deleteProps = !modifyStatus
    ? {
<<<<<<< HEAD
        onClick: (e: any) => {
          e.preventDefault();
          deleteTodo(todo.id);
        },
      }
    : {
        onClick: (e: any) => {
          e.preventDefault();
          window.location.reload();
        },
      };
  const isChecked = todo.isCheck;

  const checkedStyle = isChecked
    ? {
        style: {
          textDecoration: "line-through ",
        },
=======
        onClick: (e: any) => deleteTodo(e, todo.id),
>>>>>>> bb6b831 (feat : 라이브러리와 취업을 위해서 잠시 중단)
      }
    : "";

  return (
    <S.TodosLayout>
<<<<<<< HEAD
      <S.CheckBox
        type="checkbox"
        defaultChecked={todo.isCheck}
        onChange={() => handleCheckBox(todo.id)}
      />
      <S.TodoText {...checkedStyle} {...inputProps} defaultValue={todo?.content} />
      <S.ModifyButton {...modifyProps}>{modifyButtonText}</S.ModifyButton>
      <S.DeleteButton {...deleteProps}>{deleteButtonText}</S.DeleteButton>
=======
      <S.CheckBox type="checkbox" />
      <S.TodoText {...inputProps} value={todo?.content} type="text" />
      <S.ModifyButton {...modifyProps}>{modifyButtonText}</S.ModifyButton>
      <S.DeleteButton {...deleteProps}>삭제</S.DeleteButton>
>>>>>>> bb6b831 (feat : 라이브러리와 취업을 위해서 잠시 중단)
    </S.TodosLayout>
  );
};

export default Todos;
