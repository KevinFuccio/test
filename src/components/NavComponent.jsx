import {Container,Nav,Navbar} from 'react-bootstrap'

function navComponent() {
    return(
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Navbar Bellina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default navComponent