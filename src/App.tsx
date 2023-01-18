import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import s from './App.module.scss';
import { Homepage } from './components/pages/Homepage'
import { Blogpage } from './components/pages/Blogepage';
import { Aboutpage } from './components/pages/Aboutpage'

function App() {
  return (
    <>
      <header className={s.header}>
        <ul>
          <li><NavLink className={(active)=> active ? s.active : ''} to="/">Homepage</NavLink></li>
          <li><NavLink className={(active)=> active ? s.active : ''} to="/blogpage">Blogpage</NavLink></li>
          <li><NavLink className={(active)=> active ? s.active : ''} to="/aboutpage">About Us</NavLink></li>
        </ul>
      </header>

      <Routes>
        <Route path={"/"} element={<Homepage />}/>
        <Route path={"/blogpage"} element={<Blogpage />}/>
        <Route path={"/aboutpage"} element={<Aboutpage />}/>
      </Routes>

    </>
  );
}

export default App;
