// Welcome.jsx
import { Link, Head } from '@inertiajs/react';
import Navbar from './fablab/Navbar.jsx';
import Formation from './fablab/Formation.jsx';
import Actualite from './fablab/Actualite.jsx';
import Communaute from './fablab/Communaute.jsx';
import Equipements from './fablab/Equipements.jsx';
import Contact from './fablab/Contact.jsx';
import Footer from './fablab/Footer.jsx';

// Importez votre logo (remplacez /path/to/logo.png par le chemin correct)
import Logo from '../../assets/obergine.jpg';

export default function Welcome({ page, auth }) {
    return (
        <>
            <Head title="Accueil" />
            <div className="bg-gray-50 dark:bg-black text-white">
                <div className="relative min-h-screen flex flex-col">
                    <Navbar className="text-center">

                        {/* Logo à gauche du Navbar */}
                        <div className="flex items-center justify-center">
                            <img src={Logo} alt="Logo" className="h-10" />
                        </div>

                    </Navbar>

                    {/* Navigation principale */}
                    <header className='center'>
                        {page === 'welcome' && <Welcome />}
                        {page === 'formation' && <Formation />}
                        {page === 'actualite' && <Actualite />}
                        {page === 'communaute' && <Communaute />}
                        {page === 'equipements' && <Equipements />}
                        {page === 'contact' && <Contact />}
                    </header>

                    {/* Lien "Register" séparé à droite */}
                    <div className="absolute top-0 right-0 mt-4 mr-4">
                        <Link
                            href={route('register')}
                            className="block rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                    </div>

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
                    <footer className="bg-gray-800 text-white py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <Footer />
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
