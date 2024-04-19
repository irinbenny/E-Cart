import React from 'react'
import {  faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';

function Pwishlist() {

  const dispatch=useDispatch();
  const wishlistArray =useSelector((state=>state.wishlistReducer))
  console.log(wishlistArray);

  const handleCart=(item)=>{
    dispatch(removeFromWishlist(item.id))
    dispatch(addToCart(item))
  }

  
  return (
    <>
    <h1 className='text-center mt-5 text-primary' style={{marginTop:'100px'}}>Wish List</h1>
     {
      wishlistArray?.length>0?
       <Row className='mt-5 p-5'>
        {wishlistArray.map((product)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '100%' }} className='rounded'>
        <Card.Img variant="top" src={product.thumbnail} height={'200px'} />
        <Card.Body>
          <Card.Title className='text-primary'><b>{product.title.slice(0,14)}</b></Card.Title>
          <Card.Text>
          {product.description.slice(0, 50)}
            <p className='fa-4 mt-3'><b>Price :  ₹ {product.price}</b></p>
          </Card.Text>
        <div className='d-flex justify-content-between'>
            <Button variant="outline-danger" className='rounded' onClick={()=>dispatch(removeFromWishlist(product.id))}><FontAwesomeIcon icon={faTrash} /></Button>
            <Button variant="outline-success" className='rounded' onClick={{handleCart}}><FontAwesomeIcon icon={faCartShopping} /></Button>

         
        </div> </Card.Body>
      </Card>
        </Col>
        ))}
      </Row>
       :
      <div className='d-flex justify-content-center align-items-center flex-column'>
       <img src="https://www.taazashahimewa.com/assets/front/images/wishlist-empty1.jpg" alt="" width={'50%'} height={'500px'}/>
      <button className='btn btn-success mb-5'>Back to Home</button>
      </div>
     }
    </>
  )
}

export default Pwishlist