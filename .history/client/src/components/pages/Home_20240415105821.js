import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// Imported CSS files
import "./Home.css";

// Importes images
import MainLogo from "../images/MainLogo.webp";


const Home = () => {
  return (
    <div className="Home-container">

        {/* Logo at the top */}
        <section className="Home-logo">
            <img
                className = "Home-logo-img"
                src={MainLogo}
                alt="Main logo of Wopanaak Language Reclamation project"
            />
        </section>

        {/* Search bar */}
        <section className="Home-search">
            <section className="Home-search-container">
                <select className="Home-search-select">
                    <option value="">All Languages</option>
                    <option value="">English only</option>
                    <option value="">Wôpanaâk only</option>
                </select>
                <input
                    className="Home-search-bar"
                    type="search"
                    placeholder="Search..."
                />
            </section>
        </section>

        {/* Information about the Wopanaak tribe and langauge */}
        <section className="Home-info">
            <h1 className="Home-info-title">
                The History of Wôpanaâk Language
            </h1>
            <p>
                The Wôpanâak Language Reclamation Project began in 1993 under the direction of
                jessie 'little doe' baird who earned a Master’s Degree in Algonquian Linguistics
                from MIT in 2000. Through the joint collaborative efforts of members of The Assonet
                Band of Wampanoag, The Mashpee Wampanoag Tribe, the Wampanoag Tribe of Aquinnah and
                the Herring Pond Band of Wampanoag, our mission is to return language fluency to
                the Wampanoag Nation as a principal means of expression. Wôpanâôt8âôk (Wampanoag
                Language) is one of more than three dozen languages classified as belonging to the
                Algonquian language family. It was the first American Indian language to develop
                and use an alphabetic writing system. The primary reason for the development of an
                alphabet was the goal of the missionaries, arriving from England in the early
                1600s, to convert the Wampanoag to Christianity.
            </p>
            <a
                className="Home-info-link"
                href="https://www.wlrp.org/"
            >
                Read more...
            </a>
        </section>
    </div>
  );
};

export default Home;
