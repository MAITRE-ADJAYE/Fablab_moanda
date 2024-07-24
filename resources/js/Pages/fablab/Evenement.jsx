import React, { useState } from 'react';
import CustomNavbar from './Navbar.jsx';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap'; // Assurez-vous que Modal est importé
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';
import Footer from './Footer.jsx';
import '../../../css/evenement.css';


const getFirstDayOfMonth = (date) => {
    // Crée une date pour le premier jour du mois en cours
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    // Renvoie le jour de la semaine du premier jour du mois (0 = dimanche, 6 = samedi)
    return firstDay.getDay();
};

const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth(); // Mois 0-indexé (0 = janvier, 11 = décembre)
    // Crée une date pour le dernier jour du mois en cours
    // En passant month + 1, nous obtenons le mois suivant, et 0 comme jour pour obtenir le dernier jour du mois courant
    return new Date(year, month + 1, 0).getDate();
};



const Evenement = () => {
    const [date, setDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const evenements = [
        {
            id: 1,
            titre: 'Événement',
            description: 'Description de l\'événement 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2025, 0, 1), // 1er Janvier 2025
            image: 'https://via.placeholder.com/600x400?text=Événement+1'
        },
        {
            id: 2,
            titre: 'Événement',
            description: 'Description de l\'événement 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 11, 15), // 15 Décembre 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+2'
        },
        {
            id: 3,
            titre: 'Événement',
            description: 'Description de l\'événement 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 8, 30), // 30 Septembre 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+3'
        },
        {
            id: 4,
            titre: 'Événement',
            description: 'Description de l\'événement 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 7, 30), // 30 Août 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+4'
        },
        {
            id: 5,
            titre: 'Événement',
            description: 'Description de l\'événement 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 6, 25), // 30 Octobre 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+5'
        },
        {
            id: 6,
            titre: 'Événement',
            description: 'Description de l\'événement 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 5, 20), // 30 Septembre 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+6'
        }
    ];

    // Fonction pour changer le mois affiché
    const changeMonth = (value) => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + value, 1);
        setDate(newDate);
    };

    // Fonction pour ouvrir la modal et définir l'événement sélectionné
    const handleShowModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    // Fonction pour fermer la modal
    const handleCloseModal = () => setShowModal(false);

    // Fonction de rendu des jours du calendrier
    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(date);
        const firstDayOfMonth = getFirstDayOfMonth(date);

        // Créer une matrice pour les jours
        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="p-2 text-center border rounded h-20" />);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const eventForDay = evenements.find(event => event.date.getDate() === day && event.date.getMonth() === date.getMonth() && event.date.getFullYear() === date.getFullYear());
            days.push(
                <div key={day} className={`p-2 text-center border rounded h-20 ${eventForDay ? getEventClass(eventForDay.date) : ''}`} onClick={() => eventForDay && handleShowModal(eventForDay)}>
                    {day}
                </div>
            );
        }
        return days;
    };

    // Fonction pour déterminer la classe CSS en fonction de la date de l'événement
    const getEventClass = (eventDate) => {
        const today = new Date();

        // Définir les dates en ne tenant compte que des jours
        const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
        const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        if (eventDateOnly < todayDateOnly) {
            return 'past-event'; // Événement passé
        } else if (eventDateOnly.getTime() === todayDateOnly.getTime()) {
            return 'imminent-event'; // Événement imminent
        } else {
            return 'future-event'; // Événement futur
        }
    };


    const newLocal = <CustomNavbar />;
    return (
        <>
            <nav>
                {newLocal}
            </nav>
            <div className="container mt-5">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Événements
                </motion.h1>
                <motion.p
                    className="mt-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Bienvenue sur notre page des événements. Vous trouverez ci-dessous nos prochains événements ainsi qu'un calendrier interactif.
                </motion.p>

                {/* Liste des événements en cards */}
                <motion.h2 className="mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
                    Activités
                </motion.h2>
                <Row className="mt-4">
                    {evenements.slice(0, 6).map(evenement => (
                        <Col key={evenement.id} lg={4} md={6} className="mb-4">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }}>
                                <Card>
                                    <Card.Img variant="top" src={evenement.image} />
                                    <Card.Body>
                                        <Card.Title>{evenement.titre}</Card.Title>
                                        <Card.Text className="text-justify">
                                            {evenement.description}
                                        </Card.Text>
                                        <Card.Text>
                                            Date : {evenement.date.toLocaleDateString()}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => handleShowModal(evenement)}>En savoir plus</Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                {/* Modal pour afficher les détails de l'événement */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedEvent && selectedEvent.titre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{selectedEvent && selectedEvent.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
                    </Modal.Footer>
                </Modal>

                <div>
                    {/* Contenu du calendrier */}
                    <motion.h2 className="mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
                        Calendrier
                    </motion.h2>
                    Utilisez le calendrier ci-dessous pour voir les événements programmés pour chaque date.
                    <div className="container mt-5">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                        </motion.h1>

                        {/* Conteneur principal */}
                        <div className="bg-gray-95 min-h-screen">
                            <div className="container mx-auto mt-10">
                                <div className="wrapper bg-white rounded shadow w-full">
                                    {/* En-tête avec contrôles de navigation */}
                                    <div className="header flex justify-between border-b p-2">
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2"
                                            onClick={() => changeMonth(-1)}
                                        >
                                            &lt;
                                        </motion.button>
                                        <div className="p-2 font-bold">
                                            {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
                                        </div>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2"
                                            onClick={() => changeMonth(1)}
                                        >
                                            &gt;
                                        </motion.button>
                                    </div>
                                    <div className="days grid grid-cols-7 gap-2 p-2 border-b font-bold">
                                        <div>Dim</div>
                                        <div>Lun</div>
                                        <div>Mar</div>
                                        <div>Mer</div>
                                        <div>Jeu</div>
                                        <div>Ven</div>
                                        <div>Sam</div>
                                    </div>
                                    <div className="dates grid grid-cols-7 gap-2 p-2">
                                        {/* Rendu des jours du mois */}
                                        {renderCalendarDays()}
                                    </div>




                                    {/* Légende des événements */}
                                    <div className="legend text-center mt-4">
                                        <div className="flex justify-center items-center">
                                            <span className="past-event-indicator mr-2"></span> Passé
                                            <span className="imminent-event-indicator mx-2"></span> Imminent
                                            <span className="future-event-indicator ml-2"></span> Futur
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal pour afficher les détails de l'événement */}
                        <Modal show={showModal} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>{selectedEvent && selectedEvent.titre}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {selectedEvent && selectedEvent.description}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseModal}>
                                    Fermer
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Evenement;
