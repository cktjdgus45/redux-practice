import { createStore } from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    store.dispatch({ type: ADD, text });
}
const deleteToDo = (id) => {
    store.dispatch({ type: DELETE, id });
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}
const store = createStore(reducer);

store.subscribe();

export default store;
