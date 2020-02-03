import React from 'react';
import { ITodo } from '../types/Type';

type Props = {
  todos: ITodo[];
  toggleAllTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeCompleted: () => void;
};

const TodoFooter = ({ todos, toggleAllTodo, removeCompleted }: Props) => {
  return (
    <div className="footer">
      <div className="complete-all">
        <input
          className="custom-checkbox"
          type="checkbox"
          id="ck-complete-all"
          onChange={e => toggleAllTodo(e)}
        />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div className="clear-completed">
        <button className="btn" onClick={removeCompleted}>
          Clear completed (
          <span className="completed-todos">
            {todos.filter(todo => todo.completed).length}
          </span>
          )
        </button>
        <strong className="active-todos">
          {todos.filter(todo => !todo.completed).length}
        </strong>{' '}
        items left
      </div>
    </div>
  );
};

export default TodoFooter;
