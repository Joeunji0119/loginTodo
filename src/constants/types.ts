export interface GetTodo {
  todoList: TodoListData;
  userId: number;
  userName: string;
}

export interface TodoListData {
  id: number;
  content: string;
  createAt: string;
  updateAt: string;
  isCheck: boolean;
}

<<<<<<< HEAD
=======
// export type TodoListDatas = TodoListData[];

>>>>>>> 2941964 (feat : auth Error 모달 추가)
export interface CreateTodo {
  content: string;
}

export interface DataProps {
  name: string;
  gender: string;
  email: string;
  password: string;
  birth: string;
  file: (string | Blob)[];
}
