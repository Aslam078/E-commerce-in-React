import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function TopMobile() {

    const [topmobile, setTopmobile] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/smartphones?sortBy=rating&order=desc&limit=5').then(res => {
            setTopmobile(res.data.products);
        }).catch(err => console.log(err))
    }, [])

    const calculateDiscountedPrice = (product) => {
        return (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
    };

    return (


        <>
            <div className='grid p-1 rounded-md grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-3 gap-2 '>
                {

                    topmobile.map(product => {
                        return (
                            <Card key={product.id} sx={{ maxWidth: 365 }}>

                                <div className='hover:scale-110 transition-all flex items-center justify-center'>

                                    <Link to={`Product/detail/?id=${product.id}&title=${product.title}?&cate=${product.category}`}>
                                        <CardMedia
                                            sx={{ height: 300, width: 300 }}
                                            image={product.thumbnail}
                                            title={product.title}
                                        />
                                    </Link>

                                </div>
                                <CardContent>
                                    <Link to={`Product/detail/?id=${product.id}&title=${product.title}?&cate=${product.category}`}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            <p className='truncate hover:underline cursor-pointer'>{product.title}</p>
                                        </Typography>
                                    </Link>
                                    <Typography gutterBottom variant="p" component="div">
                                        {product.category}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        <span className='font-bold'>${calculateDiscountedPrice(product)}</span> <span className='text-gray-600 line-through opacity-85'>${product.price}</span> <span className='text-green-600 font-semibold'>{product.discountPercentage}% off</span>
                                    </Typography>

                                    <Typography gutterBottom variant="p" component="div">
                                        {product.stock} Left
                                    </Typography>

                                    <Typography gutterBottom variant="p" component="div" className='flex gap-2 items-center'>
                                        <span className='text-gray-400 text-sm'>{product.rating}</span>
                                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly size="small" />
                                    </Typography>


                                </CardContent>
                            </Card>
                        )

                    })

                }
            </div>
        </>

    )
}

export default TopMobile