import { Button } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
// import { CartContext } from './addTocart';


function CartComponent() {
  // const {cart} = useContext(CartContext)
  const [cartproduct, setProduct] = useState([]);
  const [quantities, setQuantities] = useState(1);    
  

  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem('cart product')))
  },[])  

  const calculateDiscountedPrice = (cartproduct) => {
    return (cartproduct.price - (cartproduct.price * cartproduct.discountPercentage / 100)).toFixed(2);
  };

const remove = () => {
  localStorage.removeItem('cart product')
}


const increase = () => {
    const quantity = quantities & cartproduct.stock
   if(!quantity){
    return setQuantities(quantities  + 1)
  }
  };
  
  const decrease = () => {
    if(quantities > 1){
      return setQuantities(quantities - 1)
    }
  };


  return (
    <>
    {
      cartproduct ? 
      // cart.map((cartproduct) =>{
       <div key={cartproduct.id} className='lg:max-w-7xl h-screen mx-auto max-w-2xl mt-10'>
      <div className="mb-4 flex mx-2 flex-col lg:flex-row lg:shadow-md text-center justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-full hover:bg-gray-100">
        <img className="w-full rounded-t-lg h-40 md:h-40 md:w-48 md:rounded-none md:rounded-s-lg" src={cartproduct.thumbnail} alt={cartproduct.title} />

        <div className="flex flex-col w-fit md:w-96 justify-between p-4 leading-normal ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate ...">{cartproduct.title}</h5>
          <p className="mb-3 font-normal text-gray-700">{cartproduct.category}</p>
        </div>
        <p className='text-red-700 w-fit flex gap-3 items-center'>
          <Button onClick={() => decrease()} variant="text" className='' size="small"> <RemoveOutlinedIcon fontSize="small" /> </Button>
          {quantities}
          <Button onClick={() => increase()} variant="text" size="small"> <AddOutlinedIcon fontSize="small" /> </Button>
        </p>

        <div className='flex gap-2'>
          <Button variant="outlined" size="small" color='success' endIcon={<ShoppingCartIcon />} >Buy Now</Button> <br />
          <Button variant="outlined" size="small" color='error' endIcon={<DeleteIcon />} onClick={() => remove()}>Remove</Button>
        </div>

        <div className='flex flex-col p-5'>
          <span className='w-44 flex justify-between pb-1' style={{ color: 'blue' }}>
            <span>Base Price:</span> ${cartproduct.price}
          </span>
          <span className='w-44 flex justify-between pb-1' style={{ color: 'blue' }}>
            <span>Disc. Price:</span> ${calculateDiscountedPrice(cartproduct)}
          </span>
          <span className='w-44 flex justify-between pb-1' style={{ color: 'blue' }}>
            <span>Quantity:</span> {quantities}
          </span>
          <hr className='pb-1' />
          <span className='w-44 flex justify-between' style={{ color: 'blue' }}>
            <span>Total:</span> ${(calculateDiscountedPrice(cartproduct) * quantities).toFixed(2)}
          </span>
        </div>
      </div>
    </div> 
// } )
    : 
    (
      <div className='w-full text-6xl opacity-50 text-gray-600 h-screen flex items-center justify-center '>
        No item in cart...
      </div>
    )
    }
    </>

  )
}

export default CartComponent