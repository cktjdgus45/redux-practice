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

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

function addToDoList(todo) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.addEventListener('click', () => ul.removeChild(li));
  span.innerText = todo;
  button.innerText = "delete";
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}

function handleSubmit(event) {
  const input = form.querySelector('input[type="text"]');
  event.preventDefault();
  const todo = input.value;
  addToDoList(todo);
  input.value = ""
  store.dispatch({ type: ADD_TODO, text: todo })
}

form.addEventListener('submit', handleSubmit);

