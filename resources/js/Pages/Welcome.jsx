import React from 'react';
import { Head, Link } from '@inertiajs/react';
import CustomNavbar from './fablab/Navbar.jsx';
import Footer from './fablab/Footer.jsx';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamCarousel from './TeamCarousel';
import '../../css/welcome.css';

// Importez vos images (placeholders pour l'exemple)
import projet1 from '../../images/visite.jpg';
import projet4 from '../../images/visite.jpg';
import footer from '../../images/projet.jpg';
import propos from '../../images/visite.jpg';
import equipe2 from '../../images/jordan.jpg';
import Jordan from '../../images/Dimitri.jpg';

export default function Welcome({ fablab, auth, actualites = [], realisations = [], evenements = [] }) {
    const slides = [
        {
            image: projet1,
            title: 'FABLAB MOANDA',
            description: 'Bienvenue dans l\'univers du possible'
        },
        {
            image: projet4,
            title: 'FABLAB MOANDA',
            description: 'Où vous pouvez laisser libre cours à votre imagination'
        },
        {
            image: footer,
            title: 'FABLAB MOANDA',
            description: 'Et où l\'information et les sciences du numérique'
        },
        {
            image: propos,
            title: 'FABLAB MOANDA',
            description: 'Vous ouvre grandement leurs portes pour un épanouissement total.'
        }
    ];

    const equipe = [
        {
            image: Jordan,
            name: 'Dimitri ONGOUA',
            role: 'Directeur'
        },
        {
            image: Jordan,
            name: 'Dimitri ONGOUA',
            role: 'Responsable des Projets'
        },
        {
            image: Jordan,
            name: 'Dimitri ONGOUA',
            role: 'Designer'
        },
        {
            image: Jordan,
            name: 'Dimitri ONGOUA',
            role: 'Développeur Web'
        },
        {
            image: equipe2,
            name: 'Jordan TALLA',
            role: 'Développeur Web'
        },
        {
            image: Jordan,
            name: 'Dimitri ONGOUA',
            role: 'Développeur Web'
        }
    ];

    return (
        <>
            <Head title="Accueil" />
            <header className=''>
                <CustomNavbar />

            </header>
            <section className="bg-gray-50 text-white">
                <div className="relative min-h-screen flex flex-col">
                    {/* Carousel principal */}
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
                                            <div className="col-12 col-lg-12 mt-5">
                                                <h2 className="font-bold text-6xl text-white mb-4 d-none d-lg-block" style={{ fontSize: '5rem' }}>{slide.title}</h2>
                                                <h2 className="font-bold text-4xl text-white mb-4 d-block d-lg-none" style={{ fontSize: '3rem' }}>{slide.title}</h2>
                                                <p className="mb-4 d-none d-lg-block text-justify" style={{ fontSize: '1.5rem' }}>{slide.description}</p>
                                                <p className="mb-4 d-block d-lg-none text-justify" style={{ fontSize: '1rem' }}>{slide.description}</p>
                                            </div>
                                        </div>
                                    </Carousel.Caption>


                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </header>

                    <section className="welcome-section py-5">
                        <div className="container">
                            <div className="row mb-4">
                                <div className="col-md-12 mt-sm-3 col-lg-12 mt-md-5 text-left">
                                    <h2 className="font-bold text-4xl mb-4 text-primary">Bienvenue au Fablab Moanda</h2>
                                    <p className="mb-4 text-secondary text-justify">Le FabLab Moanda est un espace de fabrication numérique collaboratif ouvert à tous.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                    </p>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-md-12 col-lg-6 col-s-12">
                                    <h2 className="font-bold text-4xl mb-4 text-primary">Mot du Fab Manager</h2>
                                    <p className="mb-4 text-secondary text-justify">Le FabLab Moanda est un espace de fabrication numérique collaboratif ouvert à tous.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                    </p>
                                </div>
                                <div className="col-md-6 text-center">
                                    <img src={Jordan} alt="Bienvenue au Fablab Moanda" className="img-fluid img-thumbnail" style={{ maxWidth: '70%', height: 'auto' }} />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <h2 className="font-bold text-4xl mb-4 text-primary">Notre vision</h2>
                                    <p className="mb-4 text-secondary text-justify">Le FabLab Moanda est un espace de fabrication numérique collaboratif ouvert à tous.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                        Nous offrons des outils et des ressources pour transformer vos idées en réalité.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="cards-carousel" className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column">
                                    <h5 className="card-title text-center card-title-custom">Actualités</h5>
                                    <div className="card bg-dark text-white flex-grow-1">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img src={projet1} className="d-block w-100" alt="Actualité Image 1" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={projet4} className="d-block w-100" alt="Actualité Image 2" />
                                            </Carousel.Item>
                                        </Carousel>
                                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                                            <p className="card-text text-center">Dernières nouvelles et mises à jour</p>
                                            <Link href={route('actualite')} className="btn btn-primary mt-2">Voir plus</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column">
                                    <h5 className="card-title text-center card-title-custom">Réalisations</h5>
                                    <div className="card bg-dark text-white flex-grow-1">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img src={projet4} className="d-block w-100" alt="Réalisation Image 1" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={projet4} className="d-block w-100" alt="Réalisation Image 2" />
                                            </Carousel.Item>
                                        </Carousel>
                                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                                            <p className="card-text text-center">Découvrez nos projets réalisés</p>
                                            <Link href={route('realisations')} className="btn btn-primary mt-2">Voir plus</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column">
                                    <h5 className="card-title text-center card-title-custom">Événements</h5>
                                    <div className="card bg-dark text-white flex-grow-1">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img src={footer} className="d-block w-100" alt="Événement Image 1" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={footer} className="d-block w-100" alt="Événement Image 2" />
                                            </Carousel.Item>
                                        </Carousel>
                                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                                            <p className="card-text text-center">Participez à nos événements</p>
                                            <Link href={route('evenement')} className="btn btn-primary mt-2">Voir plus</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="bg-gray-50 py-5">
                        <div className="container">
                            <div className="row text-left mb-4">
                                <div className="col-md-12">
                                    <h2 className="font-bold text-4xl mb-4 text-primary">Notre Équipe</h2>
                                </div>
                            </div>
                            <TeamCarousel team={equipe} />
                        </div>
                    </section>

                    <Footer />
                </div>
            </section>
        </>
    );
}
