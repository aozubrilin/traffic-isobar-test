import React from 'react';
import {Link} from 'react-router-dom';
import avatar from '../../img/athletic-guy.png';

const Main = () => {
  return (
    <main>
      <section className="about-me">
        <div className="about-me__wrapper container">
          <h1 className="about-me__title title">Обо мне</h1>
          <div className="about-me__info">
            <div className="about-me__col about-me__col--left">
              <h2 className="about-me__name sub-title">Sed ut perspiciatis</h2>
              <p className="about-me__text">
                At&nbsp;vero eos et&nbsp;accusamus et&nbsp;iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et&nbsp;quas molestias
                excepturi sint occaecati cupiditate non provident, similique
                sunt in&nbsp;culpa qui officia deserunt mollitia animi,
                id&nbsp;est laborum et&nbsp;dolorum fuga. Et&nbsp;harum quidem
                rerum facilis est et&nbsp;expedita distinctio.
              </p>
              <Link className="about-me__button button" to="#">
                Смотреть работу
              </Link>
            </div>
            <div className="about-me__col about-me__col--right">
              <img
                className="about-me__img"
                src={avatar}
                alt="Аватар"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
