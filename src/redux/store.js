import { combineReducers, createStore } from "redux";
import ToDoReducer from "./reducers/ToDoReducer";

let reducers = combineReducers({
  toDo: ToDoReducer
})

let store = createStore(reducers);


window.store = store

export default store;