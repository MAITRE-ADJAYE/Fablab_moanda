import React from 'react';
import CustomNavbar from './Navbar.jsx';
import { Card, Button, Carousel } from 'react-bootstrap';
import Footer from './Footer.jsx';

const Evenement = () => {
    const evenements = [
        {
            id: 1,
            titre: 'Événement 1',
            description: 'Description de l\'événement 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '1er Janvier 2025',
            image: 'https://via.placeholder.com/600x400?text=Événement+1'
        },
        {
            id: 2,
            titre: 'Événement 2',
            description: 'Description de l\'événement 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '15 Février 2025',
            image: 'https://via.placeholder.com/600x400?text=Événement+2'
        },
        {
            id: 3,
            titre: 'Événement 3',
            description: 'Description de l\'événement 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '30 Avril 2025',
            image: 'https://via.placeholder.com/600x400?text=Événement+3'
        }
    ];

    return (
        <>
            <CustomNavbar />
            <div className="container">
                <h1>Événements</h1>

                {/* Carousel */}
                <Carousel>
                    {evenements.map(evenement => (
                        <Carousel.Item key={evenement.id}>
                            <img
                                className="d-block w-100"
                                src={evenement.image}
                                alt={evenement.titre}
                            />
                            <Carousel.Caption>
                                <h3>{evenement.titre}</h3>
                                <p>{evenement.description}</p>
                                <p>Date : {evenement.date}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                {/* Liste des événements en cards */}
                <div className="row mt-4">
                    {evenements.map(evenement => (
                        <div key={evenement.id} className="col-lg-4 col-md-6 mb-4">
                            <Card>
                                <Card.Img variant="top" src={evenement.image} />
                                <Card.Body>
                                    <Card.Title>{evenement.titre}</Card.Title>
                                    <Card.Text>
                                        {evenement.description}
                                    </Card.Text>
                                    <Card.Text>
                                        Date : {evenement.date}
                                    </Card.Text>
                                    <Button variant="primary">En savoir plus</Button>
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

export default Evenement;
