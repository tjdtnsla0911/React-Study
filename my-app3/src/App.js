import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

const App = () => {

  return (
    <>
      <MyComponent name={'React'}>React Start!</MyComponent>
      <br/>
      <Say></Say>
    </>
  )
}

export default App;
