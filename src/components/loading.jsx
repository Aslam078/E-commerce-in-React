import React from 'react'
import ReactLoading from "react-loading";
import { Skeleton } from '@mui/material';

function Loading() {
  return (
    <>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      {/* <Skeleton variant="circular" width={40} height={40} /> */}
      <div className='w-full flex justify-between p-2'>
        <div className=''>
          <Skeleton variant="rounded" width={260} height={271} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
          <span className='flex justify-between items-center'>
            <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" width={50} height={50} sx={{ fontSize: '1rem' }} />
          </span>
        </div>


        <div className=' '>
          <Skeleton variant="rounded" width={260} height={271} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
          <span className='flex justify-between items-center'>
            <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" width={50} height={50} sx={{ fontSize: '1rem' }} />
          </span>
        </div>


        <div className=''>
          <Skeleton variant="rounded" width={260} height={271} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
          <span className='flex justify-between items-center'>
            <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" width={50} height={50} sx={{ fontSize: '1rem' }} />
          </span>
        </div>


        <div className=''>
          <Skeleton variant="rounded" width={260} height={271} animation="wave" />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
          <span className='flex justify-between items-center'>
            <Skeleton variant="text" width={150} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" width={50} height={50} sx={{ fontSize: '1rem' }} />
          </span>
        </div>

      </div>
    </>
    // <div className='flex justify-center items-center'>
    //   <ReactLoading type="bubbles" color="#0000FF"
    //     height={100} width={50} />
    // </div>
  )
}

export default Loading