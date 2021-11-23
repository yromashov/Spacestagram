import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

export default function Loading() {
  return (
    <div
      style={{
        background: `url(https://d3e09417dac3bi.cloudfront.net/13/80094357-4603-4947-bf27-2e1164188391.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: '0px',
        height: '100vh',
      }}
    >
      <Typography
        variant='h1'
        component='h2'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          minHeight: '100vh',
          color: 'white',
        }}
      >
        Loading..Please Wait!
      </Typography>
    </div>
  );
}
