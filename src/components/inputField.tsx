import React from 'react';
import '../App.css';

interface Props {
  addTodo: string,
  setAddTodo: React.Dispatch<React.SetStateAction<string>>,
  pushTodoList: (task: string) => void
}


const InputField: React.FC<Props> = ({addTodo, setAddTodo, pushTodoList}) => {

  return (
    <form className="form-field" onSubmit={ (e: React.FormEvent<EventTarget>) => {
      e.preventDefault();
      pushTodoList(addTodo)
      setAddTodo("")
    }}>
      <input
      type="text"
      placeholder="Enter Your Task"
      value={addTodo}
      onChange={
        (e) => setAddTodo(e.target.value)
      }
      />
      <button type="submit" > Add </button>
    </form>
  );
}

export default InputField;
