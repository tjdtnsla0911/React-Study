import React, { useState } from 'react';

const EventPractice = () => {
    const [userName , setUserName] = useState('');
    const [message , setMessage] = useState('');
    const onChangeUserName = (e) => setUserName(e.target.value)
    const onChangeMessage = (e) => setMessage(e.target.value)
    const onClick = () => {
        alert(`${userName} : ${message}`);
        setUserName('');
        setMessage('');
    }
    const onKeypress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    }
    return (
        <div>
           <h1>이벤트 연습</h1>
           <input
                type='text'
                name='username'
                placeholder='사용자명'
                value={userName}
                onChange={onChangeUserName}
           />
           <input
                type='text'
                name='message'
                placeholder='아무거나 입력해 보세요.'
                value={message}
                onChange={onChangeMessage}
                onKeypress={onKeypress}
           />
        </div>
    );
};

export default EventPractice;