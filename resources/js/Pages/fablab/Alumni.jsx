import React, { useState } from 'react';
import CustomNavbar from '../fablab/Navbar.jsx';
import { Card, Button, Carousel, Modal, Container, Row, Col } from 'react-bootstrap';
import Footer from '../fablab/Footer.jsx';
import { motion } from 'framer-motion'; // Import Framer Motion
import image1 from '../../../images/projet.jpg'; // Importation des images
import image2 from '../../../images/visite.jpg';
import image3 from '../../../images/projet.jpg';
import image4 from '../../../images/projet.jpg';
import image5 from '../../../images/projet.jpg';
import image6 from '../../../images/visite.jpg';
import '../../../css/Alumni.css'; // Importation des styles CSS personnalisés

const Alumni = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const membres = [
        {
            id: 1,
            nom: 'Jean Dupont',
            description: 'Passionné de technologie et d\'innovation.',
            image: image1
        },
        {
            id: 2,
            nom: 'Marie Martin',
            description: 'Ingénieure spécialisée en développement durable.',
            image: image2
        },
        {
            id: 3,
            nom: 'Pierre Dubois',
            description: 'Artisan numérique et créatif.',
            image: image3
        },
        {
            id: 4,
            nom: 'Jean Dupont',
            description: 'Passionné de technologie et d\'innovation.',
            image: image4
        },
        {
            id: 5,
            nom: 'Marie Martin',
            description: 'Ingénieure spécialisée en développement durable.',
            image: image5
        },
        {
            id: 6,
            nom: 'Pierre Dubois',
            description: 'Artisan numérique et créatif.',
            image: image6
        }
    ];

    const handleShowModal = (member) => {
        setSelectedMember(member);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMember(null);
    };

    return (
        <>
            <nav>
                <CustomNavbar />
            </nav>
            <Container className="mt-5">
                <h1>Alumni</h1>
                <Carousel className="carousel-custom">
                    {membres.map(membre => (
                        <Carousel.Item key={membre.id}>
                            <img
                                className="d-block w-100"
                                src={membre.image}
                                alt={membre.nom}
                            />
                            <Carousel.Caption>
                                <h3>{membre.nom}</h3>
                                <p>{membre.description.length > 50 ? membre.description.substring(0, 50) + '...' : membre.description}</p>
                                <Button variant="primary" onClick={() => handleShowModal(membre)}>Voir profil</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
            <Container>
                <Row className="mt-5">
                    {membres.map(membre => (
                        <Col lg={4} md={6} sm={12} key={membre.id} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Card>
                                    <Card.Img variant="top" src={membre.image} />
                                    <Card.Body>
                                        <Card.Title>{membre.nom}</Card.Title>
                                        <Card.Text>
                                            {membre.description.length > 50 ? membre.description.substring(0, 50) + '...' : membre.description}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => handleShowModal(membre)}>Voir profil</Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* Modal */}
            {selectedMember && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedMember.nom}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={selectedMember.image} alt={selectedMember.nom} className="img-fluid mb-3" />
                        <p>{selectedMember.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Fermer
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Alumni;
