import React from 'react';
import CustomNavbar from './Navbar.jsx';
import { Card, Button, Carousel } from 'react-bootstrap';
import Footer from './Footer.jsx';

const Equipement = () => {
    const equipements = [
        {
            id: 1,
            nom: 'Machine X',
            description: 'Description de la machine X. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Machine+X'
        },
        {
            id: 2,
            nom: 'Machine Y',
            description: 'Description de la machine Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Machine+Y'
        },
        {
            id: 3,
            nom: 'Machine Z',
            description: 'Description de la machine Z. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Machine+Z'
        }
    ];

    return (
        <>
            <CustomNavbar />
            <div className="container">
                <h1>Nos Équipements</h1>
                {/* Carousel */}
                <Carousel>
                    {equipements.map(equipement => (
                        <Carousel.Item key={equipement.id}>
                            <img
                                className="d-block w-100"
                                src={equipement.image}
                                alt={equipement.nom}
                            />
                            <Carousel.Caption>
                                <h3>{equipement.nom}</h3>
                                <p>{equipement.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                {/* Liste des équipements en cards */}
                <div className="row mt-4">
                    {equipements.map(equipement => (
                        <div key={equipement.id} className="col-lg-4 col-md-6 mb-4">
                            <Card>
                                <Card.Img variant="top" src={equipement.image} />
                                <Card.Body>
                                    <Card.Title>{equipement.nom}</Card.Title>
                                    <Card.Text>
                                        {equipement.description}
                                    </Card.Text>
                                    <Button variant="primary">Voir détails</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Equipement;
