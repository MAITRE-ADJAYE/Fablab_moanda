import React, { useState } from 'react';
import CustomNavbar from './Navbar.jsx';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import Footer from './Footer.jsx';
import '../../../css/realisation.css'; // Assurez-vous de créer ce fichier CSS

import Image from '../../../images/electro2.webp';
import Image1 from '../../../images/carrousel1.webp';
import Image2 from '../../../images/ref2.jpg';
import Image3 from '../../../images/ref3.jpg';
import video from '../../../images/video.mp4';

const Realisations = () => {
    const [showModal, setShowModal] = useState(false); // État pour contrôler l'ouverture du modal
    const [selectedRealisation, setSelectedRealisation] = useState(null); // État pour stocker le projet sélectionné

    const realisations = [
        {
            id: 1,
            titre: 'Projet X',
            description: 'Description du projet X. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: Image
        },
        {
            id: 2,
            titre: 'Projet Y',
            description: 'Description du projet Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: Image1
        },
        {
            id: 3,
            titre: 'Projet Z',
            description: 'Description du projet Z. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: Image2
        },
        {
            id: 4,
            titre: 'Projet X',
            description: 'Description du projet X. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: Image3
        },
        {
            id: 5,
            titre: 'Projet Y',
            description: 'Description du projet Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: Image3
        },
        {
            id: 6,
            titre: 'Projet Z',
            description: 'Description du projet Z. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: Image2
        }
    ];

    const handleOpenModal = (realisation) => {
        setSelectedRealisation(realisation);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <nav>
                <CustomNavbar />
            </nav>
            <Container className="mt-5">
                <h1 className="text-primary">RÉALISATIONS</h1>
                <p style={{ textAlign: 'justify' }}>Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
                <section>
                    <h2 className="mt-4">Atelier</h2>
                    <div className="atelier-video text-center">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/YAe37Fnsd-k"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
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
                                        <Button variant="primary" onClick={() => handleOpenModal(realisation)}>Lire plus</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>

            {/* Modal pour afficher les détails du projet */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedRealisation && selectedRealisation.titre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedRealisation && selectedRealisation.description}</p>
                    {/* Ajoutez ici d'autres informations spécifiques du projet si nécessaire */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
                </Modal.Footer>
            </Modal>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Realisations;
