import React from 'react';

export default function PersonalArea() {
  const newTheme = () => {
    fetch('/newtheme')
      .then(() => window.location.href = '/newtheme')
      .catch(() => window.location.href = '/newtheme');
  };

  return (
    <>
      <div className="d-flex flex-row mb-3">
        <div className="p-2">
          <div className="btn-group">
            <button className="btn btn-secondary btn-lg" type="button">
              Thems
            </button>
            <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Переключатель выпадающего списка</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Cities</a></li>
              <li><a className="dropdown-item" href="/">Meet</a></li>
              <li><a className="dropdown-item" href="/">Nature</a></li>
              <li><a className="dropdown-item" href="/">Books</a></li>
            </ul>
          </div>
        </div>
        <div className="p-2">
          <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: '75%' }}>75%</div>
            <div className="w-100 p-3">Ширина 75%</div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary btn-lg">Add cards</button>
      <a href="/newtheme">
        <button type="button" className="btn btn-primary btn-lg">Add theme</button>

      </a>
    </>
  );
}
