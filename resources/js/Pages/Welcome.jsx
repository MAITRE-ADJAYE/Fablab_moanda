import { Link, Head } from '@inertiajs/react';
import Navbar from './fablab/Navbar.jsx';
import Formation from './fablab/Formation.jsx';
import Actualite from './fablab/Actualite.jsx';
import Communaute from './fablab/Communaute.jsx';
import Equipements from './fablab/Equipements.jsx';
import Contact from './fablab/Contact.jsx';
import Footer from './fablab/Footer.jsx';
import Carousel from 'react-bootstrap/Carousel'; // Import du Carousel de Bootstrap

// Importez vos images
import Logo from '../../images/logo.png';
import projet1 from '../../images/projet1.jpg';
import projet4 from '../../images/projet4.jpg';
import footer from '../../images/footer.jpg';
import footer2 from '../../images/footer2.jpg';
// Importez votre fichier CSS pour les styles personnalisés
import '../../css/welcome.css'; // Assurez-vous de créer ce fichier CSS

export default function Welcome({ page, auth }) {
    const slides = [
        {
            image: projet1,
            title: 'Premier Slide',
            description: 'Description du premier slide'
        },
        {
            image: projet4,
            title: 'Deuxième Slide',
            description: 'Description du deuxième slide'
        },
        {
            image: footer,
            title: 'Troisième Slide',
            description: 'Description du troisième slide'
        },
        {
            image: footer2,
            title: 'Quatrième Slide',
            description: 'Description du quatrième slide'
        }
    ];

    return (
        <>
            <Head title="Accueil" />
            <section className="bg-gray-50 text-white">
                <div className="relative min-h-screen flex flex-col">
                    <div>
                        {/*<Navbar>
                            { Logo à gauche du Navbar }
                            <div className="flex items-center justify-left mt-">
                                {page === 'communaute' && <Communaute />}
                                {page === 'evenement' && <Evenement />}
                                {page === 'contact' && <Contact />}
                            </div>
                        </Navbar>*/}

                    </div>
                    <div>
                        <Navbar>
                            {/* Logo à gauche du Navbar */}
                            <div className="flex items-center justify-left">
                                <img src={Logo} alt="Logo" className="h-10" />
                                {page === 'formation' && <Formation />}
                                {page === 'actualite' && <Actualite />}
                                {page === 'communaute' && <Communaute />}
                                {page === 'equipements' && <Equipements />}
                                {page === 'contact' && <Contact />}
                            </div>
                        </Navbar>
                    </div>


                    {/* Carousel */}
                    <header className="d-flex justify-content-center justify-content-lg-end">
                        <Carousel interval={3000}>  {/* Defillement automatique toutes les 3 secondes */}
                            {slides.map((slide, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={slide.image}
                                        alt={`Slide ${index + 1}`}
                                    />
                                    <Carousel.Caption className="text-center">
                                        <h3>{slide.title}</h3>
                                        <p>{slide.description}</p>
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
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </>
    );
}
