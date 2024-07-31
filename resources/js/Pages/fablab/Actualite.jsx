import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import CustomNavbar from '../fablab/Navbar.jsx';
import Footer from '../fablab/Footer.jsx';
import '../../../css/Actualite.css'; // Styles personnalisés
import Image from '../../../images/electro.webp';
import Image1 from '../../../images/alumni.webp';
import Image2 from '../../../images/visite2.webp';

const articles = [
    {
        id: 1,
        title: 'Titre de l\'article 1',
        content: 'Contenu de l\'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: "https://www.youtube.com/watch?v=9GRcvost_Ng",
    },
    {
        id: 2,
        title: 'Titre de l\'article 2',
        content: 'Contenu de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: "https://www.youtube.com/watch?v=9GRcvost_Ng",
    },
    {
        id: 3,
        title: 'Titre de l\'article 3',
        content: 'Contenu de l\'article 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: "https://www.youtube.com/watch?v=9GRcvost_Ng",
    },
    {
        id: 4,
        title: 'Titre de l\'article 4',
        content: 'Contenu de l\'article 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: "https://www.youtube.com/watch?v=YAe37Fnsd-k",
        images: [
            Image1,
            Image,
            Image1,
        ],
    },
    {
        id: 5,
        title: 'Titre de l\'article 5',
        content: 'Contenu de l\'article 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        video: "https://www.youtube.com/watch?v=YAe37Fnsd-k",
        images: [
            Image1,
            Image,
            Image1,
        ],
    },
    {
        id: 6,
        title: 'Titre de l\'article 6',
        content: 'Contenu de l\'article 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contenu de l\'article 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        video: "https://www.youtube.com/watch?v=YAe37Fnsd-k",
        images: [
            Image,
            Image1,
            Image,
        ],
    }
];

const trends = [
    {
        id: 1,
        title: 'Vidéo de présentation 1',
        image: Image,
        info: 'Information sur la vidéo de présentation 1. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 2,
        title: 'Vidéo de présentation 2',
        image: Image1,
        info: 'Information sur la vidéo de présentation 2. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 3,
        title: 'Vidéo de présentation 3',
        image: Image2,
        info: 'Information sur la vidéo de présentation 3. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 4,
        title: 'Vidéo de présentation 4',
        image: Image1,
        info: 'Information sur la vidéo de présentation 4. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 5,
        title: 'Vidéo de présentation 5',
        image: Image2,
        info: 'Information sur la vidéo de présentation 5. Information sur la vidéo de présentation Information sur la vidéo de présentation Information sur la vidéo de présentation'
    },
    {
        id: 6,
        title: 'Vidéo de présentation 6',
        image: Image,
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
            <Head title="Actualités" />
            <nav>
                <CustomNavbar />
            </nav>
            <Container className="mt-5">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="mb-4">ACTUALITÉ</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut nunc purus. Vivamus non sem lacinia, gravida sapien a, aliquam arcu. Sed sit amet gravida ex. Ut in scelerisque ligula.</p>
                </motion.div>

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
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/YAe37Fnsd-k"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
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
                                        <iframe
                                            width="100%"
                                            height="315"
                                            src={article.video.replace("watch?v=", "embed/")}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                        <Card.Body>
                                            <Card.Title>{article.title}</Card.Title>
                                            <Card.Text>
                                                {truncateText(article.content, 4).truncated}
                                            </Card.Text>
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
                    <h2 className="mb-4">Nos Tendances</h2>
                    <Row xs={1} sm={2} md={3} className="g-4">
                        {trends.map(trend => (
                            <Col key={trend.id}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={trend.image} />
                                        <Card.Body>
                                            <Card.Title>{trend.title}</Card.Title>
                                            <Card.Text>
                                                {truncateText(trend.info, 10).truncated}
                                            </Card.Text>
                                            {truncateText(trend.info, 10).truncated !== truncateText(trend.info, 10).fullText && (
                                                <Button variant="primary" onClick={() => openTrendModal(trend)}>Voir plus</Button>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>

            <Footer />

            <Modal show={showModal} onHide={closeModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedArticle ? selectedArticle.title : selectedTrend?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedArticle && (
                        <div>
                            <p>{selectedArticle.content}</p>
                            {selectedArticle.images && selectedArticle.images.map((image, index) => (
                                <img key={index} src={image} alt={`image-${index}`} className="img-fluid mb-3" />
                            ))}
                        </div>
                    )}
                    {selectedTrend && (
                        <div>
                            <p>{selectedTrend.info}</p>
                            <img src={selectedTrend.image} alt={selectedTrend.title} className="img-fluid mb-3" />
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Actualite;
