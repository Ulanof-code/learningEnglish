import React from 'react'

export default function PersonalArea() {
  return (
    <>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" dataBsToggle="dropdown" ariaExpanded="false">
    Список тем
  </button>
  <ul className="dropdown-menu" ariaLabelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Действие</a></li>
    <li><a className="dropdown-item" href="#">Другое действие</a></li>
    <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
  </ul>
  </div>
  <div className="progress" role="progressbar" ariaLabel="Animated striped example" ariaValuenow="75" ariaValuemin="0" ariaValuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
</div>
</>
  )
}
