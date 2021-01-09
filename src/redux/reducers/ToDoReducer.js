let ADD_TASK = 'ADD_TASK',
  UPDATE_NEW_TASK_TEXT = 'UPDATE_NEW_TASK_TEXT',
  SET_FILTER = 'SET_FILTER',
  SET_DONE = 'SET_DONE',
  SET_IMPORTANT = 'SET_IMPORTANT',
  DELETE_TASK = 'DELETE_TASK';

let initialState = {
  tasks: [
    { text: 'Learn React', isDone: false, isImportant: false },
    { text: 'Make a ToDo App', isDone: true, isImportant: false },
    { text: 'Learn Redux', isDone: false, isImportant: true },
  ],
  filtersList: [
    { name: 'all', label: 'ALL', isSelected: true },
    { name: 'active', label: 'ACTIVE', isSelected: false },
    { name: 'done', label: 'DONE', isSelected: false }
  ],
  newTaskText: '',
  filteredTasks: []
}

let ToDoReducer = (state = initialState, action) => {

  if (action.type === ADD_TASK) {
    let newTask = { text: state.newTaskText, isDone: false, isImportant: false }
    let stateCopy = { ...state };
    stateCopy.tasks = [...state.tasks];
    stateCopy.tasks.push(newTask);
    stateCopy.newTaskText = '';
    return stateCopy;
  }

  if (action.type === UPDATE_NEW_TASK_TEXT) {
    return {
      ...state,
      newTaskText: action.newTaskText
    }
  }

  else if (action.type === SET_FILTER) {
    let stateCopy = { ...state };
    stateCopy.filtersList = [...state.filtersList.map((filter) => {
      if (filter.name === action.selectedFilter.name) {
        return { ...filter, isSelected: true }
      }
      return { ...filter, isSelected: false }
    })];
    return stateCopy
  }

  else if (action.type === SET_DONE) {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id === action.taskId) {
          return task.isDone ? { ...task, isDone: false } : { ...task, isDone: true }
        }
        return { ...task }
      })
    }
  }

  else if (action.type === SET_IMPORTANT) {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id === action.taskId) {
          return task.isImportant ? { ...task, isImportant: false } : { ...task, isImportant: true }
        }
        return { ...task }
      })
    }

  }
  else if (action.type === DELETE_TASK) {
    let stateCopy = { ...state };
    stateCopy.tasks = [...state.tasks];
    stateCopy.tasks.splice(action.taskId, 1)
    return stateCopy
  }
  return state;
}

export const addTask = () => {
  return {
    type: ADD_TASK
  }
}
export const updateNewTaskText = (newTaskText) => {
  return {
    type: UPDATE_NEW_TASK_TEXT,
    newTaskText
  }
}
export const setFilter = (selectedFilter) => {
  return {
    type: SET_FILTER,
    selectedFilter
  }
}
export const setDone = (taskId) => {
  return {
    type: SET_DONE,
    taskId
  }
}
export const setImportant = (taskId) => {
  return {
    type: SET_IMPORTANT,
    taskId
  }
}
export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    taskId
  }
}
export default ToDoReducer;