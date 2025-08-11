import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import IterationSample from './IterationSample';



const App = () => {

  return (
    <>
      <MyComponent name={'React'}>React Start!</MyComponent>
      <br/>
      <Say></Say>
      <EventPractice/>
      <IterationSample/>
    </>
  )
}

export default App;
