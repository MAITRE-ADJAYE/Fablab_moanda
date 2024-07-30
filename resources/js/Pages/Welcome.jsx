import React from 'react';
import { Head, Link } from '@inertiajs/react';
import CustomNavbar from './fablab/Navbar.jsx';
import Footer from './fablab/Footer.jsx';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamCarousel from './TeamCarousel';
import '../../css/welcome.css';

// Importez vos images (placeholders pour l'exemple)
import projet1 from '../../images/electro.webp';
import footer from '../../images/carrousel3.webp';
import projet4 from '../../images/carrousel1.webp';
import propos from '../../images/carousel2.webp';
import equipe2 from '../../images/Dimitri.jpg';
import Jordan from '../../images/Dimitri.jpg';
import propos1 from '../../images/carrousel4.jpg';
import propos2 from '../../images/evenement.jpg';
import electro from '../../images/electro1.webp';
import evenement from '../../images/evenement.jpg';

export default function Welcome({ fablab, auth, actualites = [], realisations = [], evenements = [] }) {
    const slides = [
        {
            image: projet1,
            title: 'FABLAB MOANDA',
            description: 'Bienvenue dans l\'univers du possible'
        },
        {
            image: footer,
            title: 'FABLAB MOANDA',
            description: 'Où vous pouvez laisser libre cours à votre imagination'
        },
        {
            image: projet4,
            title: 'FABLAB MOANDA',
            description: 'Et où l\'information et les sciences du numérique'
        },
        {
            image: propos,
            title: 'FABLAB MOANDA',
            description: 'D\'un commun accord,'
        },
        {
            image: propos1,
            title: 'FABLAB MOANDA',
            description: 'Vous connecte à.'
        },
        {
            image: propos2,
            title: 'FABLAB MOANDA',
            description: 'Votre avenir.'
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
            <Head title="" />
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
                                                <p className="mb-4 d-none d-lg-block text-center" style={{ fontSize: '1.5rem' }}>{slide.description}</p>
                                                <p className="mb-4 d-block d-lg-none text-center" style={{ fontSize: '1rem' }}>{slide.description}</p>
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
                                    <p className="mb-4 text-secondary text-justify">Le numérique est omniscient dans notre quotidien. Que nous le voulions ou pas, que nous en soyons conscient ou pas, il influence notre e-consommation. Certains emboîtent le pas de la digitalisation pour en jouir des avantages et d’autres restent spectateurs parfois par ignorance. <br />

                                        C’est pourquoi le Fablab Moanda se positionne d’abord comme un acteur d’inclusion sociale en formant gratuitement la population de Moanda aux métiers du numérique afin de les autonomiser financièrement. Ensuite, comme un hub d’innovations technologiques au Gabon et dans la sous région. <br />

                                        Une seule question subsiste : êtes-vous partant pour épouser cette vision ou pour en bénéficier ? Si la réponse est oui alors je vous donne rendez-vous dans notre laboratoire pour prendre part à l’aventure.
                                        Rejoignez-nous, rejoignez l’innovation, rejoignez le futur au Gabon.

                                        Je vous attends. <br />

                                        Dimitri ONGOUA
                                        Fabmanager au Fablab Moanda.
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
                                                <Carousel.Caption>
                                                    <h5>Titre Actualité 1</h5>
                                                    <p>Description Actualité 1.</p>
                                                    <Link href={route('actualite')} className="btn btn-primary mt-2">Voir plus</Link>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={projet1} className="d-block w-100" alt="Actualité Image 2" />
                                                <Carousel.Caption>
                                                    <h5>Titre Actualité 2</h5>
                                                    <p>Description Actualité 2.</p>
                                                    <Link href={route('actualite')} className="btn btn-primary mt-2">Voir plus</Link>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column">
                                    <h5 className="card-title text-center card-title-custom">Evènements</h5>
                                    <div className="card bg-dark text-white flex-grow-1">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img src={projet1} className="d-block w-100" alt="Evènement Image 1" />
                                                <Carousel.Caption>
                                                    <h5>Titre Evènement 1</h5>
                                                    <p>Description Evènement 1.</p>
                                                    <Link href={route('evenement')} className="btn btn-primary mt-2">Voir plus</Link>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={projet1} className="d-block w-100" alt="Evènement Image 2" />
                                                <Carousel.Caption>
                                                    <h5>Titre Evènement 2</h5>
                                                    <p>Description Evènement 2.</p>
                                                    <Link href={route('evenement')} className="btn btn-primary mt-2">Voir plus</Link>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column">
                                    <h5 className="card-title text-center card-title-custom">Réalisations</h5>
                                    <div className="card bg-dark text-white flex-grow-1">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img src={projet1} className="d-block w-100" alt="Réalisation Image 1" />
                                                <Carousel.Caption>
                                                    <h5>Titre Réalisation 1</h5>
                                                    <p>Description Réalisation 1.</p>
                                                </Carousel.Caption>
                                                    <Link href={route('realisations')} className="btn btn-primary mt-2">Voir plus</Link>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={projet1} className="d-block w-100" alt="Réalisation Image 2" />
                                                <Carousel.Caption>
                                                    <h5>Titre Réalisation 2</h5>
                                                    <p>Description Réalisation 2.</p>
                                                    <Link href={route('realisations')} className="btn btn-primary mt-2">Voir plus</Link>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
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








