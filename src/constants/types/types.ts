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

export type TodoListDatas = TodoListData[];

export interface CreateTodo {
  content: string;
}
