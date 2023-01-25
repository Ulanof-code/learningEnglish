import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import CardWord from './CardWord';
import Login from './Login';
import Signup from './Signup';
export default function App({allThemes}) {
  return (
    <div className="container">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage allThemes={allThemes} />} />
        <Route path="/themes" element={<MainPage allThemes={allThemes} />} />
        <Route path="/theme/:id" element={<CardWord allThemes={allThemes} />} />
      </Routes>
    </div>
  );
}