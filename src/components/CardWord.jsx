import React from 'react';

export default function CardWord({allCards}) {
  return (
    <div>
{allCards?.map(card => 
  <div className="card-body">
  <h5 className="card-title">{card?.rusWord}</h5>
  {/* <button type="button" onClick={openHandler} className="btn btn-danger" disabled={user?.id !== car?.User?.id}>Delete</button> */}
  <h5 className="card-title">{card?.engWord}</h5>
  <button type="button"  className="btn btn-danger">Изучено</button>

</div>
  )}
</div>
  );
}


// {tema?.map((tem) => <OneThemCard setThemes={setThemes} user={user} tem={tem} key={tem?.id} />)}
