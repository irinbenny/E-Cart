import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const dispatch=useDispatch();
  const cartArray =useSelector((state=>state.cartReducer))
  console.log(cartArray);
  return (
    <div className='row' style={{marginTop:'100px'}}>
      <div className='col-md-8 p-5 d-flex justify-content-center align-items-center'style={{overflowX:'auto'}}>
      <table className='table table-shadow'>
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
        <tr>
          <td>1</td>
          <td>title</td>
          <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5F1VutINVB2MIUaISUNvXIHK4NgDuLSc3g&usqp=CAU" alt="" /></td>
          <td>$ 80</td>
          <td><button className='btn btn-danger text-white'><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>
      </tbody>
    </table>
      </div>
      <div className='col-md-4 p-5 d-flex justify-content-center align-items-center'>
        <div className='shadow p-4'>
          <h3 className='text-warning mb-4'>Cart Summary</h3>
          <h5>Total number of product : <span className='text-warning'>8</span></h5>
          <h5>Total Price: <span className='text-warning'>$ 80</span></h5>
          <button className='btn btn-success mt-4 w-100'>Checkout</button>
        </div>
      </div>

    </div>
  )
}

export default Cart