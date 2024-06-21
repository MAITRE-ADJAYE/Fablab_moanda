// Navbar.jsx
import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <header className="bg-black shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex space-x-4 navbar">
                    <NavbarLink routeName="Accueil" route={route('welcome')} />
                    <NavbarLink routeName="Formation" route={route('formation')} />
                    <NavbarLink routeName="Actualité" route={route('actualite')} />
                    <NavbarLink routeName="Communauté" route={route('communaute')} />
                    <NavbarLink routeName="Équipements" route={route('equipements')} />
                    <NavbarLink routeName="Nous Contacter" route={route('contact')} />
                </div>
            </div>
        </header>
    );
}

function NavbarLink({ routeName, route }) {
    return (
        <Link
            href={route}
            className="block text-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-[#FF2D20] rounded-md px-3 py-2"
        >
            {routeName}
        </Link>
    );
}
