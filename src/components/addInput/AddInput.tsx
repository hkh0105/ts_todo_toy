import React, { MouseEvent } from 'react';
import { useInput } from '../../hooks/useInput';
import { AddInputProps, Todo } from '../../type';

const AddInput: React.FC<AddInputProps> = ({ onClickAddButton, todoList }) => {
  const { value, onChange } = useInput('');

  const clickAddButtonHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    const todo: Todo = {
      id: '2',
      content: value,
      isCompleted: false,
    };

    onClickAddButton([...todoList, todo]);
  };

  return (
    <>
      <input value={value} onChange={onChange} />
      <button onClick={clickAddButtonHandler}>추가</button>
    </>
  );
};

export default AddInput;
