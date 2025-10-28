import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/cards.css";

function After({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const classNameModal = isModalOpen
    ? "before-after-modal open"
    : "before-after-modal";

  return (
    <>
      {/* Card */}
      <motion.div className="card-before-after"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpenModal}
      >
        <div className="img">
          <img src={user.imgBefore} alt={`${user.name} cambio`} />
        </div>
        <div className="text">
          <div className="user-text-data">
            <h3 className="name">{user.name ? user.name : "??"}</h3>
            <strong className="category">Seguidor</strong>
          </div>
          <button onClick={handleOpenModal}>Ver cambio</button>
        </div>
      </motion.div>

      {/* Modal */}
      <div className={classNameModal}>
        <div className="content">
          <header>
            <h2>{user.name} - Transformación</h2>
            <span className="close-btn" onClick={handleOpenModal}>
              &times;
            </span>
          </header>

          <div className="main">
            <div id={`carousel-${user.id}`}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Indicadores */}
              <div className="carousel-indicators">
                {[user.imgBefore, user.imgAfter].map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target={`#carousel-${user.id}`}
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              {/* Slides con captions */}
              <div className="carousel-inner" style={{ height: "70vh" }}>
                {/* Slide Antes */}
                <div className="carousel-item active">
                  <img
                    src={user.imgBefore}
                    className="d-block w-100"
                    alt={`${user.name} antes`}
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                    <h5>Antes</h5>
                  </div>
                </div>

                {/* Slide Después */}
                <div className="carousel-item">
                  <img
                    src={user.imgAfter}
                    className="d-block w-100"
                    alt={`${user.name} después`}
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                    <h5>Después</h5>
                  </div>
                </div>
              </div>

              {/* Controles */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carousel-${user.id}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carousel-${user.id}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
            <div className="text">
                <p>"{user.text}"</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default After;
