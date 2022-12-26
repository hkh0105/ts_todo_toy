import React from 'react';
import { useRecoilState, atom } from 'recoil';
import { TodoListType } from '../type';

export const todoState = atom<TodoListType>({
  key: 'todoList',

  default: [
    {
      id: '1',
      content: 'Initial Content by Han',
      isCompleted: false,
    },
    {
      id: '2',
      content: 'Second Content by Han',
      isCompleted: false,
    },
  ],
});
