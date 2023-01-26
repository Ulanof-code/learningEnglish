import React, { useState } from 'react';
import OneWord from './OneWord';

export default function CardWord({ allCards }) {

  const [mycard, setMycard] = useState(allCards || []);
  // console.log("hello",allCards);
  return (
    <div>
      {mycard
        // .filter((card) => card.learned === false)
        .map((card) => <OneWord card={card} key={card?.id} setMycard={setMycard} />)}
    </div>
  );
}

// {tema?.map((tem) => <OneThemCard setThemes={setThemes} user={user} tem={tem} key={tem?.id} />)}
