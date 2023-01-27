import axios from 'axios';
import React from 'react';

export default function FormAddNewTheme() {
  const formHandler = (event) => {
    console.log(Object.fromEntries(new FormData(event.target)));
    event.preventDefault();
    axios.post('/api/newtheme', Object.fromEntries(new FormData(event.target)))
      .then(() => window.location = '/newtheme');
  };
  return (
    <form onSubmit={formHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Название темы</label>
        <input name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Ссылка на картинку</label>
        <input name="background" type="text" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
}
