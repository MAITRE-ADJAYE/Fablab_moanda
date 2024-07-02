import React from 'react';
import { Link } from '@inertiajs/react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../images/logo.png";
import { route } from 'ziggy-js';  // Importation correcte de Ziggy

export default function CustomNavbar() {
    return (
        <div className="navbar-container">
            {/* Deuxième menu */}
            <Navbar style={{ backgroundColor: '#004C97' }} variant="light" expand="lg" className="shadow mb-2 menu3 ">
                <Container>
                    <Navbar.Brand as={Link} href={route('welcome')}>
                        <img src={logo} className="mr-3 h-12 sm:h-16 menu1" alt="App Logo" /> {/* Augmentation de la taille du logo */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="second-navbar-nav" />
                    <Navbar.Collapse id="second-navbar-nav">
                        <Nav className="ms-auto menu2">
                            <NavDropdown title="Communauté" id="communaute-dropdown" className="text-white">
                                <NavDropdown.Item as={Link} href={route('evenement')} className="text-dark">Événements</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('communaute')} className="text-dark">Communauté</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} href={route('evenement')} className="text-white">
                                Événement
                            </Nav.Link>
                            <Nav.Link as={Link} href={route('contact')} className="text-white">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Premier menu */}
            <Navbar style={{ backgroundColor: '#ffffff', width: '26%' }} variant="dark" expand="lg" className="shadow custom-navbar">
            <Container>
                <Navbar.Toggle aria-controls="first-navbar-nav" />
                <Navbar.Collapse id="first-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} href={route('welcome')} className="text-dark">
                            Accueil
                        </Nav.Link>
                        <NavDropdown title="Formations" id="formations-dropdown" className="text-dark ">
                            <NavDropdown.Item as={Link} href={route('element')} className="text-dark">Elements</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href={route('activite')} className="text-dark">Activites</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href={route('actualite')} className="text-dark">
                            Actualité
                        </Nav.Link>
                        <Nav.Link as={Link} href={route('realisations')} className="text-dark">
                            Réalisations
                        </Nav.Link>
                        <Nav.Link as={Link} href={route('equipements')} className="text-dark">
                            Équipements
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}
