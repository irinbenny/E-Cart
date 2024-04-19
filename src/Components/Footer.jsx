import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='row bg-primary p-5 text-light'>
      <div className="col-md-4  justify-content-center ">
        <h3 className='text-light mb-4'><FontAwesomeIcon icon={faCartShopping}  className='me-3' />E-CART</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores neque est, maxime optio atque, enim a provident blanditiis eligendi labore repellendus. Doloribus ut, iste quos obcaecati modi odit quia facere!</p>
      </div>
      <div className="col-md-2 justify-content-center ps-5">
       <h3 className='ms-4'>LINKS</h3>
        <ul style={{listStyle:'none'}}>
        <Link to='/' className='text-light' style={{textDecoration:'none'}}>  <li>Home</li></Link>
        <Link to='Pwishlist'  className='text-light' style={{textDecoration:'none'}}>  <li>Wishlist</li></Link>
        <Link to='/Pcart'  className='text-light' style={{textDecoration:'none'}}>  <li>Cart</li></Link>
        </ul>
      </div>
      <div className="col-md-3 justify-content-center px-4">
        <h3 className='ms-4'>GUIDES</h3>
        <ul style={{listStyle:'none'}}>
          <li>React</li>
          <li>React Bootstrap</li>
          <li>Bootswatch</li>
        </ul>
      </div>
      <div className="col-md-3 justify-content-center">
        <h3>CONTACT</h3>
        <div className='d-flex mt-4'>
          <input type="text" className='form-control' placeholder='Email-id'/>
          <button className='btn btn-warning'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-evenly mt-4'>
        <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
        <FontAwesomeIcon icon={faTwitter}  className='fa-2x'/>
        <FontAwesomeIcon icon={faLinkedin}  className='fa-2x'/>
        <FontAwesomeIcon icon={faFacebook}  className='fa-2x'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer