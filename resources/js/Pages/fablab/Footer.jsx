import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faLinkedinIn,
    faWhatsapp,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import partenaires1 from "../../../images/partenaires1.png";
import Logo from "../../../images/logo.png";
import "../../../css/footer.css";

const Footer = () => {
    const [formData, setFormData] = useState({
        firstAndLastName: '',
        phone: '',
        email: '',
        comment: ''
    });

    const [showScroll, setShowScroll] = useState(false);
    const form = useRef(); // Référence du formulaire

    const checkScrollTop = () => {
        setShowScroll(window.pageYOffset > 400);
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Vérifiez les données avant l'envoi
        console.log('FormData:', formData);
    
        fetch('/send_email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString(),
        })
        .then(response => response.text())
        .then(result => {
            alert(result); // Affiche le message de succès ou d'erreur
            setFormData({
                firstAndLastName: '',
                phone: '',
                email: '',
                comment: ''
            }); // Réinitialiser le formulaire après l'envoi
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    };
    
    

    return (
        <footer style={{ backgroundColor: '#004C97' }} className="text-center text-lg-start text-white rounded mt-5">
            <div className="container py-5">
                <div className="row">
                    {/* Logo Description */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-2 mt-5 footer-column d-flex flex-column align-items-center text-center">
                        <img src={Logo} alt="Fablab Moanda Logo" className="footer-logo img-fluid mb-3" />
                        <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: 'white' }}>Connecté à votre avenir</p>
                    </div>

                    {/* Description Column */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 my-5 mt-5 footer-column text-center">
                        <p style={{ color: 'white', textAlign: 'justify' }}>
                            Le Fablab Moanda se positionne d’abord comme un acteur d’inclusion sociale en formant gratuitement
                            la population de Moanda aux métiers du numérique afin de les autonomiser financièrement. <br />
                            Ensuite, comme un hub d’innovations technologiques au Gabon et dans la sous-région.
                        </p>
                    </div>
                    {/* Contacts Column */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-5 footer-column text-start">
                        <h5 className="text-uppercase fw-bold mb-4 text-center" style={{ color: 'white' }}>Contacts</h5>
                        <div className="d-flex align-items-center mb-2">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2 text-white" />
                            <a href="mailto:contact@fablabmoanda.com" className="text-white text-decoration-none">contact@fablabmoanda.com</a>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <FontAwesomeIcon icon={faPhone} className="me-2 text-white" />
                            <a href="tel:+241061010267" className="text-white text-decoration-none">061 01 02 67</a>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <FontAwesomeIcon icon={faHome} className="me-2 text-white" />
                            <a href="https://maps.app.goo.gl/qpCu9MiJT3F4BMrp8" className="text-white text-decoration-none">Salle Polyvalente, R24, Moanda</a>
                        </div>
                        <div className="mt-4 d-flex justify-content-start">
                            <a href="https://www.facebook.com/profile.php?id=100080703523107" className="me-3 text-reset">
                                <FontAwesomeIcon icon={faFacebookF} className="fa-lg social-icon" />
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=24161010267&text&type=phone_number&app_absent=0" className="me-3 text-reset">
                                <FontAwesomeIcon icon={faWhatsapp} className="fa-lg social-icon" />
                            </a>
                            <a href="https://ga.linkedin.com/company/fablab-moanda" className="me-3 text-reset">
                                <FontAwesomeIcon icon={faLinkedinIn} className="fa-lg social-icon" />
                            </a>
                            <a href="https://www.youtube.com/@fablabmoanda" className="me-3 text-reset">
                                <FontAwesomeIcon icon={faYoutube} className="fa-lg social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-5 footer-column text-center">
                        <h5 className="text-uppercase fw-bold" style={{ color: 'white' }}>Laissez-nous un message</h5>
                        <form onSubmit={handleSubmit} ref={form}>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstAndLastName"
                                    name="firstAndLastName"
                                    value={formData.firstAndLastName}
                                    onChange={handleChange}
                                    placeholder="Nom et Prénom"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Téléphone"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control"
                                    id="comment"
                                    name="comment"
                                    rows="4"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    placeholder="Commentaire"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning text-white mt-3" style={{ backgroundColor: '#FFD700', fontSize: '1.2rem' }}>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            {showScroll && (
                <div className="back-to-top" onClick={scrollTop}>
                    <FontAwesomeIcon icon={faArrowUp} size="2x" />
                </div>
            )}

            {/* Copyright */}
            <div className="text-center p-4 bg-light text-dark d-lg-flex justify-content-between align-items-center">
                <div className="my-2 col-12 col-sm-12 col-md-12 col-xl-6 col-lg-auto text-primary text-center">
                    Réalisé par les apprenants du Fablab Moanda |
                    <a href="#" className="text-reset fw-bold"> Politique de confidentialité</a> |
                    <a href="#" className="text-reset fw-bold"> Mentions légales</a>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-6 col-lg col-auto mt-3 mt-lg-0 text-center">
                    <img src={partenaires1} alt="Partenaire 1" className="img-fluid" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
