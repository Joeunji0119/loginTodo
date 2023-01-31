import { TodosProps } from "constants/types";
import { useRef, useState } from "react";
import * as S from "../common/Style";

const Todos = ({ todo, deleteTodo, handleCheckBox, modifyTodo, updateValue }: TodosProps) => {
  const [modifyStatus, setModifyStatus] = useState(false);
  const modifyButtonText = modifyStatus ? "제출" : "수정";
  const deleteButtonText = modifyStatus ? "취소" : "삭제";
  const ref = useRef<HTMLInputElement | string>("");

  const isChecked = todo.isCheck;
  // console.log(ref);

  const checkedStyle = isChecked
    ? {
        style: {
          textDecoration: "line-through ",
        },
      }
    : "";

  const inputProps = !modifyStatus
    ? { readOnly: true }
    : {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          ref.current = e.target.value;
          // updateValue(data);
        },
      };

  // const data = {
  //   id: todo.id,
  //   content: ref.current,
  // };

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
          let inputValue = ref.current;
          // modifyTodo(todo.id, inputValue);
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
