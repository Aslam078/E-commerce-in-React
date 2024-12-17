import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import ProductDetail from '../Layout/product-detail';

function ProductInfo() {
    // const { id } = useParams();
    const location = useLocation();
    const Queryparams = new URLSearchParams(location.search)
    const id = Queryparams.get('id')

    const[productdetail,setProductdetail] = useState([]);
    const[productreview,setProductReview] = useState([]);
    const[producttags,setProductTags] = useState([]);
    const[productimagies,setProductImages] = useState([]);
    const[productrating,setProductRating] = useState(0);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then(res => {
            setProductdetail(res.data);
            setProductRating(res.data.rating)
            setProductReview(res.data.reviews);
            setProductTags(res.data.tags);
            setProductImages(res.data.images);
        }).catch(err => console.log('err',err));
    
    },[id])  

    // console.log('set-image',productimagies)

  return (
    <>
    <ProductDetail productdetail={productdetail} rating={productrating} reviews={productreview} tags={producttags} images={productimagies}  />

    </>
  )
}

export default ProductInfo