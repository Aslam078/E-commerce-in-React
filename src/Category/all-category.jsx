import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllCategory() {

    const [category, setCategory] = useState([])

    axios.get('https://dummyjson.com/products/category-list').then(res => {
        setCategory(res.data)
    }).catch(err => console.log(err))

    return (
        <div className='h-screen mt-2'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-8xl mx-auto'>
                {
                    category.map((cate) => {
                        return <Link to={`product?category=${cate}`}>
                            <div class="max-w-sm p-6 bg-white border border-gray-200  hover:scale-105 transition-all duration-400 rounded-lg shadow">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-900 flex justify-between items-center"> {cate} <ArrowForwardIosIcon /></h5>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default AllCategory