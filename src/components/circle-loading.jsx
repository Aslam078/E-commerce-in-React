import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function CircleLoading() {

  return <div className='w-full h-screen flex justify-center items-center'>
        <CircularProgress color="success" />

  </div>
}
