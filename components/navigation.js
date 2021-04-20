import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link'

const Navigation = () => {
return(
<Navbar bg="dark" variant="dark" fixed="top" >

<Navbar.Brand href="/">Navbar</Navbar.Brand>
      
    <Nav className="mr-auto">
      <Link href="/post" passHref>
        <Nav.Link href="#rr">Post</Nav.Link>
      </Link>
      
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
)}

export default Navigation;