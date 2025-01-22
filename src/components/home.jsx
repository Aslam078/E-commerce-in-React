import React, { useState,useEffect } from 'react'
import MediaCard from '../Layout/card'
import axios from 'axios';
import Paginations from './pagination';
import Loading from './loading';

function Home() {

    const [ref,setRef] = useState([]);
    const [loading,setLoading] = useState(false);
    const [totalproduct,setTotalProduct] = useState(0);
    const [page,setPage] = useState(0);
    useEffect(() => {
      setLoading(<Loading />)
        // axios.get(`http://localhost:8080/api/v100/get-products?page=1&lang=null&curr=null`).then(res => {
        axios.get(`https://dummyjson.com/products?limit=10&skip=${page}0`).then(res => {
            setRef(res.data.products);
            setTotalProduct(res.data.total);
            setLoading(false);
          }).catch(err => console.log(err))
        },[page])
        console.log(ref)

    const totalPage = (Math.trunc(totalproduct/10));
    console.log('totalPage',totalPage);
    

    const handlechange = (event,value) => {
      setPage(value);
  }
    

  return (
    <>
    <MediaCard products={ref} loading={loading} />
    <div className='flex justify-center my-5'><Paginations page={page} onchange={handlechange} totalPage={totalPage}/></div>
    </>
  )
}

export default Home