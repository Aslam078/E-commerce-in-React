import React, { useRef, useState,useEffect } from 'react'
import MediaCard from '../Layout/card'
import axios from 'axios';
import Paginations from './pagination';

function Home() {


    const [ref,setRef] = useState([]);
    const [totalproduct,setTotalProduct] = useState(0);
    const [page,setPage] = useState(1);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=10&skip=${page}0`).then(res => {
            setRef(res.data.products);
            setTotalProduct(res.data.total);
        }).catch(err => console.log(err))
    },[page])

    const totalPage = (Math.trunc(totalproduct/10));

    const handlechange = (event,value) => {
      setPage(value);
      
  }  
  
    
  return (
    <>
    <MediaCard products={ref} />
    <div className='flex justify-center my-5'><Paginations page={page} onchange={handlechange} totalPage={totalPage}/></div>
    </>
  )
}

export default Home