import React from 'react';

export default props => {
  return (
    <div className='character-card'>
      <div className='character-info'>
        <h3>{props.name}</h3>
        <p>
          <strong>Gender:</strong> {props.gender};
        </p>
        <p>
          <strong>Birth Year:</strong> {props.birth_year};
        </p>
        <p>
          <strong>Height:</strong> {props.height} cm;
        </p>
      </div>
    </div>
  );
};
