import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function CateProduct({ catProduct, loading }) {

  const calculateDiscountedPrice = (product) => {
    return (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);
  };

  const productleft = (product) => {
    if (product.stock <= 10 && product.stock >= 1) {
      return <span className='text-orange-600'>only few left</span>
    } else if (product.stock == 0) {
      return <span className='text-red-600'>out of stock!!!</span>
    } else {
      return <span>{product.stock} left</span>
    }
  }

  return (

    <>
      {loading ? loading :
        <div className='grid bg-gray-300 p-1 rounded-md grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-2'>

          {
            catProduct.map((product) => {

              return (
                <Card
                  key={product.id}
                  sx={{ maxWidth: 345 }}
                  className=''>
                  <Link to={`Product/detail/?id=${product.id}&title=${product.title}?&cate=${product.category}`} >
                    <div className='hover:scale-110 transition-all animate__animated animate__fadeIn duration-500'>
                      <CardMedia
                        sx={{ height: 300 }}
                        image={product.thumbnail}
                        title={product.title}
                      />
                    </div>
                  </Link>
                  <CardContent>

                    <Link to={`Product/detail/?id=${product.id}&title=${product.title}?&cate=${product.category}`} >
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
                      {productleft(product)}
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
      }
    </>
  )
}

export default CateProduct