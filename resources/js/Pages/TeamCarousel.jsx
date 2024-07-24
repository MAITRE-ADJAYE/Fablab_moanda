import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../../css/TeamCarousel.css';

// Définir une valeur par défaut pour teamMembers en tant que tableau vide
const TeamCarousel = ({ team = [] }) => {
  // Vérifiez si teamMembers est un tableau
  if (!Array.isArray(team)) {
    console.error("La prop 'team' doit être un tableau.");
    return null;
  }

  return (
    <div className="slide-container swiper">
      <div className="slide-content">
        <Swiper
          spaceBetween={25}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // autoplay configuration
          breakpoints={{
            0: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
          }}
        >
          {team.map((member, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={member.image} alt={member.name} className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">{member.name}</h2>
                  <p className="description">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next swiper-navBtn"></div>
          <div className="swiper-button-prev swiper-navBtn"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default TeamCarousel;
