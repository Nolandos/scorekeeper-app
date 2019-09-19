import React from 'react';
import './Player.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <Fab color="primary" aria-label="add" className="Player__button" onClick={() => props.onPlayerScoreChange(1)} >
        <AddIcon />
    </Fab>
    <Fab color="secondary" aria-label="delete" className="Player__button" onClick={() => props.onPlayerScoreChange(-1)} >
        <RemoveIcon />
    </Fab>
  </li>
);

export default Player;