import React from 'react';
import { Link } from 'react-router-dom';
// import ContactIcons from '../components/Contact/ContactIcons';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Achyut Ghosh's personal website. Masters in Coumputer Science & Application, "
      + 'worked with IT company & music enthusiast.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my site</Link></h2>
          {/* <ContactIcons></ContactIcons> */}
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact me</Link>.
      </p>
      <p> Source available <a href="https://github.com/achyutghosh/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
