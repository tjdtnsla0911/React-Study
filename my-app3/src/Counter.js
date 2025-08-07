import React, { Component } from 'react';
//state : 커뫂너늩 내부에서 바뀔수있는값
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 0
        }
    }

    render() {
        const {number , fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button 
                 onClick={()=>{
                    this.setState({number : number + 1})
                 }}>
                +1
                </button>
            </div>
        );
    }
}

export default Counter;