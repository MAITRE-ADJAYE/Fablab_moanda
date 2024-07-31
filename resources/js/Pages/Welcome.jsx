import React from 'react';
import { Head, Link } from '@inertiajs/react';
import CustomNavbar from './fablab/Navbar.jsx';
import Footer from './fablab/Footer.jsx';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamCarousel from './TeamCarousel';
import '../../css/welcome.css';

// Importez vos images (placeholders pour l'exemple)
import Fablab from '../../images/fablabmoanda.webp';
import footer from '../../images/formation/formation.webp';
import actualite from '../../images/actualité/actualite2.jpeg';
import propos from '../../images/equipent/equipement1.jpeg';
import propos1 from '../../images/projet/site projet.webp';
import propos2 from '../../images/communauté/com.jpeg';
//equipes du du Fabblab Moanda
import Dimitri from '../../images/Dimitri.jpg';
import Alex from '../../images/respo/monsieurAlex.webp';
import Cabrel from '../../images/respo/respocabrel.webp';
import Darryn from '../../images/Coach/Coach/darryn.jpg';
import Rolly from '../../images/Coach/Coach/roly.webp';
import Joe from '../../images/Coach/Coach/joe.jpg';

//carrousel Infors
import realisation from '../../images/realisation/realisation1.webp';
import realisation1 from '../../images/realisation/realisation2.jpg';
import evenement from '../../images/evenement/evenement.webp';
import evenement1 from '../../images/evenement/evenement1.webp';


export default function Welcome({ fablab, auth, actualites = [], realisations = [], evenements = [] }) {
    const slides = [
        {
            image: Fablab,
            title: 'Bienvenue au Fablab Moanda',
            description: 'Découvrez un espace où l\'innovation et la créativité prennent vie.'
        },
        {
            image: footer,
            title: 'Compétences',
            description: 'Apprenez et développez des compétences.'
        },
        {
            image: actualite,
            title: 'Actualités',
            description: 'Restez Informés des dernières nouvelles.'
        },
        {
            image: propos,
            title: 'Equipements',
            description: 'Des équipements de pointe à votre disposition.'
        },
        {
            image: propos1,
            title: 'Nos Projets',
            description: 'Découvrez et participez à nos projets.'
        },
        {
            image: propos2,
            title: 'Communauté',
            description: 'Une communauté dynamique et collaborative.'
        }
    ];

    const equipe = [
        {
            image: Dimitri,
            name: 'Dimitri ONGOUA',
            role: 'Fabmanager'
        },
        {
            image: Alex,
            name: 'Alex MBOUNGOU',
            role: 'Responsable campus'
        },
        {
            image: Cabrel,
            name: 'Cabrel Mikolo',
            role: 'Responsable campus'
        },
        {
            image: Darryn,
            name: 'Darryn Tsounghat',
            role: 'Coach Dev Web et Web Mobile'
        },
        {
            image: Joe,
            name: 'Joe Maurio',
            role: 'Coach Référent Digital'
        },
        {
            image: Rolly,
            name: 'Rolly Marvin',
            role: 'Coach Electronique/Robotique/3D'
        }
    ];

    return (
        <>
            <Head title="" />
            <header className=''>
                <CustomNavbar />

            </header>
            <section className="bg-gray-50 text-white">
                <div className="relative min-h-screen flex flex-col col-xl-12 col-xxl-12">
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
                                    <h2 className="font-bold text-4xl mb-4 text-primary" style={{ color: '#004A99' }}>Bienvenue au Fablab Moanda</h2>
                                    <p className="mb-4 text-secondary text-justify">
                                        Le Fablab Moanda, né d'un partenariat entre la Compagnie Minière de l'Ogooué (Comilog) et la Mairie de Moanda,
                                        est un incubateur technologique dédié à la réduction de la fracture numérique chez les jeunes, à la réinsertion professionnelle et à l'entrepreneuriat numérique.
                                        Aspiration centrale de la région, il offre un espace d'apprentissage et d'accompagnement pour les nouvelles technologies.
                                        Ses missions se déclinent en trois axes : la formation (programmes avancés en numérique),
                                        l'acculturation (ateliers et événements sur les technologies émergentes), et l'accompagnement des porteurs de projets numériques.
                                        Bienvenue dans l'univers du Fablab Moanda, où créativité et technologie façonnent un avenir inspirant.
                                    </p>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-md-12 col-lg-6 col-s-12">
                                    <h2 className="font-bold text-4xl mb-4 text-primary" style={{ color: '#004A99' }}>Mot du Fab Manager</h2>
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
                                    <img src={Dimitri} alt="Bienvenue au Fablab Moanda" className="img-fluid img-thumbnail" style={{ maxWidth: '70%', height: 'auto' }} />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <h2 className="font-bold text-4xl mb-4 text-primary" style={{ color: '#004A99' }}>Notre vision</h2>
                                    <p className="mb-4 text-secondary text-justify">Le Fablab Moanda aspire à bâtir un écosystème dynamique où compétences,
                                        idées et contributions s'entremêlent pour façonner un avenir numérique prometteur pour notre ville. Plus qu'un lieu de formation,
                                        c'est un carrefour de créativité et d'innovation où ingénieurs, artistes, entrepreneurs, étudiants et passionnés collaborent pour repousser les limites de la technologie.

                                        Nous créons un environnement inclusif où la diversité des talents et des perspectives génère des idées novatrices. En favorisant l'innovation locale,
                                        nous stimulons une économie numérique florissante et de nouvelles opportunités. Nous promouvons l'accessibilité technologique pour tous et encourageons l'apprentissage continu.

                                        Le Fablab est un espace de collaboration où différentes perspectives se rencontrent pour libérer le potentiel humain.
                                        Nous rêvons d'une ville où chaque citoyen s'épanouit grâce à l'innovation, et où le Fablab est un moteur de progrès et de transformation sociale.
                                        Rejoignez-nous pour construire un futur collaboratif, créatif et durable pour notre communauté. </p>
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
                                                <img src={actualite} className="d-block w-100" alt="Actualité Image 1" />
                                                <Carousel.Caption>
                                                    <h5>Visite de la Mairie de Moanda</h5>
                                                    <p>La visite de la mairie...</p>
                                                    <Link href={route('actualite')} className="btn btn-primary mt-2">Voir plus</Link>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={actualite} className="d-block w-100" alt="Actualité Image 2" />
                                                <Carousel.Caption>
                                                    <h5>Visite de la Société Eramet</h5>
                                                    <p>La visite de la société Eramet...</p>
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
                                                <img src={evenement} className="d-block w-100" alt="Evènement Image 1" />
                                                <Carousel.Caption>
                                                    <h5>Visite de la Société Eramet</h5>
                                                    <p>La visite de la société Eramet...</p>
                                                    <Link href={route('evenement')} className="btn btn-primary mt-2">Voir plus</Link>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={evenement1} className="d-block w-100" alt="Evènement Image 2" />
                                                <Carousel.Caption>
                                                    <h5>Visite de la Mairie de Moanda</h5>
                                                    <p>La visite de la mairie...</p>
                                                    <Link href={route('evenement')} className="btn btn-primary mt-2">Voir plus</Link>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column" data-aos="fade-up">
                                    <h5 className="card-title text-center card-title-custom">Réalisations</h5>
                                    <div className="card bg-dark text-white flex-grow-1">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img src={realisation} className="d-block w-100" alt="Réalisation Image 1" />
                                                <Carousel.Caption>
                                                    <h5>Projet IDO</h5>
                                                    <p>La première cohorte...</p>
                                                    <Link href={route('realisations')} className="btn btn-primary mt-2">Voir plus</Link>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={realisation1} className="d-block w-100" alt="Réalisation Image 2" />
                                                <Carousel.Caption>
                                                    <h5>Réalisation d'une Badgeuse</h5>
                                                    <p>Le projet de réalisation d'une badgeuse...</p>
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








