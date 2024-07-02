import React from 'react';
import CustomNavbar from '../fablab/Navbar.jsx';
import { Card, Button, Form, Carousel } from 'react-bootstrap';
import Footer from '../fablab/Footer.jsx';

const Contact = () => {
    return (
        <>
            <CustomNavbar />
            <div className="container">

                   {/* Carousel */}
                   <h2 className="mt-5">Derniers Événements</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="Premier événement"
                        />
                        <Carousel.Caption>
                            <h3>Premier Événement</h3>
                            <p>Description du premier événement</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="Deuxième événement"
                        />
                        <Carousel.Caption>
                            <h3>Deuxième Événement</h3>
                            <p>Description du deuxième événement</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="Troisième événement"
                        />
                        <Carousel.Caption>
                            <h3>Troisième Événement</h3>
                            <p>Description du troisième événement</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                <h1>Contactez-nous</h1>

                <div className="row">
                    {/* Formulaire de contact */}
                    <div className="col-md-6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Formulaire de Contact</Card.Title>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Votre Nom</Form.Label>
                                        <Form.Control type="text" placeholder="Entrez votre nom" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Votre Email</Form.Label>
                                        <Form.Control type="email" placeholder="Entrez votre email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Votre Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Entrez votre message" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Envoyer
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Informations de contact */}
                    <div className="col-md-6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Informations de Contact</Card.Title>
                                <Card.Text>
                                    <strong>Adresse:</strong> 123 Rue de l'Exemple, Ville, Pays<br />
                                    <strong>Téléphone:</strong> +123 456 789<br />
                                    <strong>Email:</strong> contact@example.com<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

             
            </div>
            <Footer />
        </>
    );
};

export default Contact;
