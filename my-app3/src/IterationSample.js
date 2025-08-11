import React , {useState}from 'react';

const IterationSample = () => {
    const [names , setNames] = useState([
       { id: 1 , text : '눈사람'},
       { id: 2 , text : '얼음'},
       { id: 3 , text : '눈'},
       { id: 4 , text : '바람'},
    ])
    const [inputData , setInputData] = useState('');
    const [nextid , setNextId] = useState(names.length +1 ); //새로 적용할 id
    //map쪽 구조분해 사용
    const nameList = names.map(({id , text})=> <li key={id}>{text} </li>)
    const onClick = () => {
     setNextId(nextid +1)
      setNames([...names , {id : nextid  , text : inputData}])

      setInputData('');
    }
    return (
        <div>
            <input value={inputData} onChange={(e)=>setInputData(e.target.value)} /> 
            <br/>
            <button onClick={onClick}>추가</button>
            <br/>
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;