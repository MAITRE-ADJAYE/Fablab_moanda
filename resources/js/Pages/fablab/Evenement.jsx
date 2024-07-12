import React, { useState } from 'react';
import CustomNavbar from './Navbar.jsx';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';
import Footer from './Footer.jsx';
import '../../../css/evenement.css';

const Evenement = () => {
    const [date, setDate] = useState(new Date());

    const evenements = [
        {
            id: 1,
            titre: 'Événement 1',
            description: 'Description de l\'événement 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2025, 0, 1), // 1er Janvier 2025
            image: 'https://via.placeholder.com/600x400?text=Événement+1'
        },
        {
            id: 2,
            titre: 'Événement 2',
            description: 'Description de l\'événement 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 11, 15), // 15 Décembre 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+2'
        },
        {
            id: 3,
            titre: 'Événement 3',
            description: 'Description de l\'événement 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 8, 30), // 30 Septembre 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+3'
        },
        {
            id: 4,
            titre: 'Événement 4',
            description: 'Description de l\'événement 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 7, 30), // 30 Août 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+4'
        },
        {
            id: 5,
            titre: 'Événement 5',
            description: 'Description de l\'événement 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 9, 30), // 30 Octobre 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+5'
        },
        {
            id: 6,
            titre: 'Événement 6',
            description: 'Description de l\'événement 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: new Date(2024, 8, 30), // 30 Septembre 2024
            image: 'https://via.placeholder.com/600x400?text=Événement+6'
        }
    ];

    const renderEvents = (date) => {
        return evenements
            .filter(event => event.date.toDateString() === date.toDateString())
            .map((event, index) => (
                <div key={index} className="event text-center">
                    <h4>{event.titre}</h4>
                    <p>{event.description}</p>
                </div>
            ));
    };

    const calendarTileClassName = ({ date, view }) => {
        if (view === 'month') {
            const event = evenements.find(event => event.date.toDateString() === date.toDateString());
            if (event) {
                const today = new Date();
                if (date < today) {
                    return 'past-event';
                } else if (date.toDateString() === today.toDateString()) {
                    return 'imminent-event';
                } else {
                    return 'future-event';
                }
            }
        }
    };

    return (
        <>
            <CustomNavbar />
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
                                        <Card.Text>
                                            {evenement.description}
                                        </Card.Text>
                                        <Card.Text>
                                            Date : {evenement.date.toLocaleDateString()}
                                        </Card.Text>
                                        <Button variant="primary">En savoir plus</Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                {/* Calendrier des événements */}
                <motion.h2 className="mt-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}>
                    Calendrier
                </motion.h2>
                Utilisez le calendrier ci-dessous pour voir les événements programmés pour chaque date.
                <motion.p
                    className="text-center mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    
                </motion.p>
                <Row className="justify-content-center mt-5">
                    <Col md={10} className="d-flex justify-content-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.5 }}>
                            <Calendar
                                onChange={setDate}
                                value={date}
                                tileContent={({ date, view }) => view === 'month' && renderEvents(date)}
                                tileClassName={calendarTileClassName}
                                className="large-calendar"
                            />
                        </motion.div>
                    </Col>
                    <Col md={8} className="text-center mt-4">
                        {renderEvents(date).length > 0 && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 3 }}>
                                <h3>Événements le {date.toLocaleDateString()}</h3>
                                {renderEvents(date)}
                            </motion.div>
                        )}
                    </Col>
                </Row>

                {/* Légende du calendrier */}
                <motion.div className="calendar-legend text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 3.5 }}>
                    <p><span className="past-event-legend"></span> Événement passé</p>
                    <p><span className="imminent-event-legend"></span> Événement imminent</p>
                    <p><span className="future-event-legend"></span> Événement à venir</p>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Evenement;
