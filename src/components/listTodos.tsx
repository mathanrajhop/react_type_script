import React from 'react';
import '../App.css';

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

interface TodoList {
  id: number,
  taskName: string,
  isStage: boolean
}

interface Props {
  todoList: TodoList[],
}

const ListTodos: React.FC<Props> = ({ todoList }) => {

  return (
    <div className="todos-layouts">
      <div className="todos-section">
        <h3>Works Onging</h3>
        <div className="todos-list">
        {
          todoList.map( (val: TodoList) => (
              <div className="todos-item" key={val.id}>
                <p>{val.taskName}</p>
                <span>
                  <AiFillEdit className="icons" />
                  <AiFillDelete className="icons" />
                </span>
              </div>
          ))

        }
        </div>
      </div>
      <div className="todos-section">
        <h3>Completed Onging</h3>
        <div className="todos-list">
          <div className="todos-item">sjdg ojdfgo dfgj ruiog</div>
        </div>
      </div>
    </div>
  );
}

export default ListTodos;
