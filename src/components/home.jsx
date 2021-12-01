import React, { useState } from 'react';
import { connect } from 'react-redux';
import Todo from './todo';

const Home = ({ todos, addToDo }) => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText('');
    }
    return (
        <>
            <h1>리액트 리덕스 투듀 리스트</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} placeholder="할 일 적기" onChange={onChange} />
                <button>ADD</button>
            </form>
            <ul>
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo} />)
                }
            </ul>
        </>
    )
}
function mapStateToProps(state) { //store.getState
    return { todos: state }
}
function mapDispatchToProps(dispatch) { //store.dispatch
    return {
        // dispatching plain actions
        addToDo: (text) => dispatch({ type: 'ADD', text }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);