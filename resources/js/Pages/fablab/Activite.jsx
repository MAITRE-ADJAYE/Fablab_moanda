import React from 'react';
import CustomNavbar from './Navbar.jsx';
import { Card, Button, Carousel } from 'react-bootstrap';
import Footer from './Footer.jsx';

const Formation = () => {
    const formations = [
        {
            id: 1,
            titre: 'Formation 1',
            description: 'Description de la formation 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Formation+1'
        },
        {
            id: 2,
            titre: 'Formation 2',
            description: 'Description de la formation 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Formation+2'
        },
        {
            id: 3,
            titre: 'Formation 3',
            description: 'Description de la formation 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Formation+3'
        }
    ];

    return (
        <>
            <CustomNavbar />
            <div className="container">
                <h1>Nos Formations</h1>

                {/* Carousel */}
                <Carousel>
                    {formations.map(formation => (
                        <Carousel.Item key={formation.id}>
                            <img
                                className="d-block w-100"
                                src={formation.image}
                                alt={formation.titre}
                            />
                            <Carousel.Caption>
                                <h3>{formation.titre}</h3>
                                <p>{formation.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                {/* Liste des formations en cards */}
                <div className="row mt-4">
                    {formations.map(formation => (
                        <div key={formation.id} className="col-lg-4 col-md-6 mb-4">
                            <Card>
                                <Card.Img variant="top" src={formation.image} />
                                <Card.Body>
                                    <Card.Title>{formation.titre}</Card.Title>
                                    <Card.Text>
                                        {formation.description}
                                    </Card.Text>
                                    <Button variant="primary">Détails</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Formation;
