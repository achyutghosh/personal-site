import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Achyut Ghosh</h2>
        <p><a href="tel:9804757023">+91 9804757023</a></p>
        <p><a href="mailto:achyutghosh06@gmail.com">achyutghosh06@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About myself</h2>
      <p>
        PROBLEM SOLVER | LEARNER | MUSIC LOVER
      </p>
      <ul className="actions">
        <li>
          <a href={`${PUBLIC_URL}/cv/cv.pdf`} className="button">Download Resume</a>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Achyut Ghosh <Link to="/">achyutghosh.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
