import React from 'react';
import FilterContainer from './Filters/FilterContainer'
import './ToDoList.css'

let ToDoList = (props) => {
  let activeFilter ='all';
  let filteredTasks = [];

  let filterTasks = (tasks, filter) => {
    if (filter === 'all') {
       filteredTasks = tasks
      return filteredTasks
    }
    if (filter === 'active') {
       filteredTasks=  tasks.filter(task => !task.isDone)
      return filteredTasks
    }
    if (filter === 'done') {
      filteredTasks=  tasks.filter(task => task.isDone)
      return filteredTasks
    }
  }

  props.filters.forEach((filter)=>{
    if(filter.isSelected){
     activeFilter = filter.name
    }
  })

  filterTasks(props.tasks,activeFilter);

  let Tasks = filteredTasks.map((task) => {
    task.id = props.tasks.indexOf(task)

    let taskClassName = 'task'
    if (task.isImportant) {
      taskClassName += ' important'
    }
    if (task.isDone) {
      taskClassName += ' done'
    }

    return (
      <span className='todo-item'  key={task.id}>
        <li className={taskClassName} key={task.id} onClick={() => { props.setDone(task.id) }}>
          {task.text}
        </li>
        <div className="modifications">
          <div onClick={() => { props.setImportant(task.id) }}>
            <i className="fa fa-exclamation important-icon modificate-icon important-status" aria-hidden="true" key={props.tasks.indexOf(task)} ></i>
          </div>
          <div className="delete" onClick={() => { props.deleteTask(task.id) }}>
            <i className="fa fa-times delete-icon modificate-icon" aria-hidden="true" key={props.tasks.indexOf(task)}></i>
          </div>
        </div>
      </span>
    )
  })

  let input = React.createRef()

  let updateNewTaskText = () => {
    let newTaskText = input.current.value;
    props.updateNewTaskText(newTaskText)
  }

  let enterHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      props.addTask()
    }
  }

  return (
    <div className="todo-list">
      <FilterContainer />
      <ul className="todo-list-items">
        {Tasks}
      </ul>
      <div className='form'><input ref={input} placeholder='What needs to be done?' value={props.newTaskText} onChange={updateNewTaskText} onKeyPress={enterHandler}></input>
        <button onClick={props.addTask} className = 'add-task'>ADD</button>
      </div>
    </div>
  )
}

export default ToDoList