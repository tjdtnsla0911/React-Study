import React , {useState} from 'react';

const Say = () => {
    const [message , setMessage] = useState('');
    const [good , setGood] = useState(0);
    const [colors , setColor] = useState('black');
    const onClickEnter = () => setMessage('안녕히세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');
    const onClickGoodUp = () => setGood(good + 1);
    const onClickGoodDown = () => setGood(good - 1);

    const onClickChangeColor = (e) => {
        console.log(colors);
        if(colors === 'blue'){
            setColor('black')
        }else{
            setColor('blue')
        }
    };
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
            <br/>
            <button style={{color : colors}} onClick={onClickGoodUp}>+1</button>
            <button onClick={onClickGoodDown}>-1</button>
            <h1>{good}</h1>
            <button onClick={onClickChangeColor}>ColorChange</button>
        </div>
    );
};

export default Say;