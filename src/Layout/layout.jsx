import React, { useEffect, useState } from 'react'
import Category from './category'
import { Outlet } from 'react-router-dom'
import TopRate from '../components/top-rate'
import TopMobile from '../components/top-mobile'
import Loading from '../components/loading';

function Layout() {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000);
  // },[])

  // if(isLoading){
  //   return <Loading />
  // }


  return (
    <>
      <div className='max-w-fit mx-auto'>

        <div className='grid mx-2 grid-cols-4 gap-1 mt-4'>
          <div className=''>
            <Category />
          </div>
          <div className='col-span-3 h-screen max-h-min overflow-x-hidden min-w-96 overscroll-auto overflow-scroll bg-gray-200
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300'>
            <Outlet />
          </div>
        </div>

        <div className='my-4 pb-1 mx-1 bg-gray-200'>
          <p className='text-2xl font-semibold pt-3 ps-1'>Top rated products</p>

          <div className='flex-col my-4 gap-2 mx-auto'>
            <TopRate />
          <p className='text-2xl font-semibold pt-3 ps-1'>Mobiles</p>
            <TopMobile />
          </div>
        </div>

      </div>

    </>
  )
}

export default Layout