import React from 'react';

export default props => {
  return props.data.map(char => {
    return (
      <div className='character-card' key={char.url}>
        <div className='character-info'>
          <h3>{char.name}</h3>
          <p>
            <strong>Gender:</strong> {char.gender};
          </p>
          <p>
            <strong>Birth Year:</strong> {char.birth_year};
          </p>
          <p>
            <strong>Height:</strong> {char.height} cm;
          </p>
        </div>
      </div>
    );
  });
};
