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
        },
      };

  const deleteProps = !modifyStatus
    ? {
        onClick: (e: any) => deleteTodo(e, todo.id),
      }
    : "";

  return (
    <S.TodosLayout>
      <S.CheckBox type="checkbox" />
      <S.TodoText {...inputProps} value={todo?.content} type="text" />
      <S.ModifyButton {...modifyProps}>{modifyButtonText}</S.ModifyButton>
      <S.DeleteButton {...deleteProps}>삭제</S.DeleteButton>
    </S.TodosLayout>
  );
};

export default Todos;
