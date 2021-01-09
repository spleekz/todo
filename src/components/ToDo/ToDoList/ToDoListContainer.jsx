import { connect } from 'react-redux';
import { addTask, deleteTask,setDone, setImportant, updateNewTaskText } from '../../../redux/reducers/ToDoReducer';
import ToDoList from './ToDoList';

let mapStateToProps = (state) => {
  return {
    tasks: state.toDo.tasks,
    newTaskText: state.toDo.newTaskText,
    filteredTasks: state.toDo.filteredTasks,
    filters: state.toDo.filtersList
  }
}
export default connect(mapStateToProps, { addTask, updateNewTaskText, setDone, setImportant, deleteTask})(ToDoList)