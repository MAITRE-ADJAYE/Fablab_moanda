import React, { useEffect } from 'react';
import CustomNavbar from './Navbar.jsx';
import { motion } from 'framer-motion';
import { Card, Button, Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';
import Image from '../../../images/projet.jpg';
import video from '../../../images/video.mp4';
import '../../../css/style.css'; // Importer le fichier CSS contenant les styles

const ReferentDigital = () => {
    const realisations = [
        {
            id: 1,
            titre: 'Réalisations Digitales',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.',
            image: Image
        },
        {
            id: 2,
            titre: 'Réalisations Digitales',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.',
            image: Image
        },
        {
            id: 3,
            titre: 'Réalisations Digitales',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.',
            image: Image
        },
        {
            id: 4,
            titre: 'Réalisations Digitales',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.',
            image: Image
        }
    ];

    const ateliers = [
        {
            id: 1,
            titre: 'Atelier 1',
            description: 'Présentation du projet avec différents détails',
            videoUrl: video
        }
    ];

    const exercices = [
        {
            id: 1,
            titre: 'Exercice 1',
            videoUrl: video
        },
        {
            id: 2,
            titre: 'Exercice 2',
            videoUrl: video
        },
        {
            id: 3,
            titre: 'Exercice 3',
            videoUrl: video
        },
        {
            id: 4,
            titre: 'Exercice 4',
            videoUrl: video
        },
        {
            id: 5,
            titre: 'Exercice 5',
            videoUrl: video
        },
        {
            id: 6,
            titre: 'Exercice 6',
            videoUrl: video
        }
    ];

    // Variants for animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
    };

    useEffect(() => {
        // Add scroll event listener when component mounts
        const handleScroll = () => {
            // Handle scroll events as needed
        };
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav>
                <CustomNavbar />
            </nav>
            <div className="container mt-4">
                <Element name="section1">
                    <motion.div
                        className="mt-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
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
                                        <p className="text-justify">{realisation.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </motion.div>
                </Element>

                <Element name="section2" className="mt-5">
                    <motion.div
                        className="mt-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Container>
                            <Row>
                                <Col md={12} lg={4} className="d-flex align-items-center justify-content-center">
                                    <motion.div variants={cardVariants}>
                                        <Card style={{ width: '22rem', height: 'fit-content' }}>
                                            <Card.Img variant="top" src={Image} />
                                            <Card.Body className="text-center">
                                                <Card.Title>{ateliers[0].titre}</Card.Title>
                                                <Card.Text className="text-justify">{ateliers[0].description}</Card.Text>
                                                <Button variant="primary">En savoir plus</Button>
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                </Col>
                                <Col  md={12} lg={8} className="d-flex align-items-center">
                                    <motion.div variants={cardVariants}>
                                        <div className="bg-light p-3 mb-4">
                                            <p className="text-justify">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                            </p>
                                        </div>
                                    </motion.div>
                                </Col>
                            </Row>
                        </Container>
                    </motion.div>
                </Element>

                {/* Add discipline description block */}
                <Element name="disciplineDescription">
                    <Container className="mt-5 mb-5">
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                                    <p className="text-justify text-center-responsive">
                                        La discipline des Référents Digitaux vous plonge au cœur de la transformation numérique. 
                                        En tant que référent digital, vous deviendrez un acteur clé dans l'accompagnement des entreprises vers une utilisation optimale des outils numériques. 
                                        Vous apprendrez à évaluer les besoins numériques, 
                                        à concevoir des stratégies digitales et à mettre en œuvre des solutions innovantes pour améliorer les performances des organisations. 
                                        Nos ateliers et exercices pratiques vous fourniront les compétences essentielles en gestion de projet digital, 
                                        en marketing numérique et en analyse de données. 
                                        Que vous soyez novice ou professionnel en quête de perfectionnement, 
                                        notre programme est conçu pour vous doter des connaissances nécessaires pour naviguer dans le monde digital en constante évolution. 
                                        Rejoignez-nous pour devenir un expert en transformation numérique et aider les entreprises à réussir leur transition digitale!
                                    </p>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </Element>

                <Element name="section3">
                    <motion.div
                        className="mt-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Container>
                            <h2>Ateliers</h2>
                            <Row className="justify-content-center">
                                {ateliers.map(atelier => (
                                    <Col md={6} key={atelier.id}>
                                        <motion.div variants={cardVariants}>
                                            <Card className="mb-4">
                                                <iframe
                                                    title={atelier.titre}
                                                    width="100%"
                                                    height="315"
                                                    src={atelier.videoUrl}
                                                    frameBorder="0"
                                                    allowFullScreen
                                                ></iframe>
                                                <Card.Body>
                                                    <Card.Title>{atelier.titre}</Card.Title>
                                                    <Card.Text className="text-justify">{atelier.description}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </motion.div>
                </Element>

                <Element name="section4">
                    <motion.div
                        className="mt-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Container>
                            <h2>Exercices</h2>
                            <Row>
                                {exercices.map(exercice => (
                                    <Col md={4} key={exercice.id}>
                                        <motion.div variants={cardVariants}>
                                            <Card className="mb-4">
                                                <iframe
                                                    title={exercice.titre}
                                                    width="100%"
                                                    height="200"
                                                    src={exercice.videoUrl}
                                                    frameBorder="0"
                                                    allowFullScreen
                                                ></iframe>
                                                <Card.Body>
                                                    <Card.Title>{exercice.titre}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </motion.div>
                </Element>
            </div>

            <Footer />
        </>
    );
};

export default ReferentDigital;
