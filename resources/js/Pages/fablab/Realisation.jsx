import React from 'react';
import CustomNavbar from './Navbar.jsx';
import { Card, Button, Carousel } from 'react-bootstrap';
import Footer from './Footer.jsx';

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
        }
    ];

    return (
        <>
            <CustomNavbar />
            <div className="container">
                <h1>Nos Réalisations</h1>

                {/* Carousel */}
                <Carousel>
                    {realisations.map(realisation => (
                        <Carousel.Item key={realisation.id}>
                            <img
                                className="d-block w-100"
                                src={realisation.image}
                                alt={realisation.titre}
                            />
                            <Carousel.Caption>
                                <h3>{realisation.titre}</h3>
                                <p>{realisation.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                {/* Liste des réalisations en cards */}
                <div className="row mt-4">
                    {realisations.map(realisation => (
                        <div key={realisation.id} className="col-lg-4 col-md-6 mb-4">
                            <Card>
                                <Card.Img variant="top" src={realisation.image} />
                                <Card.Body>
                                    <Card.Title>{realisation.titre}</Card.Title>
                                    <Card.Text>
                                        {realisation.description}
                                    </Card.Text>
                                    <Button variant="primary">Voir détails</Button>
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

export default Realisations;
