import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const HomeScreen = () => {
  const { query, loading, isError, count, data, searchCocktail } = useGlobalContext();
  const [input, setInput] = useState(query);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  }
  return <>
    <Hero>
      <div className="home-hero">
        <div className="home-hero-text">
          <div className="home-hero-title">
            <h2 className="brand-color">
              WIKI DRINK
            </h2>
            <h4>Tutti i cocktail del mondo a portata di click</h4>
          </div>
          <p>
            Wiki drink è un sito web che permette di trovare tutti i cocktail del mondo a portata di click.
          </p>
          <Link to="/about" className="btn btn-primary">
            Scopri di più
          </Link>
        </div>
        <div className="home-hero-img">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={350}
            width={350}
          />
        </div>
      </div>
    </Hero>
    <section className="container home-screen">
      <div className="search-bar">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="drink">
              <h4>Cerca un drink</h4>
            </label>
            <div className="input-search">
              <input
                className="input"
                type="text"
                placeholder={query}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                id="drink"
              />
              <button className="btn icon-btn" type="submit">
                <FaSearch className="icon" />
              </button>
            </div>
          </form>
        </div>
        <p className="result">{count} risultati trovati per "{input}" </p>
      </div>
    </section>
    <section className="container">
      {loading ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage />
      ) : count > 0 ? (
        <Cocktails data={data.drinks} />
      ) : (
        <p>Nessun risultato trovato</p>
      )}
    </section>
  </>;
};

export default HomeScreen;
