import React from 'react';
import CustomNavbar from './Navbar.jsx';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer.jsx';
import '../../../css/realisation.css'; // Assurez-vous de créer ce fichier CSS

const Realisations = () => {
    const realisations = [
        {
            id: 1,
            titre: 'Projet X',
            description: 'Description du projet X. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Projet+X'
        },
        {
            id: 2,
            titre: 'Projet Y',
            description: 'Description du projet Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Projet+Y'
        },
        {
            id: 3,
            titre: 'Projet Z',
            description: 'Description du projet Z. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Projet+Z'
        },

        {
            id: 4,
            titre: 'Projet X',
            description: 'Description du projet X. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Projet+X'
        },
        {
            id: 5,
            titre: 'Projet Y',
            description: 'Description du projet Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Projet+Y'
        },
        {
            id: 6,
            titre: 'Projet Z',
            description: 'Description du projet Z. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Projet+Z'
        }

    ];

    return (
        <>
            <nav>
            <CustomNavbar />
            </nav>
            <Container className="mt-5">
                <h1 className="text-primary">RÉALISATIONS</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
                <section>
                    <h2 className="mt-4">Atelier</h2>
                    <div className="atelier-video text-center">
                        <video
                            className="video-fluid"
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            controls
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                </section>

                <section>
                    <h2 className="mt-4">Exercices</h2>
                    <Row>
                        {realisations.map(realisation => (
                            <Col key={realisation.id} lg={4} md={6} className="mb-4">
                                <Card>
                                    <Card.Img variant="top" src={realisation.image} />
                                    <Card.Body>
                                        <Card.Title>{realisation.titre}</Card.Title>
                                        <Card.Text>
                                            {realisation.description}
                                        </Card.Text>
                                        <Button variant="primary">Lire plus</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Realisations;
