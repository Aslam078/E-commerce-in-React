import React, { useEffect, useState } from 'react'
import Category from './category'
import { Outlet } from 'react-router-dom'
import TopRate from '../components/top-rate'
import TopMobile from '../components/top-mobile'
import Loading from '../components/loading';
import HighDiscount from '../components/high-discount'
import Slider from './slider'

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
       
  
      <div className='max-w-8xl mx-auto'>
        
          <div className='h-96'>
          <Slider />
          </div>

        <div className='grid mx-2 grid-cols-4 gap-1 mt-4'>
          <div className=''>
            <Category />
          </div>
          <div className='col-span-3 h-screen max-h-min overflow-x-hidden overscroll-auto overflow-scroll bg-teal-50 rounded-md
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-300'>
            <Outlet />
          </div>
        </div>

        <div className='my-4 pb-1 mx-1 '>
          <div className='flex flex-col xl:flex-row my-4 gap-2 mx-auto'>
            <TopRate />
            <TopMobile />
          <HighDiscount />
          </div>
        </div>
      
      </div>

    </>
  )
}

export default Layout