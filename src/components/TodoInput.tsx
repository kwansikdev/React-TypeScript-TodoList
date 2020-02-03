import React from 'react';
import { ITodo } from '../types/Type';

type Props = {
  AddTodo: ({ keyCode, target }: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TodoInput = ({ AddTodo }: Props) => {
  return (
    <>
      <input
        className="input-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyUp={e => AddTodo(e)}
      />
    </>
  );
};

export default TodoInput;
