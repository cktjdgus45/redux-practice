import React from 'react';
import { connect } from 'react-redux';

const Todo = ({ todo, deleteToDo }) => {
    return (
        <li>
            {todo.text}
            <button onClick={deleteToDo}>DEL</button>
        </li>
    );
}
function mapDispatchToProps(dispatch, ownProps) { //store.dispatch
    return {
        // dispatching plain actions
        deleteToDo: () => dispatch({ type: 'DELETE', id: ownProps.todo.id }),
    };
}

export default connect(null, mapDispatchToProps)(Todo);
