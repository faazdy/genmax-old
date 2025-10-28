import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from "framer-motion";



import { itemList, teamMembers, changesUsers } from './data/data'

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


{/* Components */ }

import Nav from './components/Nav'

import After from './components/After';









function App() {



  return (

    <>

      <Nav />

      <header className="masthead" id='home'>

        <div className="container-text">

          <motion.div

            initial={{ opacity: 0, y: -50 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

          >

            <div className="text-hero">

              <h1 className="text-uppercase display-1">Transforma tu vida con nosotros</h1>

              <h2 className="font-weight-light display-6">Únete a nuestra comunidad y alcanza tu máximo potencial</h2>

              <motion.a

                href="https://www.skool.com/genmax/about"

                className="btn btn-warning btn-xl text-uppercase"

                whileHover={{ scale: 1.1 }}

                whileTap={{ scale: 0.95 }}

              >

                Descúbrelo

              </motion.a>

            </div>

          </motion.div>

        </div>

      </header>



      <section className="page-section" id="about-us">

        <div className="container">

          <div className="text-center">

            <h2 className="section-heading text-uppercase">¿Quiénes Somos?</h2>

            <h3 className="section-subheading text-muted mb-0">

              Somos una comunidad dedicada al crecimiento personal y la transformación,

              ayudando a que cada persona alcance su mejor versión. Entra a nuestra comunidad en <a href="https://whatsapp.com/channel/0029Vaz8g791yT2FJmfwCf1D">WhatsApp</a> para recibir noticias.

            </h3>

          </div>

        </div>

      </section>



      <section className="video-section">

        <iframe
            src="https://www.loom.com/embed/538440eae18240fcbeee58e76745a548"
            className='video'
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
            title="Presentación GenMax"
          ></iframe>

      </section>





      <section className="page-section bg-light" id="portfolio">

        <div className="container">

          <div className="text-center">

            <h2 className="section-heading text-uppercase">Grandes cambios</h2>

            <h3 className="section-subheading text-muted">Gente de nuestra comunidad confía en nosotros y sus resultados hablan por si solos!.</h3>

          </div>

        </div>

      </section>

      <section className="cards-container-wrapper bg-light">

        <div className="cards-container-section ">

          {changesUsers.map(user => {

            return (

              <After key={user.id} user={user} />

            )

          })}

        </div>

      </section>



      <section className="page-section" id="about">

        <div className="container">

          <div className="text-center">

            <h2 className="section-heading text-uppercase">¿Qué ofrecemos?</h2>

            <h3 className="section-subheading text-muted">Echa un vistazo de lo que somos capaces!</h3>

          </div>

          <ul className="timeline">

            {itemList.map((item, index) => (

              <li

                key={item.id}

                className={index % 2 === 1 ? "timeline-inverted" : ""}

              >

                <div className="timeline-image">

                  <img

                    className="rounded-circle img-fluid"

                    src={item.img}

                    alt={item.title}

                  />

                </div>

                <div className="timeline-panel">

                  <div className="timeline-heading">

                    <h4>{item.title}</h4>

                    <h4 className="subheading">{item.subtitle}</h4>

                  </div>

                  <div className="timeline-body">

                    <p className="text-muted">{item.text}</p>

                  </div>

                </div>

              </li>

            ))}

            <li className="timeline-inverted">

              <div className="timeline-image">

                <h4>

                  Y

                  <br />

                  hay mucho

                  <br />

                  más!

                </h4>

              </div>

            </li>

          </ul>

        </div>

      </section>



      <section className="page-section bg-light" id="team">

        <div className="container">

          <div className="text-center">

            <h2 className="section-heading text-uppercase">Nuestro equipo</h2>

            <h3 className="section-subheading text-muted">¿Quienes están detrás? ¿Tienes dudas o inquietudes? Aquí está nuestro equipo!</h3>

          </div>

          <div className="row">

            {teamMembers.map((member, index) => {

              return (

                <motion.div

                  key={member.id}

                  className="col-lg-3"

                  initial={{ opacity: 0, y: 50 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  transition={{ duration: 0.8, delay: index * 0.2 }}

                  viewport={{ once: true }}

                >

                  <div className="team-member">

                    <img

                      className="mx-auto rounded-circle"

                      src={member.img}

                      alt={`${member.name} pic`}

                    />

                    <h4>{member.name}</h4>

                    <p className="text-muted">{member.role}</p>

                    {member.socialLinks.map(social => {

                      return <a

                      key={social.id}

                      className="btn btn-dark btn-social mx-2"

                      href={social.link}

                      aria-label={`${member.name} Profile`}

                      >

                        <i className={`bi ${social.icon}`}></i>

                      </a>

                    })}

                  </div>

                </motion.div>

              )

            })}

          </div>

          <div className="row">

            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Detrás de GenMax Academy hay un equipo comprometido, dedicado y respaldado por una comunidad que impulsa nuestro crecimiento cada día.</p></div>

          </div>

        </div>

      </section>



      <section className="page-section">

        <div className="services" id='services'>

          <div className="text">

            <h2 className="section-heading text-uppercase">Anímate a cambiar</h2>

            <h3 className="section-subheading">En la plataforma de Skool encuentras nuestro contenido completo!</h3>

            <a href="https://www.skool.com/genmax/about" target="_blank" rel="noopener noreferrer" className="btn  btn-xl text-uppercase">Únete ahora</a>

          </div>

          <div className="img">

            <img src="./img/cambios.jpeg" alt="cambios" />

          </div>

        </div>

      </section>



      <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

        <p className="col-md-4 mb-0 text-body-secondary">

          © GenMax Academy | 2025

        </p>



        <a

          href="#page-top"

          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"

          aria-label="Bootstrap"

        >

          <img src="./img/logo2.png" alt="logo" />

        </a>



        <ul className="nav col-md-4 justify-content-end">

          <li className="nav-item">

            <a href="#home" className="nav-link px-2 text-body-secondary">

              Inicio

            </a>

          </li>

          <li className="nav-item">

            <a href="https://whatsapp.com/channel/0029Vaz8g791yT2FJmfwCf1D" className="nav-link px-2 text-body-secondary">

              Comunidad de WhatsApp

            </a>

          </li>

          <li className="nav-item">

            <a href="https://www.skool.com/genmax/about" className="nav-link px-2 text-body-secondary">

              Skool

            </a>

          </li>

        </ul>

      </footer>



    </>

  )

}



export default App