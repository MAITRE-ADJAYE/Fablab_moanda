import { Link } from '@inertiajs/react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaKey } from 'react-icons/fa'; // Importez l'icône de clé depuis Font Awesome
import logo from "../../../images/logo.png";

export default function CustomNavbar() {
    return (
        <Navbar style={{ backgroundColor: '#004C97' }} variant="dark" expand="lg" className="shadow">
            <Container>
                <Navbar.Brand as={Link} href="/">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="App Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Premier menu */}
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} href={route('welcome')} className="text-white">
                            Accueil
                        </Nav.Link>
                        <NavDropdown title="Formations" id="formations-dropdown" className="text-white">
                            <NavDropdown.Item as={Link} href={route('formation')}>Formation 1</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href={route('formation')}>Formation 2</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href={route('actualite')} className="text-white">
                            Actualité
                        </Nav.Link>
                        <Nav.Link as={Link} href={route('realisations')} className="text-white">
                            Réalisations
                        </Nav.Link>
                        <Nav.Link as={Link} href={route('equipements')} className="text-white">
                            Équipements
                        </Nav.Link>
                        <NavDropdown title="Communauté" id="communaute-dropdown" className="text-white">
                            <NavDropdown.Item as={Link} href={route('evenement')}>Événements</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href={route('communaute')}>Communauté</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href={route('contact')} className="text-white">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {/* 
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    { Deuxième menu }
                    <Nav className="ms-auto">
                    <Nav.Link as={Link} href={route('communaute')} className="text-white">
                            Communauté
                        </Nav.Link>
                        <Nav.Link as={Link} href={route('actualite')} className="text-white">
                            Événement
                        </Nav.Link>
                        <Nav.Link as={Link} href={route('realisations')} className="text-white">
                            Contact
                        </Nav.Link>
                        <Nav.Link as={Link} href={route('register')} className="text-white ml-auto">
                            <FaKey className="ml-2" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>*/}
        </Navbar>
    );
}
