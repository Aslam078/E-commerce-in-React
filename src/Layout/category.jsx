import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Category() {

  const location = useLocation();
  const Queryparams = new URLSearchParams(location.search)
  const slug = Queryparams.get('category')

  const [categories, setCategory] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(res => {
      setCategory(res.data)
      // console.log(categories);

    }).catch(err => console.log(err))
  }, [])

  const active = (cate) => {
    if (slug == cate.slug) {
      return 'bg-white'
    }
  }

  const defaultCategory = () => {
    if (location.pathname == '/') {
      return 'bg-white'
    }
  }

  return (
    <div className=''>
      <ul className='bg-gray-200 sm:text-base text-xs rounded-md sm:p-1 p-0.5 h-screen max-h-fit overflow-x-hidden overscroll-auto overflow-scroll 
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      '>
        <Link to={'/'}> <li className={`${defaultCategory()} transition-all sm:my-1 truncate text-ellipsis sm:p-3 py-2 cursor-pointer rounded-md flex justify-between`}>All Product <span className='hidden sm:block'> <ArrowRightIcon /> </span> </li></Link>
        {
          categories.map((cate, index) => {
            return <Link to={`/Category?category=${cate.slug}`} key={index}><li className={`${active(cate)} transition-all sm:my-1 truncate text-ellipsis sm:p-3 py-2 cursor-pointer rounded-md flex justify-between`}>{cate.name}<span className='hidden sm:block'> <ArrowRightIcon /> </span></li></Link>
          })
        }
      </ul>
    </div>
  )
}

export default Category