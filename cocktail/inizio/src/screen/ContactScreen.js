import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
const ContactScreen = () => {
  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contatc-hero-title">
              <h2 className="contact-title">
                Vorresti aggiungere un cocktail?
              </h2>
              <h4 className="contact-subtitle">
                Contattaci pure!
              </h4>
            </div>
          </div>
          <div className="contact-form-container container">
            <form
              className="contact-form container"
              action="https://formspree.io/f/xkoognwn"
              method="POST">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="input"
                  placeholder="Daniele" />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="daniele@esempio.com" />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Telefono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="input"
                  placeholder="numero"></input>
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="ricetta">Ricetta</label>
                <textarea
                  id="ricetta"
                  name="ricetta"
                  className="input"
                  placeholder="Scrivi la tua ricetta"></textarea>
                <hr />
              </div>
              <button type="submit" className="btn btn-primary">
                Invia
              </button>
            </form>
          </div>
        </div>
      </Hero >
    </>
  );
};

export default ContactScreen;
