import React from 'react';

const Player = (props) => (
  <div>
      <h3>{props.info.name}</h3>
      <p>{props.info.surname}</p>
      <p>{props.info.position}</p>
      <p>{props.info.club}</p>
  </div>
);

export default Player;