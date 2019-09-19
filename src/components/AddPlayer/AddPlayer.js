import React, { useRef, useState } from 'react';
import './AddPlayer.scss';
import SnackbarContentWrapper from '../SnackBars/SnackBar';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import BorderColorIcon from '@material-ui/icons/BorderColor'

const AddPlayer = (props) => {
    const inputEl = useRef(null);
    const [error, setError] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        let playerName = inputEl.current.querySelector('input').value;
        if(playerName === '') {
            setError(true);
        } else {
            props.onPlayerAdd(playerName);
            setError(false);
            inputEl.current.querySelector('input').value = '';
        }
      }
   return (
       <div>
            {error === true &&
                <SnackbarContentWrapper
                    variant="error"
                    message="Field is empty!"
                />
            }
            <form className="AddPlayer" onSubmit={ onSubmit }>
                <TextField
                    id="outlined-name"
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    ref= {inputEl}
                />
                <Fab className="AddPlayer__Add" type="submit" variant="extended" aria-label="delete">
                    <BorderColorIcon />
                </Fab>
            </form>
       </div>
   )
};

export default AddPlayer;