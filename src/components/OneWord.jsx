import React, { useState } from 'react';
import axios from 'axios';

export default function OneWord({ card, setMycard }) {
  const [click, setClick] = useState(true);
  const [show, setShow] = useState(true);

  const clickHandler = () => {
    setClick((prev) => !prev);
  };

  const showHandler = () => {
    setShow(false);
    axios.post(`/api/card/cardupdate/${card.id}`, FormData)
      .then(() => {
        // window.location = '/';
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
    setMycard((prev) => prev.filter((el) => el.id !== card.id));
  };

  return (
    <div className="card col-3">
      <h5 className="card-title">{click ? card.rusWord : card.engWord}</h5>
      {/* <button type="button" onClick={openHandler} className="btn btn-danger" disabled={user?.id !== car?.User?.id}>Delete</button> */}
      {/* <h5 className="card-title">{card?.engWord}</h5> */}
      <button type="button" onClick={clickHandler} className="btn btn-warning">→</button>
      <button type="button" onClick={showHandler} className="btn btn-success">✅</button>

    </div>
  );
}
