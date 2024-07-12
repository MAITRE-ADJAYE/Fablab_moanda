import React from 'react';
import CustomNavbar from './Navbar.jsx';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import Footer from './Footer.jsx';
import { motion } from 'framer-motion'; // Import Framer Motion
import '../../../css/equipement.css';

const Equipement = () => {
    const equipements = [
        {
            id: 1,
            nom: 'Machine X',
            description: 'Description de la machine X. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            caracteristiques: 'Caractéristiques de la machine X. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Machine+X',
            tarif: {
                heure: '100 francs cfa',
                jour: '500 francs cfa',
                mois: '2000 francs cfa'
            }
        },
        {
            id: 2,
            nom: 'Machine Y',
            description: 'Description de la machine Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            caracteristiques: 'Caractéristiques de la machine Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Machine+Y',
            tarif: {
                heure: '120 francs cfa',
                jour: '600 francs cfa',
                mois: '2500 francs cfa'
            }
        },
        {
            id: 3,
            nom: 'Machine Z',
            description: 'Description de la machine Z. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            caracteristiques: 'Caractéristiques de la machine Z. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x400?text=Machine+Z',
            tarif: {
                heure: '150 francs cfa',
                jour: '750 francs cfa',
                mois: '3000 francs cfa'
            }
        }
    ];

    return (
        <>
            <CustomNavbar />
            <Container className="my-5 mt-5">
                <h1>ÉQUIPEMENTS</h1>
                <p>
                    Voici nos équipements disponibles, chacun conçu pour répondre à vos besoins spécifiques. Découvrez notre sélection et trouvez l'équipement idéal pour vos projets.
                </p>
                {equipements.map((equipement, index) => (
                    <motion.div key={equipement.id} className="equipment-section p-3 my-5">
                        <Row>
                            {index % 2 === 0 ? (
                                <>
                                    <Col md={6} className="d-flex align-items-center justify-content-center">
                                        <motion.img
                                            className="img-fluid"
                                            src={equipement.image}
                                            alt={equipement.nom}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </Col>
                                    <Col md={6} className="d-flex flex-column justify-content-center">
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
                                            <h3>Description</h3>
                                            <p>{equipement.description}</p>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
                                            <h3>Performances</h3>
                                            <p>{equipement.caracteristiques}</p>
                                        </motion.div>
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col md={6} className="d-flex flex-column justify-content-center">
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
                                            <h3>Description</h3>
                                            <p>{equipement.description}</p>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
                                            <h3>Performances</h3>
                                            <p>{equipement.caracteristiques}</p>
                                        </motion.div>
                                    </Col>
                                    <Col md={6} className="d-flex align-items-center justify-content-center">
                                        <motion.img
                                            className="img-fluid"
                                            src={equipement.image}
                                            alt={equipement.nom}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </Col>
                                </>
                            )}
                        </Row>
                        <Table striped bordered hover className="mt-4 text-center">
                            <thead>
                                <tr>
                                    <th colSpan="2">NOS TARIFS LOCATIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Heure</td>
                                    <td>{equipement.tarif.heure}</td>
                                </tr>
                                <tr>
                                    <td>Jour</td>
                                    <td>{equipement.tarif.jour}</td>
                                </tr>
                                <tr>
                                    <td>Mois</td>
                                    <td>{equipement.tarif.mois}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <motion.div className="text-center mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
                            <Button variant="warning">RÉSERVEZ</Button>
                        </motion.div>
                    </motion.div>
                ))}
            </Container>
            <Footer />
        </>
    );
};

export default Equipement;
