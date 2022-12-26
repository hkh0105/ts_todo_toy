import React, { ReactElement, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CardContainer from '../../components/cardConatiner/CardContainer';
import { todoState } from '../../recoil/todo';

import { CardContainerProps, CardProps, MainProps, Todo, TodoListType } from '../../type';

// eslint-disable-next-line no-empty-pattern
export default function Main({}: MainProps) {
  const [todoList, setTodoList] = useRecoilState<TodoListType>(todoState);
  const CardContainerProps: CardContainerProps = {
    data: todoList,
  };

  return (
    <section className='todo_section'>
      <CardContainer {...CardContainerProps} />
    </section>
  );
}
