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

  return (
    <div className="card col-3 m-1">
      <a href="/thems"><img src={tem.background} className="card-img-top" style={{ height: 280, width: 350, borderRadius: 10 }} alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: 'center', fontFamily: 'verdana', fontWeight: 'bold' }}>{tem?.title}</h5>
        <button type="button" style={{ marginRight: 25 }} onClick={deleteHandler} className="btn btn-lg btn-outline-danger">Удалить</button>
        <a href={`/thems/${tem.id}`}><button type="button" className="btn btn-lg btn-outline-success">Учить слова</button></a>
      </div>
    </div>
  );
}
