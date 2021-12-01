import React, { useState } from 'react';

const Home = (props) => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setText('');
    }
    return (
        <>
            <h1>리액트 리덕스 투듀 리스트</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} placeholder="할 일 적기" onChange={onChange} />
                <button>ADD</button>
            </form>
        </>
    )
}
export default Home;