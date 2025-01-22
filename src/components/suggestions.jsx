import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


function Suggestions() {

    const location = useLocation();
    const Queryparams = new URLSearchParams(location.search)
    const Cate = Queryparams.get('cate')
    const id = Queryparams.get('id')
    // console.log('cate', id);

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${Cate}`).then(res => {
            setSuggestions(res.data.products.filter(product => product.id !== parseInt(id)));
        }).catch(err => console.log(err))
    }, [Cate])

    // console.log('suggestions', suggestions);

    const calculateDiscountedPrice = (product) => {
        return (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
    };


    return (
        <>

            {
                suggestions.map((product) => {
                    return <Card key={product.id} sx={{ width: 250, maxWidth: 350, paddingX: 1 }}>

                        <Link to={`?id=${product.id}&title=${product.title}?&cate=${product.category}`}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={product.thumbnail}
                                title={product.title}
                            />
                        </Link>

                        <CardContent>
                            <Link to={`${product.id}?title=${product.title}?&cate=${product.category}`}>
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
                    </Card >
                })
            }
        </>
    )
}

export default Suggestions