import React from 'react';
import CustomNavbar from '../fablab/Navbar.jsx';
import { Card, Row, Col } from 'react-bootstrap';
import Footer from '../fablab/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import map from '../../../../public/map.png'; // Assurez-vous que ce chemin est correct

const Contact = () => {
    return (
        <>
            <CustomNavbar />
            <div className="container text-left mt-5">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    CONTACT
                </motion.h1>
                <motion.p
                    className="mt-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Bienvenue sur notre page de contact. Vous trouverez ci-dessous nos horaires d'ouverture, notre adresse et une carte pour vous aider à nous localiser.
                    Vous pouvez également nous suivre sur les réseaux sociaux pour rester informé de nos dernières actualités.
                </motion.p>
                <Row className="justify-content-center mb-5">
                    <Col md={6} className="mb-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <Card className="text-center mt-5">
                                <Card.Body>
                                    <Card.Title>Horaires</Card.Title>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>LUNDI</td>
                                                <td>8h à 18h</td>
                                            </tr>
                                            <tr>
                                                <td>MARDI</td>
                                                <td>8h à 18h</td>
                                            </tr>
                                            <tr>
                                                <td>MERCREDI</td>
                                                <td>8h à 18h</td>
                                            </tr>
                                            <tr>
                                                <td>JEUDI</td>
                                                <td>8h à 18h</td>
                                            </tr>
                                            <tr>
                                                <td>VENDREDI</td>
                                                <td>8h à 18h</td>
                                            </tr>
                                            <tr>
                                                <td>SAMEDI</td>
                                                <td>8h à 17h</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>

                    <Col md={6} className="mt-5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <a href="https://maps.app.goo.gl/E9okxY24DymYQoocA" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={map}
                                    alt="Google Map de Fablab Moanda"
                                    className="img-fluid"
                                />
                            </a>
                        </motion.div>
                        <Card.Text className='text-center'>
                            <strong>Adresse:</strong> Salle Polyvalente, R24, Moanda
                        </Card.Text>
                    </Col>

                </Row>

                <Row className="justify-content-center mb-5">
                    <Col md={8}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <Card className="text-center">
                                <Card.Body>
                                    <Card.Title>Suivez-nous</Card.Title>
                                    <div className="d-flex justify-content-around mt-4">
                                        <FontAwesomeIcon icon={faFacebookF} size="3x" className="text-primary mx-3" />
                                        <FontAwesomeIcon icon={faWhatsapp} size="3x" className="text-primary mx-3" />
                                        <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="text-primary mx-3" />
                                        <FontAwesomeIcon icon={faYoutube} size="3x" className="text-primary mx-3" />
                                    </div>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
