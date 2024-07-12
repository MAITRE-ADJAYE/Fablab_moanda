import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faLinkedinIn,
    faWhatsapp,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import partenaires1 from "../../../images/partenaires1.png";
import Logo from "../../../images/logo.png";
import "../../../css/footer.css";

const Footer = () => {
    const [formData, setFormData] = useState({
        firstAndLastName: 'Nom et Prénom',
        phone: 'Numéro',
        email: 'Email',
        comment: 'Commentaire'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form Data:', formData);
    };

    return (
        <footer style={{ backgroundColor: '#004C97' }} className="text-center text-lg-start text-white rounded mt-5">
            <div className="container py-5">
                <div className="row">
                    {/* Description logo */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-2 mt-5">
                        <img src={Logo} alt="Fablab Moanda Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                        <p style={{ fontFamily: 'Italianno, cursive', color: 'white' }}>Connecté à votre avenir</p>
                    </div>
                    {/* Description Column */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 my-5 mt-5">
                        <p style={{ color: 'white' }}>
                            Le Fablab Moanda se positionne d’abord comme un acteur d’inclusion sociale en formant gratuitement
                            la population de Moanda aux métiers du numérique afin de les autonomiser financièrement. <br />
                            Ensuite, comme un hub d’innovations technologiques au Gabon et dans la sous-région.
                        </p>
                    </div>
                    {/* Contacts Column */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-5 offset-lg-1">
                        <h5 className="text-uppercase fw-bold mb-4" style={{ color: 'white' }}>Contacts</h5>
                        <p><FontAwesomeIcon icon={faEnvelope} className="me-2 text-white" /> <a href="mailto:contact@fablabmoanda.com" className="text-white text-decoration-none">contact@fablabmoanda.com</a></p>
                        <p><FontAwesomeIcon icon={faPhone} className="me-2 text-white" /> <a href="tel:+24161010267" className="text-white text-decoration-none">+241 61010267</a></p>
                        <p><FontAwesomeIcon icon={faHome} className="me-2 text-white" /> <a href="https://maps.app.goo.gl/qpCu9MiJT3F4BMrp8" className="text-white text-decoration-none"> Salle Polyvalente, R24, Moanda</a></p>
                        <div className="mt-4">
                            <a href="#" className="me-3 text-reset">
                                <FontAwesomeIcon icon={faLinkedinIn} className="fa-lg social-icon" />
                            </a>
                            <a href="#" className="me-3 text-reset">
                                <FontAwesomeIcon icon={faWhatsapp} className="fa-lg social-icon" />
                            </a>
                            <a href="#" className="me-3 text-reset">
                                <FontAwesomeIcon icon={faFacebookF} className="fa-lg social-icon" />
                            </a>
                            <a href="#" className="me-3 text-reset">
                                <FontAwesomeIcon icon={faYoutube} className="fa-lg social-icon" />
                            </a>
                        </div>
                    </div>
                    {/* Contact Form Column */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-5">
                        <h5 className="text-uppercase fw-bold" style={{ color: 'white' }}>Laissez-nous un message</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-1">
                                <label htmlFor="firstAndLastName"></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstAndLastName"
                                    name="firstAndLastName"
                                    value={formData.firstAndLastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-1">
                                <label htmlFor="phone"></label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-1">
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group mb-1">
                                <label htmlFor="comment"></label>
                                <textarea
                                    className="form-control"
                                    id="comment"
                                    name="comment"
                                    rows="4"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning text-white" style={{ backgroundColor: '#FF8C00' }}>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center p-4 bg-light text-dark d-lg-flex justify-content-between align-items-center">
                <div className="my-2 col-12 col-sm-12 col-md-12 col-xl-6 col-lg-auto text-primary">
                    Réalisé par les apprenants du Fablab Moanda |
                    <a href="#" className="text-reset fw-bold"> Politique de confidentialité</a> |
                    <a href="#" className="text-reset fw-bold"> Mentions légales</a>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-xl-6 col-lg .col-[breakpoint]-auto mt-3 mt-lg-0">
                    <img src={partenaires1} alt="Partenaire 1" className="img-fluid" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
