import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

function addToDo(todo) {
  store.dispatch({ type: ADD_TODO, text: todo });
}
function deleteToDo(event) {
  const id = parseInt(event.target.parentNode.id);
  store.dispatch({ type: DELETE_TODO, id });
}

function renderToDo() {
  ul.innerHTML = "";
  const toDos = store.getState();
  console.log(toDos)
  toDos.forEach(todo => {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.addEventListener('click', deleteToDo);
    delBtn.innerText = "DEL";
    li.innerText = todo.text;
    li.id = todo.id;
    li.appendChild(delBtn);
    ul.appendChild(li);
  })
}

store.subscribe(renderToDo);

function handleSubmit(event) {
  event.preventDefault();
  const input = form.querySelector('input[type="text"]');
  const todo = input.value;
  addToDo(todo);
  input.value = ""
}

form.addEventListener('submit', handleSubmit);

