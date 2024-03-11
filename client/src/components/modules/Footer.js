import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
      <footer className="Footer-container">
          <div className="Footer-main">
            <section className="Footer-item Footer-item1">
                <h1>Wôpanaâk Language Dictionary</h1>
                <p>
                    Bringing back our language one student at time
                </p>
            </section>
            <section className="Footer-item Footer-item2">
                <h3>Main links</h3>
                <ul>
                    <li><Link to="" className="Footer-Link">Link1</Link></li>
                    <li><Link to="" className="Footer-Link">Link2</Link></li>
                    <li><Link to="" className="Footer-Link">Link3</Link></li>
                    <li><Link to="" className="Footer-Link">Link4</Link></li>
                </ul>
            </section>
            <section className="Footer-item Footer-item3">
                <h3>Stay connected</h3>
                <ul>
                    <li><Link to="" className="Footer-Link">Phone</Link></li>
                    <li><Link to="" className="Footer-Link">Gmail</Link></li>
                    <li><Link to="" className="Footer-Link">Twitter</Link></li>
                    <li><Link to="" className="Footer-Link">Instagram</Link></li>
                </ul>
            </section>
          </div>
          <div className="Footer-copyright">
              <p>
                  &copy; Wôpanaâk Tribe 2024. All rights reserved.
              </p>
          </div>
      </footer>
    );
  };

  export default Footer;
