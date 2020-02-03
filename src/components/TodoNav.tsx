import React from 'react';
import { INav } from '../types/Type';

type Props = {
  navs: INav[];
  toggleNav: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const TodoNav = ({ navs, toggleNav }: Props) => {
  return (
    <ul className="nav">
      {navs.map((nav, i) => (
        <li
          id={nav.id}
          key={i}
          className={nav.toggle ? 'active' : ''}
          onClick={toggleNav}
        >
          {nav.content}
        </li>
      ))}
      {/* <li id="all" className="active">
        All
      </li>
      <li id="active">Active</li>
      <li id="completed">Completed</li> */}
    </ul>
  );
};

export default TodoNav;
