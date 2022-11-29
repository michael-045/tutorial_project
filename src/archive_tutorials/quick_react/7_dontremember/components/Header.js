// react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

// internal
import logo from './resources/logo192.png';

export default function Header() {
    return (
        <Navbar bg="light" sticky="top" className="Header">
            <Container>
                <Stack direction="horizontal">
                  <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                  <Navbar.Brand>MatMapper</Navbar.Brand>
                </Stack>
                <Stack direction="horizontal">
                  <Button>Login</Button> 
                  <Button>Register an Account</Button>
                </Stack>
            </Container>
        </Navbar>
    );
}