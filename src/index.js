import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const form = document.querySelector('form');
const submit = form.querySelector('input[type="submit"]');



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
}

form.addEventListener('submit', handleSubmit);

