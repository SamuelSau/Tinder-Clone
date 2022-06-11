import React from 'react';
import '../Styles/SwipeButtons.css';

//Importing MaterialUI Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons___replay'>
            <ReplayIcon font-size='large'/>
        </IconButton>
        <IconButton className='swipeButtons___close'>
            <CloseIcon font-size='large'/>
        </IconButton>
        <IconButton className='swipeButtons___star'>
            <StarIcon font-size='large'/>
        </IconButton>
        <IconButton className='swipeButtons___favorite'>
            <FavoriteIcon font-size='large'/>
        </IconButton>
        <IconButton className='swipeButtons___flash'>
            <FlashOnIcon font-size='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons