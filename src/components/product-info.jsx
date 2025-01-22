import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import ProductDetail from '../Layout/product-detail';
import CircleLoading from './circle-loading';

function ProductInfo() {
  // const { id } = useParams();
  const location = useLocation();
  const Queryparams = new URLSearchParams(location.search)
  const id = Queryparams.get('id')

  const [productdetail, setProductdetail] = useState([]);
  const [productreview, setProductReview] = useState([]);
  const [producttags, setProductTags] = useState([]);
  const [productimagies, setProductImages] = useState([]);
  const [productrating, setProductRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(<CircleLoading />)
    axios.get(`https://dummyjson.com/products/${id}`).then(res => {
      setProductdetail(res.data);
      setProductRating(res.data.rating)
      setProductReview(res.data.reviews);
      setProductTags(res.data.tags);
      setProductImages(res.data.images);
      setLoading(false)
    }).catch(err => console.log('err', err));

  }, [id])

  return (
    <>
      <ProductDetail productdetail={productdetail} loading={loading} rating={productrating} reviews={productreview} tags={producttags} images={productimagies} />
    </>
  )
}

export default ProductInfo