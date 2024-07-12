import React from 'react';
import { Head, Link } from '@inertiajs/react';
import CustomNavbar from './fablab/Navbar.jsx';
import Footer from './fablab/Footer.jsx';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

// Importez vos images
import projet1 from '../../images/projet1.jpg';
import projet4 from '../../images/projet4.jpg';
import footer from '../../images/footer2.jpg';
import propos from '../../images/a propos.jpg';

// Importez votre fichier CSS pour les styles personnalisés
import '../../css/welcome.css';

export default function Welcome({ fablab, auth, actualites = [], realisations = [] }) {
    const slides = [
        {
            image: projet1,
            title: 'FABLAB MOANDA',
            description: 'Description du premier slide'
        },
        {
            image: projet4,
            title: 'FABLAB MOANDA',
            description: 'Description du deuxième slide'
        },
        {
            image: footer,
            title: 'FABLAB MOANDA',
            description: 'Description du troisième slide'
        },
        {
            image: propos,
            title: 'FABLAB MOANDA',
            description: 'Description du quatrième slide'
        }
    ];

    return (
        <>
            <Head title="Accueil" />
            <section className="bg-gray-50 text-white">
                <CustomNavbar />
                <div className="relative min-h-screen flex flex-col">
                    
                    {/* Carousel */}
                    <header className="d-flex justify-content-center justify-content-lg-end carousel-container">
                        <Carousel interval={3000}>
                            {slides.map((slide, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100 carousel-image"
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                    />
                                    <Carousel.Caption className="carousel-caption-center text-center d-flex justify-content-center align-items-center">
                                        <div className="row">
                                            <div className="col-md-7 text-center">
                                                <h2 className="font-bold text-4xl">{slide.title}</h2>
                                                <p>{slide.description}</p>
                                            </div>
                                            <div className="col-md-3 text-center d-flex flex-column justify-content-center align-items-center">
                                                <p className="font-bold mb-4">
                                                    It is a long established fact that a reader will be distracted 
                                                    by the readable content of a page when looking at its layout. 
                                                    The point of using Lorem Ipsum is that it has a more-or-less normal
                                                    distribution of letters, as opposed to using 'Content here, 
                                                    content here', making it look like readable English.
                                                </p>
                                                <div className="d-flex align-items-center">
                                                    <Link href="#" className="me-6 text-decoration-none text-primary fw-bold">Lire plus →</Link>
                                                    <Button variant="primary">S'abonner</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </header>
                </div>
            </section>

            {/* Contenu principal */}
            <main className="flex-grow bg-white">
                <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-8">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-3xl font-bold mb-4">Bienvenue sur notre site!</h1>
                            <p className="mb-4">Découvrez nos dernières formations, actualités, et bien plus encore.</p>
                            <p className="mb-4">Rejoignez notre communauté et explorez nos équipements modernes.</p>
                            <p className="mb-4">N'hésitez pas à nous contacter pour plus d'informations.</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Actualités</h2>
                        <div className="row">
                            {actualites.slice(0, 3).map((actualite) => (
                                <div className="col-md-4 mb-4" key={actualite.id}>
                                    <div className="card">
                                        <img src={actualite.image} className="card-img-top" alt={actualite.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">{actualite.title}</h5>
                                            <p className="card-text">{actualite.description}</p>
                                            <Link href={`/actualite/${actualite.id}`} className="btn btn-primary">Lire plus</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">Réalisations</h2>
                        <div className="row">
                            {realisations.slice(0, 3).map((realisation) => (
                                <div className="col-md-4 mb-4" key={realisation.id}>
                                    <div className="card">
                                        <img src={realisation.image} className="card-img-top" alt={realisation.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">{realisation.title}</h5>
                                            <p className="card-text">{realisation.description}</p>
                                            <Link href={`/realisation/${realisation.id}`} className="btn btn-primary">Lire plus</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </>
    );
}
