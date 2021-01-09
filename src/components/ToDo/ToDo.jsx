import React from 'react';
import './ToDo.css'
import ToDoListContainer from './ToDoList/ToDoListContainer';

let ToDo = () => {
  return(
    <div className="todo-body">
      <ToDoListContainer />
    </div>
  )
}
export default ToDo