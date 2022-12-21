import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";

export interface TodoListData {
  id: number;
  content: string;
  createAt: string;
  updateAt: string;
  isCheck: boolean;
}

export interface FormValues {
  name: string;
  email: string;
  password: string;
  gender: string;
  birth: string;
  file: string;
}

export interface CreateTodo {
  content: string;
}

export interface ModifyProps {
  id: number;
  content: string | HTMLInputElement;
}

export interface TodosProps {
  todo: TodoListData;
  handleCheckBox: (checkedId: number) => void;
  deleteTodo: (checkedId: number) => Promise<void>;
  modifyStatus: boolean;
  setModifyStatus: React.Dispatch<React.SetStateAction<boolean>>;
  modifyTodo: (data: ModifyProps) => void;
}

export type RegisterErrorsProps = {
  register: UseFormRegister<FormValues>;
  errors: Partial<
    FieldErrorsImpl<{
      name: string;
      email: string;
      password: string;
      gender: string;
      birth: string;
      file: string;
    }>
  >;
};

export type RegisterProps = {
  register: UseFormRegister<FormValues>;
};
