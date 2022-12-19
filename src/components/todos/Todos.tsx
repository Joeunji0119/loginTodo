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
            ? // eslint-disable-next-line no-alert
              alert("체크된 항목은 수정이 불가능합니다 🥲")
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
        },
      };

  const deleteProps = !modifyStatus
    ? {
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
      }
    : "";

  return (
    <S.TodosLayout>
      <S.CheckBox
        type="checkbox"
        defaultChecked={todo.isCheck}
        onChange={() => handleCheckBox(todo.id)}
      />
      <S.TodoText {...checkedStyle} {...inputProps} defaultValue={todo?.content} />
      <S.ModifyButton {...modifyProps}>{modifyButtonText}</S.ModifyButton>
      <S.DeleteButton {...deleteProps}>{deleteButtonText}</S.DeleteButton>
    </S.TodosLayout>
  );
};

export default Todos;
