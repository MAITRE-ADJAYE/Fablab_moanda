import React from 'react';
import CustomNavbar from '../fablab/Navbar.jsx';
import { Card, Button, Carousel } from 'react-bootstrap';
import Footer from '../fablab/Footer.jsx';

const Alumni = () => {
    const membres = [
        {
            id: 1,
            nom: 'Jean Dupont',
            description: 'Passionné de technologie et d\'innovation.',
            image: 'https://via.placeholder.com/600x300'
        },
        {
            id: 2,
            nom: 'Marie Martin',
            description: 'Ingénieure spécialisée en développement durable.',
            image: 'https://via.placeholder.com/600x300'
        },
        {
            id: 3,
            nom: 'Pierre Dubois',
            description: 'Artisan numérique et créatif.',
            image: 'https://via.placeholder.com/600x300'
        }
    ];

    return (
        <>
            <CustomNavbar />
            <div className="container">
                <h1>Notre Alumni</h1>
                <Carousel>
                    {membres.map(membre => (
                        <Carousel.Item key={membre.id}>
                            <img
                                className="d-block w-100"
                                src={membre.image}
                                alt={membre.nom}
                            />
                            <Carousel.Caption>
                                <h3>{membre.nom}</h3>
                                <p>{membre.description}</p>
                                <Button variant="primary">Voir profil</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="row mt-4">
                    {membres.map(membre => (
                        <div key={membre.id} className="col-lg-4 col-md-6 mb-4">
                            <Card>
                                <Card.Img variant="top" src={membre.image} />
                                <Card.Body>
                                    <Card.Title>{membre.nom}</Card.Title>
                                    <Card.Text>
                                        {membre.description}
                                    </Card.Text>
                                    <Button variant="primary">Voir profil</Button>
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

export default Alumni;
