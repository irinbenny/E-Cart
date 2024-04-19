import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  return (
    <>
     <Navbar expand="lg" className="bg-primary px-5 py-4 position-fixed w-100 top-0 " style={{zIndex:'1'}}>
      <Container fluid>

          <Navbar.Brand href="#" className='text-light'><FontAwesomeIcon icon={faCartShopping} bounce className='me-3' />E-CART</Navbar.Brand>
  
       <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         <Nav className='ms-auto me-5'>
<Link to='/PWishlist'>
           <Button className='btn btn-outline-light rounded'><FontAwesomeIcon icon={faHeart} className='me-2 text-danger'/>Wishlist <Badge bg="secondary" className='ms-2 rounded'>{wishlistArray.length}</Badge></Button>
  
</Link>        
<Link to='/Pcart'>
   <Button className='btn btn-outline-light rounded ms-2 me-5'><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color:'yellow'}}/>Cart <Badge bg="secondary" className='ms-2 rounded'>2</Badge></Button>
  
</Link>         </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header