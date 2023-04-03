import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function Header() {
    return (
        <Navbar bg='light' sticky='top' className='Header'>
            <Container>
                <Navbar.Brand>Movie Recommender</Navbar.Brand>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
            </Container>
        </Navbar>
    );
}