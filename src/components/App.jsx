import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import CardWord from './CardWord';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import PersonalArea from './PersonalArea';
import FormAddNewTheme from './FormAddNewTheme';

export default function App({ allThemes, allCards }) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/lk" element={<PersonalArea />} />
        <Route path="/main" element={<MainPage allThemes={allThemes} />} />
        <Route path="/thems" element={<MainPage allThemes={allThemes} />} />
        <Route path="/thems/:id" element={<CardWord allThemes={allThemes} allCards={allCards} />} />
        <Route path="/newtheme" element={<FormAddNewTheme />} />
      </Routes>
    </>
  );
}
