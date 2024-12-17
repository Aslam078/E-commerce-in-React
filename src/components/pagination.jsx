import { Pagination } from '@mui/material';
import React from 'react'

function Paginations({onchange,page,totalPage}) {
 

  return (
    <>
    <div className='sm:block hidden'> <Pagination count={totalPage} onChange={onchange} page={page} color="secondary" /> </div>
    <div className='sm:hidden block'> <Pagination count={totalPage} page={page} onChange={onchange} color="secondary" siblingCount={1}  size='small' /> </div>
    </>
  )
}

export default Paginations