import React, { useEffect } from 'react';
import CustomNavbar from './Navbar.jsx';
import { motion } from 'framer-motion';
import { Card, Button, Carousel, Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';
import Image1 from '../../../images/projet.jpg';
import Image2 from '../../../images/jordan.jpg';
import video from '../../../images/video.mp4';
import '../../../css/style.css'; // Importer le fichier CSS contenant les styles

const Electronique = () => {
    const realisations = [
        {
            id: 1,
            titre: 'Réalisations Electronique',
            description: 'Découvrez nos réalisations en électronique et IoT.',
            image: Image1
        },
        {
            id: 2,
            titre: 'Réalisations Electronique',
            description: 'Découvrez nos réalisations en électronique et IoT.',
            image: Image1
        },
        {
            id: 3,
            titre: 'Réalisations Electronique',
            description: 'Découvrez nos réalisations en électronique et IoT.',
            image: Image1
        }
    ];

    const ateliers = [
        {
            id: 1,
            titre: 'Assemblage de Circuits',
            description: 'Démonstration pratique sur l\'assemblage de circuits électroniques.',
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
            <div className="container mt-5">
                <h2>Electronique/Robotique/3D</h2>
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
                                        <p className="text-center">{realisation.description}</p>
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
                                            <Card.Img variant="top" src={Image1} />
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
                                        <div className="bg-light p-3 mb-4 text-center text-md-left">
                                            <p className="text-justify">
                                                Découvrez nos dernières innovations en électronique qui révolutionnent le marché.
                                                Découvrez nos dernières innovations en électronique qui révolutionnent le marché.
                                                Découvrez nos dernières innovations en électronique qui révolutionnent le marché.
                                                Découvrez nos dernières innovations en électronique qui révolutionnent le marché.
                                                Découvrez nos dernières innovations en électronique qui révolutionnent le marché.
                                            </p>
                                        </div>
                                    </motion.div>
                                </Col>
                            </Row>
                        </Container>
                    </motion.div>
                </Element>

                <Element name="disciplineDescription">
                    <Container className="mt-5 mb-5">
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                                    <p className="text-justify text-center-responsive">
                                        Bienvenue dans le domaine fascinant de l'électronique et de la robotique, où l'ingéniosité humaine rencontre la technologie avancée.
                                        Cette discipline vous immerge dans la conception et la création de circuits électroniques et de robots autonomes.
                                        Que vous soyez un débutant passionné ou un expert chevronné, nos ateliers et exercices vous guideront à travers les bases et les techniques avancées de l'électronique et de la robotique.
                                        Apprenez à construire et programmer des robots capables d'interagir avec leur environnement,
                                        tout en explorant les principes fondamentaux des composants électroniques. Notre programme met l'accent sur l'innovation, la résolution de problèmes et la pensée critique,
                                        vous préparant à relever les défis de l'ère technologique.
                                        Rejoignez-nous pour transformer vos idées en solutions électroniques et robotiques concrètes et novatrices dès aujourd'hui !
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

export default Electronique;
