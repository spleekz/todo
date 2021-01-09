import React from 'react';
import './Filters.css'

const Filters = (props) => {
  let activeTasksCounter = props.tasks.filter(task => !task.isDone).length
  return (
    <div className="filters">
      {props.filters.map((filter) => {
        return (
          <button key={filter.name} className={filter.isSelected ? 'selected-filter' : 'not-selected-filter'} onClick={() => { props.setFilter(filter) }}>{filter.label}</button>
        )
      })}
      <div className="active-tasks-counter">{activeTasksCounter} tasks to do</div>
    </div>
  )
}
export default Filters;