import React from 'react'

export default function PersonalArea() {
  return (
    <>
  <div class="d-flex flex-row mb-3">
  <div class="p-2">
  <div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">
    Thems
  </button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Переключатель выпадающего списка</span>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Cities</a></li>
    <li><a class="dropdown-item" href="#">Meet</a></li>
    <li><a class="dropdown-item" href="#">Nature</a></li>
    <li><a class="dropdown-item" href="#">Books</a></li>
  </ul>
</div>
  </div>
  <div class="p-2">
  <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width: '75%'}}>75%</div>
  <div class="w-100 p-3">Ширина 75%</div>
</div>
</div>
</div>
<button type="button" class="btn btn-primary btn-lg">Add cards</button>
</>
  )
}
