import React from 'react'

export default function NewCard() {
  return (
    <div class="row" >
    <div class="card" class="shadow-lg p-3 mb-5  col-md-8 offset-md-2 bg-white rounded bg-secondary text-white rounded-2" alt="...">
  <div class="card-body" style={{display: 'flex', 'flexDirection': 'column', rowGap: '15px'}}>
  <div class="input-group">
  <span class="input-group-text">New them</span>
  <textarea class="form-control" aria-label="С текстовым полем"></textarea>
</div>
<div class="input-group ">
  <span class="input-group-text ">English </span>
  <textarea class="form-control" aria-label="С текстовым полем"></textarea>
</div>
<div class="input-group">
  <span class="input-group-text">Translat</span>
  <textarea class="form-control" aria-label="С текстовым полем"></textarea>
</div>
<div className="btn" style={{ alignSelf: 'flex-end'}}>
<button type="button" class="btn btn-primary btn-lg">Большая кнопка</button>
</div>
  </div>
</div>
</div>
  )
}
