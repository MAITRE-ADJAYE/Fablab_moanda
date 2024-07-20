import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import CustomNavbar from '../fablab/Navbar.jsx';
import Footer from '../fablab/Footer.jsx';
import '../../../css/Actualite.css'; // Styles personnalisés

const articles = [
    {
        id: 1,
        title: 'Titre de l\'article 1',
        content: 'Contenu de l\'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        images: [
            'https://via.placeholder.com/600x300',
            'https://via.placeholder.com/600x400',
            'https://via.placeholder.com/600x500',
        ],
    },
    {
        id: 2,
        title: 'Titre de l\'article 2',
        content: 'Contenu de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        images: [
            'https://via.placeholder.com/600x300',
            'https://via.placeholder.com/600x400',
            'https://via.placeholder.com/600x500',
        ],
    },
    {
        id: 3,
        title: 'Titre de l\'article 3',
        content: 'Contenu de l\'article 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        images: [
            'https://via.placeholder.com/600x300',
            'https://via.placeholder.com/600x400',
            'https://via.placeholder.com/600x500',
        ],
    },
    {
        id: 4,
        title: 'Titre de l\'article 4',
        content: 'Contenu de l\'article 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        images: [
            'https://via.placeholder.com/600x300',
            'https://via.placeholder.com/600x400',
            'https://via.placeholder.com/600x500',
        ],
    },
    {
        id: 5,
        title: 'Titre de l\'article 5',
        content: 'Contenu de l\'article 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        images: [
            'https://via.placeholder.com/600x300',
            'https://via.placeholder.com/600x400',
            'https://via.placeholder.com/600x500',
        ],
    },
    {
        id: 6,
        title: 'Titre de l\'article 6',
        content: 'Contenu de l\'article 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        images: [
            'https://via.placeholder.com/600x300',
            'https://via.placeholder.com/600x400',
            'https://via.placeholder.com/600x500',
        ],
    }
];
const trends = [
    {
        id: 1,
        title: 'Vidéo de présentation 1',
        image: 'https://via.placeholder.com/150',
        info: 'Information sur la vidéo de présentation 1. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 2,
        title: 'Vidéo de présentation 2',
        image: 'https://via.placeholder.com/150',
        info: 'Information sur la vidéo de présentation 2. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 3,
        title: 'Vidéo de présentation 3',
        image: 'https://via.placeholder.com/150',
        info: 'Information sur la vidéo de présentation 3. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 4,
        title: 'Vidéo de présentation 4',
        image: 'https://via.placeholder.com/150',
        info: 'Information sur la vidéo de présentation 4. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 5,
        title: 'Vidéo de présentation 5',
        image: 'https://via.placeholder.com/150',
        info: 'Information sur la vidéo de présentation 5. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 6,
        title: 'Vidéo de présentation 6',
        image: 'https://via.placeholder.com/150',
        info: 'Information sur la vidéo de présentation 6. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    }
];

const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
        return {
            truncated: words.slice(0, limit).join(' ') + '...',
            fullText: text
        };
    }
    return { truncated: text, fullText: text };
};

const Actualite = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedTrend, setSelectedTrend] = useState(null);

    const openArticleModal = (article) => {
        setSelectedArticle(article);
        setShowModal(true);
    };

    const openTrendModal = (trend) => {
        setSelectedTrend(trend);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedArticle(null);
        setSelectedTrend(null);
    };

    return (
        <>
            <nav>
                <CustomNavbar />
            </nav>
            <Container className="mt-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="mb-4">ACTUALITÉ</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nunc purus. Vivamus non sem lacinia, gravida sapien a, aliquam arcu. Sed sit amet gravida ex. Ut in scelerisque ligula.</p>
                </motion.div>

                <section className="mt-5">
                    <h2 className="mb-4">Articles et blogs</h2>
                    <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                        {trends.map(trend => (
                            <Col key={trend.id}>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={trend.image} style={{ objectFit: 'cover', height: '200px' }} />
                                        <Card.Body>
                                            <Card.Title>{trend.title}</Card.Title>
                                            <Card.Text>{truncateText(trend.info, 15).truncated}</Card.Text>
                                            <Card.Text><small className="text-muted">Dernière mise à jour il y a 3 minutes</small></Card.Text>
                                            {truncateText(trend.info, 15).truncated !== truncateText(trend.info, 15).fullText && (
                                                <Button variant="primary" onClick={() => openTrendModal(trend)}>Lire plus</Button>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </section>

                <section className="mt-5">
                    <h2 className="mb-4">Dernières tendances</h2>
                    <Row xs={1} md={2} lg={2} className="g-4">
                        <Col>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {selectedArticle && (
                                    <Card.Body className='mt-5'>
                                        <Card.Title>Coup de cœur</Card.Title>
                                        <Card.Text>
                                            {truncateText(selectedArticle.content, 4).truncated}
                                        </Card.Text>
                                        {truncateText(selectedArticle.content, 4).truncated !== truncateText(selectedArticle.content, 4).fullText && (
                                            <Button variant="primary" onClick={() => openArticleModal(selectedArticle)}>Lire plus</Button>
                                        )}
                                    </Card.Body>
                                )}
                            </motion.div>
                        </Col>

                        <Col>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <video width="100%" controls>
                                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </video>
                            </motion.div>
                        </Col>
                    </Row>

                    <Row xs={1} sm={2} md={3} className="g-4 mt-5">
                        {articles.slice(0, 3).map(article => (
                            <Col key={article.id}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="h-100">
                                        <video width="100%" controls>
                                            <source src={article.video} type="video/mp4" />
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>
                                        <Card.Body>
                                            <Card.Title>{article.title}</Card.Title>
                                            <Card.Text>{truncateText(article.content, 4).truncated}</Card.Text>
                                            {truncateText(article.content, 4).truncated !== truncateText(article.content, 4).fullText && (
                                                <Button variant="primary" onClick={() => openArticleModal(article)}>Lire plus</Button>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>

                    <Row xs={1} sm={2} md={3} className="g-4 mt-4">
                        {articles.slice(3, 6).map(article => (
                            <Col key={article.id}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="h-100">
                                        <video width="100%" controls>
                                            <source src={article.video} type="video/mp4" />
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>
                                        <Card.Body>
                                            <Card.Title>{article.title}</Card.Title>
                                            <Card.Text>{truncateText(article.content, 4).truncated}</Card.Text>
                                            {truncateText(article.content, 4).truncated !== truncateText(article.content, 4).fullText && (
                                                <Button variant="primary" onClick={() => openArticleModal(article)}>Lire plus</Button>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </section>

                <section className="mt-5">
                    <h2 className="mb-4">À savoir</h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="p-4 bg-light">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nunc purus.
                                Vivamus non sem lacinia, gravida sapien a, aliquam arcu. Sed sit amet gravida ex. Ut in scelerisque ligula.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nunc purus.
                                Vivamus non sem lacinia, gravida sapien a, aliquam arcu. Sed sit amet gravida ex. Ut in scelerisque ligula.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nunc purus.
                                Vivamus non sem lacinia, gravida sapien a, aliquam arcu. Sed sit amet gravida ex. Ut in scelerisque ligula.
                            </p>
                        </div>
                    </motion.div>
                </section>
            </Container>

            {/* Modal pour afficher le contenu détaillé de l'article ou de la tendance */}
            <Modal show={showModal} onHide={closeModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedArticle ? selectedArticle.title : (selectedTrend ? selectedTrend.title : '')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedArticle && (
                        <>
                            <p>{selectedArticle.content}</p>
                            {selectedArticle.images && (
                                <Row>
                                    {selectedArticle.images.map((image, index) => (
                                        <Col xs={12} md={4} key={index} className="mb-4">
                                            <img src={image} alt={`Article ${index + 1}`} className="img-fluid" />
                                        </Col>
                                    ))}
                                </Row>
                            )}
                        </>
                    )}
                    {selectedTrend && (
                        <>
                            <p>{selectedTrend.info}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Fermer</Button>
                </Modal.Footer>
            </Modal>

            <Footer />
        </>
    );
};

export default Actualite;