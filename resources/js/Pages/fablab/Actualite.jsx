import React from 'react';
import CustomNavbar from '../fablab/Navbar.jsx';
import { Card, Button, Carousel } from 'react-bootstrap';
import Footer from '../fablab/Footer.jsx';

const Actualite = () => {
    const articles = [
        {
            id: 1,
            title: 'Titre de l\'article 1',
            content: 'Contenu de l\'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x300'
        },
        {
            id: 2,
            title: 'Titre de l\'article 2',
            content: 'Contenu de l\'article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x300'
        },
        {
            id: 3,
            title: 'Titre de l\'article 3',
            content: 'Contenu de l\'article 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/600x300'
        }
    ];

    return (
        <>
            <CustomNavbar />
            <div className="container">
                <h1>Actualités</h1>
                <Carousel>
                    {articles.map(article => (
                        <Carousel.Item key={article.id}>
                            <img
                                className="d-block w-100"
                                src={article.image}
                                alt={article.title}
                            />
                            <Carousel.Caption>
                                <h3>{article.title}</h3>
                                <p>{article.content}</p>
                                <Button variant="primary">Lire plus</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="row mt-4">
                    {articles.map(article => (
                        <div key={article.id} className="col-lg-4 col-md-6 mb-4">
                            <Card>
                                <Card.Img variant="top" src={article.image} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>
                                        {article.content}
                                    </Card.Text>
                                    <Button variant="primary">Lire plus</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Actualite;
