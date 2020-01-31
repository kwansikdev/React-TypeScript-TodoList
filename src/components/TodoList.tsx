import React from 'react';
import { ITodo } from '../types/Type';

type Props = {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  toggleCompleted: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TodoList = ({ todos, removeTodo, toggleCompleted }: Props) => {
  return (
    <ul className="todos">
      {todos.map(todo => (
        <li id={todo.id + ''} key={todo.id} className="todo-item">
          <input
            className="custom-checkbox"
            type="checkbox"
            id={`ck-${todo.id}`}
            onChange={e => toggleCompleted(todo.id, e)}
            checked={todo.completed}
          />
          <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
          <i
            className="remove-todo far fa-times-circle"
            onClick={() => removeTodo(todo.id)}
          ></i>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
