import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Loading() {
  return (
      <div style={{backgroundSize:'cover'}}>
    <Typography
      variant='h1'
      component='h2'
      style={{ justifyContent: 'center', color: 'white' }}
    >
      Loading!!! Please Wait!
    </Typography>
    </div>
  );
}
