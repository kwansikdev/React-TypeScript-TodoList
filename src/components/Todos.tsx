import React, { useState } from 'react';
import { ITodo, INav } from '../types/Type';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import TodoNav from './TodoNav';

const Todo = () => {
  const Todos = (): ITodo[] => [
    { id: 3, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false },
  ];

  const NavState = (): INav[] => [
    { id: 'all', content: 'All', toggle: true },
    { id: 'active', content: 'Active', toggle: false },
    { id: 'completed', content: 'Completed', toggle: false },
  ];

  const [todos, setTodos] = useState(Todos());
  const [navs, setNav] = useState(NavState());

  const _todos = todos.filter(todo =>
    navs[0].toggle ? todo : navs[1].toggle ? !todo.completed : todo.completed,
  );

  const generateId = () => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  };

  const AddTodo = ({
    keyCode,
    target,
  }: React.KeyboardEvent<HTMLInputElement>) => {
    let content = (target as HTMLInputElement).value.trim();
    if (keyCode !== 13 || content === '') return;
    console.log(keyCode);

    (target as HTMLInputElement).value = '';
    setTodos([
      { id: generateId(), content: content, completed: false },
      ...todos,
    ]);
  };

  const toggleCompleted = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: e.target.checked } : todo,
      ),
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleAllTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const completed = e.target.checked;
    setTodos(todos.map(todo => ({ ...todo, completed: completed })));
  };

  const removeCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const toggleNav = ({ target }: React.MouseEvent<HTMLLIElement>) => {
    console.log((target as HTMLLIElement).id);
    const navId = (target as HTMLLIElement).id;

    setNav(
      navs.map(nav =>
        nav.id === navId ? { ...nav, toggle: true } : { ...nav, toggle: false },
      ),
    );
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">React.JS with Type-Script</div>

        <TodoInput AddTodo={AddTodo} />
        <TodoNav navs={navs} toggleNav={toggleNav} />
        <TodoList
          todos={_todos}
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
        />
        <TodoFooter
          todos={_todos}
          toggleAllTodo={toggleAllTodo}
          removeCompleted={removeCompleted}
        />
      </div>
    </>
  );
};

export default Todo;
