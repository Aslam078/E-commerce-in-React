import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CateProduct from '../Layout/cat-product';
import Paginations from './pagination';
import Loading from './loading';


function CategoryWiseProduct() {

  const [catProduct, setCatProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalproduct, setTotalProduct] = useState(0);
  const location = useLocation();
  const Queryparams = new URLSearchParams(location.search)
  const slug = Queryparams.get('category')


  useEffect(() => {
    setLoading(<Loading />)
    axios.get(`https://dummyjson.com/products/category/${slug}`)
      .then((res) => {
        setCatProduct(res.data.products)
        setTotalProduct(res.data.total)
        setLoading(false)
      }).catch(err => console.log(err))
  }, [slug])

  const totalPage = (Math.trunc(totalproduct / 10));

  const handlechange = (event, value) => {
    setPage(value)
  }

  return (
    <>
      <CateProduct catProduct={catProduct} loading={loading} />
      <div className='flex justify-center my-5'>
        <Paginations page={page} onchange={handlechange} totalPage={totalPage} />
      </div>
    </>
  )
}

export default CategoryWiseProduct