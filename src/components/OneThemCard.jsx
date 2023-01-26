import React from 'react';
import axios from 'axios';

export default function OneThemCard({ tem, user, setThemes }) {
  const deleteHandler = () => {
    axios.delete(`/api/thems/${tem.id}`)
      .then(() => setThemes(
        (prev) => prev
          .filter((oneThem) => oneThem.id !== tem.id),
      ))
      .catch(console.log);
  };

  // const openHandler = () => {
  //   axios.get(`/api/thems/${tem.id}`)
  //     .then(() => setThemes(
  //       (prev) => prev
  //         .filter((oneThem) => oneThem.id !== tem.id),
  //     ))
  //     .catch(console.log);
  // };


  return (
    <div className="card col-3">
      <a href="/"><img src={tem.background} className="card-img-top" alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title">{tem?.title}</h5>
        {/* <button type="button" onClick={openHandler} className="btn btn-danger" disabled={user?.id !== car?.User?.id}>Delete</button> */}
        <button type="button" onClick={deleteHandler} className="btn btn-danger">Удалить</button>
        <a href={"/theme/"+tem.id}><button type="button"   className="btn btn-primary">Открыть категорию</button></a>
      </div>
    </div>
  );
}
