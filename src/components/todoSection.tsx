import React from 'react';
import '../App.css';

import InputField from './inputField'
import ListTodos from './listTodos'

interface TodoList {
  id: number,
  taskName: string,
  isStage: boolean
}

interface Props {
  addTodo: string,
  setAddTodo: React.Dispatch<React.SetStateAction<string>>
  todoList: TodoList[],
  pushTodoList: (task: string) => void
}


const TodoSection: React.FC<Props> = ({addTodo, setAddTodo, todoList, pushTodoList}) => {

  return (
    <React.Fragment>
      <div className="pd-1 bg-light-white">
        <InputField addTodo={addTodo} setAddTodo={setAddTodo} pushTodoList={pushTodoList} />
      </div>

      <div className="pd-1 bg-light-white">
        <ListTodos todoList={todoList} />
      </div>
    </React.Fragment>
  );
}

export default TodoSection;
