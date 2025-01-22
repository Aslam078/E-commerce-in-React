import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CircleLoading from '../components/circle-loading'
import { FastForward } from '@mui/icons-material'

function SearchProduct() {
    const location = useLocation()
    const Queryparams = new URLSearchParams(location.search)
    const search = Queryparams.get('search')
    console.log('search',search);
    const [searchproduct,setSearchproduct] = useState([])
    const [loading,setLoading] = useState(false)

  if(search == ''){
    return <div className='h-screen w-full flex justify-center items-center font-bold text-gray-800 text-3xl opacity-55'>no data search...</div>
  }else{
    useEffect(() => {
        setLoading(<CircleLoading />)
        axios.get(`https://dummyjson.com/products/search?q=${search}`).then(res => {
            setSearchproduct(res.data.products)
            setLoading(false)
        }).catch(err => console.log(err))
       }, [search])
  }

  return (
    
<div className='max-w-7xl mx-auto h-fit my-5'>

{
    loading ? loading :
        searchproduct.map((product) => {
            return <Link to={`Product/detail/?id=${product.id}&title=${product.title}?&cate=${product.category}`} key={product.id} className="flex flex-col items-center mb-1 bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={product.thumbnail} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.title}</h5>
                <p className="mb-3 font-normal text-gray-700 ">${product.price}</p>
            </div>
        </Link>
        })
    
}

</div>

  )
}

export default SearchProduct