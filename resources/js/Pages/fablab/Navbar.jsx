import React from 'react';
import { Link } from '@inertiajs/react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../images/logo.png";
import { route } from 'ziggy-js';  // Importation correcte de Ziggy
import '../../../css/navbar.css';  // Importez votre fichier CSS ici

export default function CustomNavbar() {
    return (
        <div className="navbar-container">
            {/* Deuxième menu */}
            <Navbar style={{ backgroundColor: '#004C97' }} variant="light" expand="lg" className="shadow mb-2 menu3">
                <Container>
                    <Navbar.Brand as={Link} href={route('welcome')}>
                        <img src={logo} className="mr-3 h-12 sm:h-16 menu1" alt="App Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="second-navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="second-navbar-nav">
                        <Nav className="ms-auto menu2">
                            <NavDropdown title="Communauté" id="communaute-dropdown" className="text-white">
                                <NavDropdown.Item as={Link} href={route('benevole')} className="text-dark">Bénevole</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('alumni')} className="text-dark">Alumni</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Formations" id="formations-dropdown" className="text-blue">
                                <NavDropdown.Item as={Link} href={route('developpement')} className="text-dark">Développement</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('referent')} className="text-dark">Référent Digital</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('electro')} className="text-dark">Electronic robotique</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={Link} href={route('contact')} className="text-white">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Premier menu */}
            <Navbar style={{ backgroundColor: '#ffffff' }} variant="dark" expand="lg" className="shadow custom-navbar">
                <Container>
                    <Navbar.Toggle aria-controls="first-navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="first-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} href={route('welcome')} className="text-blue">
                                Accueil
                            </Nav.Link>
                            <Nav.Link as={Link} href={route('evenement')} className="text-blue">
                                Événement
                            </Nav.Link>
                            <Nav.Link as={Link} href={route('actualite')} className="text-blue">
                                Actualité
                            </Nav.Link>
                            <Nav.Link as={Link} href={route('realisations')} className="text-blue">
                                Réalisations
                            </Nav.Link>
                            <Nav.Link as={Link} href={route('equipements')} className="text-blue">
                                Équipements
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
