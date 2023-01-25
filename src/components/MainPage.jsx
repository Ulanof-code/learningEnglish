import React, { useState } from 'react';
import OneThemCard from './OneThemCard';
// import CarForm from '../ui/CarForm';
// import OneCarCard from '../ui/OneCarCard';

export default function CarsPage({ allThemes, user }) {
  const [tema, setThemes] = useState(allThemes || []);
  return (
    <div className="row">
      {tema?.map((tem) => <OneThemCard setThemes={setThemes} user={user} tem={tem} key={tem?.id} />)}
    </div>
  );
}
