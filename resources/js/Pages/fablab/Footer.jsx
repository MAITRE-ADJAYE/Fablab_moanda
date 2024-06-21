import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 rounded-t-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section supérieure du footer */}
                <div className="flex justify-between items-center">
                    {/* Logo et message à gauche */}
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lcnxlbnwwfHwwfHx8MA%3D%3D"
                            alt="obergine"
                            className="h-10 rounded-full"
                        />
                        <div>
                            <p className="text-sm font-bold">Votre Société</p>
                            <p className="text-xs">
                                À propos de nous : Nous sommes une société dédiée à ...
                            </p>
                        </div>
                    </div>

                    {/* Icônes des réseaux sociaux */}
                    <div className="flex space-x-4 items-center">
                        <a
                            href="https://www.facebook.com/votresociete"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className="h-6 w-6 text-white hover:text-blue-500" />
                        </a>
                        <a
                            href="https://www.youtube.com/votresociete"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube className="h-6 w-6 text-white hover:text-red-500" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/votresociete"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="h-6 w-6 text-white hover:text-blue-700" />
                        </a>
                    </div>
                </div>

                {/* Ligne horizontale */}
                <hr className="border-gray-1000 w-full my-6" />

                {/* Section inférieure du footer */}
                <div className="flex justify-between items-center">
                    {/* Copyright à gauche */}
                    <div className="text-xs">
                        <p>&copy; 2024 Votre Société. Tous droits réservés.</p>
                        <p>Réalisé par les développeurs du Fablab Moanda</p>
                    </div>

                    {/* Ligne verticale */}
                    <hr className="border-gray-600 w-px h-6 my-4" />

                    {/* Partenaires à droite */}
                    <div className="flex flex-col space-y-2 items-end">
                        <div className="flex items-center space-x-2">
                            <RiArrowRightSLine className="text-white" />
                            <span className="text-sm">Nom du Partenaire 1</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RiArrowRightSLine className="text-white" />
                            <span className="text-sm">Nom du Partenaire 2</span>
                        </div>
                        {/* Ajouter d'autres partenaires au besoin */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
