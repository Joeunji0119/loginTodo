import { TodosProps } from "constants/types";
import { useRef } from "react";
import * as S from "../common/Style";

const Todos = ({
  todo,
  deleteTodo,
  modifyStatus,
  setModifyStatus,
  handleCheckBox,
  modifyTodo,
}: TodosProps) => {
  const modifyButtonText = modifyStatus ? "제출" : "수정";
  const deleteButtonText = modifyStatus ? "취소" : "삭제";
  const ref = useRef<HTMLInputElement | string>("");

  const isChecked = todo.isCheck;

  const checkedStyle = isChecked
    ? {
        style: {
          textDecoration: "line-through ",
        },
      }
    : "";

  const data = {
    id: todo.id,
    content: ref.current,
  };

  const inputProps = !modifyStatus
    ? { readOnly: true }
    : {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          ref.current = e.target.value;
        },
      };

  const modifyProps = !modifyStatus
    ? {
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          isChecked
            ? // eslint-disable-next-line no-alert
              alert("체크된 항목은 수정이 불가능합니다 🥲")
            : setModifyStatus((pre: boolean) => !pre);
        },
      }
    : {
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          modifyTodo(data);
          setModifyStatus((pre: boolean) => !pre);
        },
      };

  const deleteProps = !modifyStatus
    ? {
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          deleteTodo(todo.id);
        },
      }
    : {
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          window.location.reload();
        },
      };

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
