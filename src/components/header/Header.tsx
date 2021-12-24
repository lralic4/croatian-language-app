import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require('../../images/cro-flag-logo.png')}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Learn Croatian
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
