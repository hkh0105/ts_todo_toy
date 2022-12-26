import { ChangeEvent } from 'react';
import { SetterOrUpdater } from 'recoil';

export interface MainProps {}
export interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
}
export interface CardProps {
  id: string;
  content: string;
  status: string;
}
export type TodoListType = Todo[];
export interface CardContainerProps {
  data: Todo[];
}
export type InputProps = { value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void };
export interface AddInputProps {
  onClickAddButton: SetterOrUpdater<TodoListType>;
  todoList: TodoListType;
}
