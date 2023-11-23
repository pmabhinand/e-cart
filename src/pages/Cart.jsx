import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartArray=useSelector((state)=>state.cartReducer)
 // console.log(cartArray);
 const dispatch = useDispatch()
 const [total , setTotal]=useState(0)
 const navigate=useNavigate()

 const getTotal=()=>{
  if(cartArray.length>0){
    setTotal(cartArray?.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }
  else{
    setTotal(0)
  }
  
 }

 useEffect(()=>{
     getTotal()
 },[cartArray])

 const handlecart=()=>{
    alert('Thank you,your order placed successfully')
    dispatch(emptyCart())
    navigate('/')
 }

  return (
    <div style={{marginTop:'150px'}}>
      { cartArray?.length>0?
      <div className='row w-100'>
    
     <div className='col-lg-6 m-5'>
       <table className='table border shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartArray?.map((item,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td><img src={item.thumbnail} alt="no image" width={'100px'} height={'100px'} /></td>
            <td>Price :{item.price}</td>
            <td><Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger rounded"><i class="fa-solid fa-trash"></i></Button></td>
          </tr>))
       }
        </tbody>
      </table>
      </div>

      < div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
          <div className='border shadow p-5'>
             <h2 className='text-primary'>Cart Summary</h2>
             <h5>Total number of products: <span className='text-primary fw-bolder fs-3'>{cartArray.length}</span></h5>
             <h5>Total Price : {total}</h5>
             <button onClick={handlecart} className='btn btn-success rounded w-100 mt-3'>Checkout</button>
          </div>
         </div>:
           <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
           <img src='https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif' alt='no image' height={'300px'}/>
           <h4 className='text-danger mt-3'>your cart is empty</h4>
            <button className='btn btn-success rounded mt-3'><Link style={{textDecoration:'none',color:'white'}} to={'/'}><i class="fa-solid fa-arrow-left me-3"></i>Back to home</Link></button>
         </div>
   
      </div>:
           <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
           <img src='https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif' alt='no image' height={'300px'}/>
           <h4 className='text-danger mt-3'>your cart is empty</h4>
            <button className='btn btn-success rounded mt-3'><Link style={{textDecoration:'none',color:'white'}} to={'/'}><i class="fa-solid fa-arrow-left me-3"></i>Back to home</Link></button>
         </div>}
    </div>

  )
}

export default Cart