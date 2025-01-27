import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CircleLoading from './circle-loading';

function HighDiscount() {
    const [highdiscount, setHighdiscount] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading( <CircleLoading /> )
        axios.get('https://dummyjson.com/products?sortBy=discountPercentage&order=desc&limit=4').then(res => {
            setHighdiscount(res.data.products)
            setLoading( false )
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
        <div className='bg-gray-200'>
        <p className='text-2xl font-semibold pt-3 ps-3'>Top offers</p>
        {loading ? loading :
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 items-center xl:grid-cols-2 gap-2 p-2'>
                {
                    highdiscount.map((product) => {
                        return <Card key={product.id} sx={{ maxWidth: 320 }}>
                            <Link to={`Product/detail/?id=${product.id}&title=${product.title}?&cate=${product.category}`}>
                            <div className='hover:scale-110 transition-all duration-300 flex items-center justify-center'>
                                <CardMedia
                                    sx={{ minHeight: 235,width: 235 }}
                                    image={product.thumbnail}
                                    title={product.title}
                                />
                                </div>
                                <CardContent>
                                    
                                    <Typography variant="h5" component="div">
                                        {product.discountPercentage}% off
                                    </Typography>

                                </CardContent>
                            </Link>
                        </Card>
                    })
                }
            </div>
        }
            </div>
        </>
    );
}

export default HighDiscount