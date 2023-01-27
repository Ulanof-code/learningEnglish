import React, { useState } from 'react';
import axios from 'axios';

export default function OneWord({ card, setMycard }) {
  const [click, setClick] = useState(true);
  const [show, setShow] = useState(true);
  const [isClick, setIsClick] = useState(false);
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

    <div className="w-40 card col-4 m-6">
      <div className="row d-flex justify-content-center mt-2">{click ? card.engWord : card.rusWord}</div>
      <button
        type="button"
        onClick={() => {
          clickHandler();
          setIsClick(!isClick);
        }}
        className="btn btn-success"
        style={isClick ? {
          transform: 'rotateY(-180deg)', transition: 'all 500ms ease 0s', backgroundColor: 'blue',
        } : null}
      >
        →
      </button>
      <button type="button" onClick={showHandler} className="btn btn-danger">✅</button>
    </div>

  );
}
