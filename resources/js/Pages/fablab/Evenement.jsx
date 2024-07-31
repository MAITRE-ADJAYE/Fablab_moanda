import React, { useState } from 'react';
import CustomNavbar from './Navbar.jsx';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import Footer from './Footer.jsx';
import '../../../css/evenement.css';

import footer from '../../../images/carrousel3.webp';
import evenement from '../../../images/evenement.jpg';

const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
        return {
            truncated: words.slice(0, limit).join(' ') + '...',
            fullText: text
        };
    }
    return { truncated: text, fullText: text };
};

const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay();
};

const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
};

const CalendarHeader = ({ date, onChangeMonth }) => (
    <div className="header flex justify-between border-b p-2">
        <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-2"
            onClick={() => onChangeMonth(-1)}
        >
            &lt;
        </motion.button>
        <div className="p-2 font-bold">
            {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
        </div>
        <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-2"
            onClick={() => onChangeMonth(1)}
        >
            &gt;
        </motion.button>
    </div>
);

const Evenement = () => {
    const [date, setDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const evenements = [
        {
            id: 1,
            titre: 'Visite de la Société Eramet',
            description: 'La visite de la société Eramet au Fablab Moanda a été un événement marquant, soulignant l\'importance de la collaboration entre les grandes entreprises industrielles et les initiatives technologiques locales pour stimuler l\'innovation et le développement communautaire.Objectifs de la Visite Présentation du Fablab : Montrer aux représentants d\'Eramet les installations, les équipements, et les projets en cours au Fablab Moanda. Renforcement des Partenariats : Discuter des possibilités de collaboration entre Eramet et le Fablab pour des projets futurs. Mise en Avant des Réalisations : Exposer les succès et les contributions du Fablab à la communauté locale.',
            date: new Date(2025, 0, 1),
            image: footer
        },
        {
            id: 2,
            titre: 'Visite de la Mairie de Moanda',
            description: 'La visite de la mairie de Moanda a été une occasion privilégiée pour les membres du Fablab Moanda de renforcer les liens avec les autorités locales et de discuter des projets en cours et futurs. Cet événement a permis de mettre en lumière l\'importance de la collaboration entre les institutions publiques et les initiatives technologiques pour le développement de la région. Objectifs de la Visite Renforcement des Partenariats: Consolider la collaboration entre le Fablab Moanda et la mairie de Moanda. Présentation des Projets: Exposer les réalisations du Fablab et les projets en cours aux autorités locales. Discussions Stratégiques: Échanger sur les besoins locaux et identifier les opportunités de développement technologique. Promotion de l\'Innovation: Sensibiliser les décideurs locaux à l\'importance de l\'innovation et des technologies numériques pour le développement économique et social. Déroulement de la Visite Accueil et Présentation: Les représentants de la mairie ont accueilli l\'équipe du Fablab. Une présentation des missions et des objectifs du Fablab a été faite. Tour des Installations: Les membres du Fablab ont visité les différentes sections de la mairie pour mieux comprendre le fonctionnement des services municipaux. Exposition des Réalisations: Présentation des projets réalisés par le Fablab, notamment la badgeuse, les ateliers de formation, et les projets communautaires. Table Ronde: Discussions ouvertes sur les besoins technologiques de la mairie et les opportunités de collaboration future. Conclusions et Perspectives: Les deux parties ont exprimé leur satisfaction quant à la visite et leur désir de poursuivre et d\'intensifier leur collaboration.',
            date: new Date(2024, 11, 15),
            image: evenement
        },
        {
            id: 3,
            titre: 'Événement',
            description: 'Description de l\'événement 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 8, 30),
            image: footer
        },
        {
            id: 4,
            titre: 'Événement',
            description: 'Description de l\'événement 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 7, 30),
            image: evenement
        },
        {
            id: 5,
            titre: 'Événement',
            description: 'Description de l\'événement 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 6, 25),
            image: footer
        },
        {
            id: 6,
            titre: 'Événement',
            description: 'Description de l\'événement 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 5, 20),
            image: evenement
        }
    ];

    const changeMonth = (value) => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + value, 1);
        setDate(newDate);
    };

    const handleShowModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(date);
        const firstDayOfMonth = getFirstDayOfMonth(date);

        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="p-2 text-center border rounded h-20" />);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const eventForDay = evenements.find(event => event.date.getDate() === day && event.date.getMonth() === date.getMonth() && event.date.getFullYear() === date.getFullYear());
            days.push(
                <div
                    key={day}
                    className={`p-2 text-center border rounded h-20 ${eventForDay ? `event-day ${getEventClass(eventForDay.date)}` : ''}`}
                    onClick={() => eventForDay && handleShowModal(eventForDay)}
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    const getEventClass = (eventDate) => {
        const today = new Date();
        const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
        const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        if (eventDateOnly < todayDateOnly) {
            return 'past-event';
        } else if (eventDateOnly.getTime() === todayDateOnly.getTime()) {
            return 'imminent-event';
        } else {
            return 'future-event';
        }
    };

    return (
        <>
            <Head title="Evenements" />
            <nav>
                <CustomNavbar />
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

                <motion.h2 className="mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
                    Activités
                </motion.h2>
                <Row className="mt-4">
                    {evenements.slice(0, 6).map(event => (
                        <Col key={event.id} lg={4} md={6} className="mb-4">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }}>
                                <Card>
                                    <Card.Img variant="top" src={event.image} />
                                    <Card.Body>
                                        <Card.Title>{event.titre}</Card.Title>
                                        <Card.Text className="text-justify">
                                            {truncateText(event.description, 30).truncated}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => handleShowModal(event)}>Voir Plus</Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                <motion.h2 className="mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
                    Calendrier
                </motion.h2>
                Utilisez le calendrier ci-dessous pour voir les événements programmés pour chaque date.
                <div className="container mt-5">
                    <div className="bg-gray-95 min-h-screen">
                        <div className="container mx-auto mt-10">
                            <div className="wrapper bg-white rounded shadow w-full">
                                <CalendarHeader date={date} onChangeMonth={changeMonth} />
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
                                    {renderCalendarDays()}
                                </div>
                                <div className="legend text-center mt-4">
                                    <div className="flex justify-center items-center">
                                        <span className="past-event w-4 h-4 rounded-full mr-2"></span>
                                        <span>Événements passés</span>
                                    </div>
                                    <div className="flex justify-center items-center mt-2">
                                        <span className="imminent-event w-4 h-4 rounded-full mr-2"></span>
                                        <span>Événements imminents</span>
                                    </div>
                                    <div className="flex justify-center items-center mt-2">
                                        <span className="future-event w-4 h-4 rounded-full mr-2"></span>
                                        <span>Événements futurs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedEvent?.titre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedEvent?.image} alt={selectedEvent?.titre} className="img-fluid mb-3" />
                    <p>{selectedEvent?.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </>
    );
};

export default Evenement;
