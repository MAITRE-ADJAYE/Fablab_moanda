import React, { useEffect } from 'react';
import CustomNavbar from './Navbar.jsx';
import { motion } from 'framer-motion';
import { Card, Button, Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';
import '../../../css/developpemnet.css'; // Assurez-vous d'importer le fichier CSS contenant la classe text-justify

const Developpement = () => {
    const realisations = [
        {
            id: 1,
            titre: 'Réalisations en Développement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.',
            image: 'https://via.placeholder.com/1200x400?text=R%C3%A9alisations+en+D%C3%A9veloppement'
        }
    ];

    const ateliers = [
        {
            id: 1,
            titre: 'Atelier Développement 1',
            description: 'Présentation du projet avec différents détails',
            videoUrl: 'https://www.youtube.com/embed/your-video-id'
        }
    ];

    const exercices = [
        {
            id: 1,
            titre: 'Exercice de Développement 1',
            videoUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
            id: 2,
            titre: 'Exercice de Développement 2',
            videoUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
            id: 3,
            titre: 'Exercice de Développement 3',
            videoUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
            id: 4,
            titre: 'Exercice de Développement 4',
            videoUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
            id: 5,
            titre: 'Exercice de Développement 5',
            videoUrl: 'https://www.youtube.com/embed/your-video-id'
        },
        {
            id: 6,
            titre: 'Exercice de Développement 6',
            videoUrl: 'https://www.youtube.com/embed/your-video-id'
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
            <CustomNavbar />
            <Container className="mt-4">
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
                                        className="d-block w-100 img-fluid"
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
                        <Row className="mb-4">
                            <Col md={12} lg={4} className="d-flex align-items-center justify-content-center">
                                <motion.div variants={cardVariants}>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src="https://via.placeholder.com/200x200" className="img-fluid" />
                                        <Card.Body>
                                            <Card.Title>{ateliers[0].titre}</Card.Title>
                                            <Card.Text>{ateliers[0].description}</Card.Text>
                                            <Button variant="primary">En savoir plus</Button>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                            <Col md={12} lg={8} className="d-flex align-items-center">
                                <motion.div variants={cardVariants}>
                                    <div className="bg-light p-3">
                                        <p className="text-justify">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                        </p>
                                    </div>
                                </motion.div>
                            </Col>
                        </Row>
                    </motion.div>
                </Element>

                <Element name="disciplineDescription">
                    <Container className="mt-5 mb-5">
                        <Row className="justify-content-center">
                            <Col md={12} lg={8}>
                                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                                    <p className="text-justify">
                                        Bienvenue dans le monde du développement où la créativité rencontre la technologie.
                                        Ce domaine dynamique vous plonge dans l'art de créer des solutions innovantes grâce à des langages de programmation modernes.
                                        Que vous soyez un débutant curieux ou un professionnel chevronné, nos ateliers et exercices vous guideront à travers les fondamentaux et les techniques avancées du développement logiciel.
                                        Explorez des projets concrets, des applications web interactives aux applications mobiles élégantes. Notre programme vous offre non seulement les compétences techniques essentielles,
                                        mais aussi la pensée critique et la résolution de problèmes nécessaires pour exceller dans l'ère numérique. Rejoignez-nous pour transformer vos idées en réalité numérique dès aujourd'hui !
                                    </p>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </Element>

                <Element name="section3">
                    <motion.div
                        className="mt-5"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Container>
                            <h2>Ateliers de Développement</h2>
                            <Row className="justify-content-center">
                                {ateliers.map(atelier => (
                                    <Col xs={12} md={6} lg={4} key={atelier.id}>
                                        <motion.div variants={cardVariants}>
                                            <Card className="mb-4">
                                                <iframe
                                                    title={atelier.titre}
                                                    className="w-100"
                                                    height="315"
                                                    src={atelier.videoUrl}
                                                    frameBorder="0"
                                                    allowFullScreen
                                                ></iframe>
                                                <Card.Body>
                                                    <Card.Title>{atelier.titre}</Card.Title>
                                                    <Card.Text>{atelier.description}</Card.Text>
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
                            <h2>Exercices de Développement</h2>
                            <Row>
                                {exercices.map(exercice => (
                                    <Col xs={12} md={6} lg={4} key={exercice.id}>
                                        <motion.div variants={cardVariants}>
                                            <Card className="mb-4">
                                                <iframe
                                                    title={exercice.titre}
                                                    className="w-100"
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
            </Container>

            <Footer />
        </>
    );
};

export default Developpement;
