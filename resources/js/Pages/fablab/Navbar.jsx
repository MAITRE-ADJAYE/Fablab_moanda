import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../images/logo.png";
import { route } from 'ziggy-js';  // Importation correcte de Ziggy
import '../../../css/navbar.css';  // Importez votre fichier CSS ici

export default function CustomNavbar() {
    const { url } = usePage(); // Utilisation de usePage() pour récupérer les propriétés de la page

    const isActive = (routeName) => {
        return url && url.route && url.route.name === routeName;
    };

    return (
        <div className="navbar-container">
            {/* Deuxième menu */}
            <Navbar style={{ backgroundColor: '#004C97' }} variant="dark" expand="lg" className="shadow mb-2 menu3">
                <Container>
                    <Navbar.Brand as={Link} href={route('welcome')}>
                        <img src={logo} className="ml-5 h-12 menu1" alt="App Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="second-navbar-nav" className="custom-toggler text-bg-warning" />
                    <Navbar.Collapse id="second-navbar-nav">
                        <Nav className="ms-auto menu2">
                            <div title="Menu Principal" id="basic-nav-dropdown" className="text-white d-lg-none">
                                <NavDropdown.Item as={Link} href={route('welcome')} className="nav-link-custom">Accueil</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('evenement')} className="nav-link-custom">Événements</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('actualite')} className="nav-link-custom">Actualités</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('realisations')} className="nav-link-custom">Réalisations</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('equipements')} className="nav-link-custom">Équipements</NavDropdown.Item>
                            </div>
                            <NavDropdown title="Communauté" id="communaute-dropdown" className="text-white">
                                <NavDropdown.Item as={Link} href={route('benevole')} className="text-dark">Bénévoles</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('alumni')} className="text-dark">Alumni</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Formations" id="formations-dropdown" className="text-white">
                                <NavDropdown.Item as={Link} href={route('developpement')} className="text-dark">Dev Web et Web Mobile</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('referent')} className="text-dark">Référent Digital</NavDropdown.Item>
                                <NavDropdown.Item as={Link} href={route('electro')} className="text-dark">Électronique/Robotique/3D</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} href={route('contact')} className="text-white">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Premier menu (masqué sur écrans petits) */}
            <Navbar style={{ backgroundColor: '#ffffff' }} variant="light" expand="lg" className="shadow custom-navbar d-none d-lg-block">
                <Container>
                    <Navbar.Toggle aria-controls="first-navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="first-navbar-nav">
                        <Nav className="ms-auto nav-pills">
                            <Nav.Link as={Link} href={route('welcome')} className="text-blue nav-link">Accueil</Nav.Link>
                            <Nav.Link as={Link} href={route('evenement')} className="text-blue nav-link">Événements</Nav.Link>
                            <Nav.Link as={Link} href={route('actualite')} className="text-blue nav-link">Actualités</Nav.Link>
                            <Nav.Link as={Link} href={route('realisations')} className="text-blue nav-link">Réalisations</Nav.Link>
                            <Nav.Link as={Link} href={route('equipements')} className="text-blue nav-link">Équipements</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
