import React from 'react';
//라우터
import {Routes , Route ,Link} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>  
        {/* to랑 path를 맞춰야 Link 클릭시 거기에 맞는 Route의 path로 이동함 */}
        <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  );
}

export default App;
