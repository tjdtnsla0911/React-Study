import React , {useState} from "react";

const Counter = () => {
    const [num , setNumber ] = useState(0);

    const increase = () => {
        setNumber(num + 1);
    }
    return(
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={()=>{}}>-1</button>
            <p>{num}</p>
        </div>
    );
}