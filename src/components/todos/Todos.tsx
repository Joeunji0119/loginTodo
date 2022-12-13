/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

import * as S from "../common/Style";

const Todos = ({
  todo,
  handleModify,
  deleteTodo,
  modifyStatus,
  modifyInputValue,
  setModifyStatus,
  handleCheckBox,
  modifyTodo,
}: any) => {
  const modifyButtonText = modifyStatus ? "제출" : "수정";
  const deleteButtonText = modifyStatus ? "취소" : "삭제";

  const inputProps = !modifyStatus
    ? { readOnly: true }
    : {
        onChange: (e: any) => {
          modifyInputValue(e, todo.id);
        },
      };

  console.log(111);

  const modifyProps = !modifyStatus
    ? {
        onClick: () => {
          console.log(111);
          console.log("제출 -> 수정");
          // handleModify(e, todo.id);
        },
      }
    : {
        onClick: (e: any) => {
          modifyInputValue(e, todo.id);
          console.log("수정 -> 제출");
        },
        // setModifyStatus((pre: boolean) => !pre);
      };

  const deleteProps = !modifyStatus
    ? {
        onClick: () => {
          deleteTodo(todo.id);
        },
      }
    : {
        onClick: () => {
          modifyTodo(todo.id);
        },
      };

  return (
    <S.TodosLayout>
      <S.CheckBox
        type="checkbox"
        defaultChecked={todo.isCheck}
        onChange={() => handleCheckBox(todo.id)}
      />
      <S.TodoText {...inputProps} value={todo?.content} />
      <S.ModifyButton {...modifyProps}>{modifyButtonText}</S.ModifyButton>
      <S.DeleteButton {...deleteProps}>{deleteButtonText}</S.DeleteButton>
    </S.TodosLayout>
  );
};

export default Todos;
