import { Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Accueil" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col">
                    <main className="flex-grow bg-white">
                        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <h1 className="text-3xl font-bold mb-4">Bienvenue sur notre site!</h1>
                                    <p className="mb-4">Découvrez nos dernières formations, actualités, et bien plus encore.</p>
                                    <p className="mb-4">Rejoignez notre communauté et explorez nos équipements modernes.</p>
                                    <p className="mb-4">N'hésitez pas à nous contacter pour plus d'informations.</p>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer className="bg-gray-800 text-white py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <p className="text-sm">&copy; 2024 Votre Société. Tous droits réservés.</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
