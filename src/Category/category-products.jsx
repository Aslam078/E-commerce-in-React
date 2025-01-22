import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';

function CategoryProducts() {

    const [data, setData] = useState([])
    const location = useLocation()
    const Queryparams = new URLSearchParams(location.search)
    const category = Queryparams.get('category')

    axios.get(`https://dummyjson.com/products/category/${category}`).then(res => {
        setData(res.data.products)
    }).catch(err => console.log(err))

    const calculateDiscountedPrice = (product) => {
        return (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
    };



    return (
        <div className='max-w-8xl mx-auto'>

            {data.map((product) => {
                return <div className="flex flex-col justify-between px-3 items-center mb-1 bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100">
                    <Link to={`/Product/detail/?id=${product.id}&title=${product.title}?&cate=${product.category}`} key={product.id} >
                        <div className='flex items-center'>
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={product.thumbnail} alt="" />
                            <div className="p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.title}</h5>
                                <p variant="body2" sx={{ color: 'text.secondary' }}>
                                    <span className='font-bold'>${calculateDiscountedPrice(product)}</span> <span className='text-gray-600 line-through opacity-85'>${product.price}</span> <span className='text-green-600 font-semibold'>{product.discountPercentage}% off</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                    <p className='flex gap-2'>
                        <Button variant="contained" color='success' endIcon={<ShoppingCartIcon />} onClick={() => hanldeBuyproduct()}  >Buy Now</Button>
                        <Button variant="contained" color='warning' endIcon={<AddIcon />} onClick={() => addTocart(productdetail)} >Add To Cart</Button>
                    </p>
                </div>
            })}
        </div>
    )
}

export default CategoryProducts