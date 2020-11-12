import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <h1>Информация</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus nesciunt ratione
        aperiam ducimus, quaerat, quidem eaque officiis voluptate necessitatibus, quasi sint impedit
        deleniti consequuntur aliquid corporis. Non, natus omnis.
      </p>
      <Link to="/" className="btn brown darken-2">
        Вернуться к списку пользователей
      </Link>
    </>
  );
};

export default AboutPage;
