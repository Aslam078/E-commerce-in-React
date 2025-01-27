import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CircleLoading from './circle-loading';


function TopMobile() {

    const [topmobile, setTopmobile] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading( <CircleLoading /> )
        axios.get('https://dummyjson.com/products/category/smartphones?sortBy=rating&order=desc&limit=4').then(res => {
            setTopmobile(res.data.products);
            setLoading(false)
        }).catch(err => console.log(err))
    }, [])

    const calculateDiscountedPrice = (product) => {
        return (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
    };

    return (


        <>
        <div className='bg-gray-200'>
        <p className='text-2xl font-semibold pt-3 ps-1'>Mobiles</p>
            {loading ? loading :
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 items-center xl:grid-cols-2 gap-2 p-2'>
            {

                topmobile.map(product => {
                    return (
                        <Card key={product.id} sx={{ maxWidth: 320 }}>

                            <div className='hover:scale-110 transition-all duration-300 flex items-center justify-center'>

                                <Link to={`Product/detail/?id=${product.id}&title=${product.title}?&cate=${product.category}`}>
                                    <CardMedia
                                        sx={{ height: 235, width: 235 }}
                                        image={product.thumbnail}
                                        title={product.title}   
                                    />
                                </Link>

                            </div>
                            <CardContent>
                                <Link to={`Product/detail/?id=${product.id}&title=${product.title}?&cate=${product.category}`}>
                                <Typography variant='h5' component="div" className='flex gap-2 items-center'>
                                    <span>{product.rating}</span>
                                    <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly size="small" />
                                </Typography>
                                </Link>

                            </CardContent>
                        </Card>
                    )

                })

            }
        </div>
            }
            </div>
        </>

    )
}

export default TopMobile