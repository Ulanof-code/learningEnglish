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
      <a href="/"><img src={tem.background} className="card-img-top" style={{ height: 280, width: 330, borderRadius: 10 }} alt="..." /></a>
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: 'center' }}>{tem?.title}</h5>
        <button type="button" style={{ marginRight: 20 }} onClick={deleteHandler} className="btn btn-danger">Удалить</button>
        <a href={`/thems/${tem.id}`}><button type="button" className="btn btn-primary">Открыть категорию</button></a>
      </div>
    </div>
  );
}
