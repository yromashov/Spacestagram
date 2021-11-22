import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Loading() {

  return (
    <div>

      <Typography variant='h1' component='h2' style={{ textAlign: 'center' }}>
        Loading..Please Wait!
      </Typography>
      <img
        style={{ display: 'block', margin: 'auto' }}
        src='https://astronomy.com/~/media/91C30DC3C221461C813777A84738AA53.jpg'
      />
    </div>
  );
}
