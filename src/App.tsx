import React, { useState } from 'react';
import './App.css';
import Header from './components/header'
import TodoSection from './components/todoSection'

interface TodoList {
  id: number,
  taskName: string,
  isStage: boolean
}

const App: React.FC = () => {

  const [addTodo, setAddTodo ] = useState<string>("");
  const [todoList, setTodoList ] = useState<TodoList[]>([]);

  const pushTodoList = (task: string) => {
    if (addTodo) {
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          taskName: addTodo,
          isStage: false
        }
        ])
      setAddTodo('')
    }
  }

  return (
    <div className="pd-1 App">
      <Header />

      <TodoSection addTodo={addTodo} setAddTodo={setAddTodo} todoList={todoList} pushTodoList={pushTodoList} />

    </div>
  );
}

export default App;
