import React, { useState, useEffect } from 'react';
import { getImage } from '../../services/getImage';
import Spinner from '../spinner/spinner';

const Example = () => {
  const [image, setImage] = useState(null);

  const loadImage = async () => {
    let image = await getImage();
    setImage(image);
  };

  const imageTemplate = () => {
    return image === null ? <Spinner/> : (
      <img
        className="example__img"
        src={image}
        width="258"
        height="258"
        alt="Картинка с котом"
      />
    );
  };

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <main>
      <section className="example">
        <div className="example__wrapper container">
          <h1 className="example__title title">Пример</h1>
          <h2 className="example__sub-title sub-title">Картинка с котом</h2>
          <div className="example__img-wrapper">
             {imageTemplate()}
          </div>
          <button className="example__button button" to="#" onClick={loadImage}>
            Загрузить другую
          </button>
        </div>
      </section>
    </main>
  );
};

export default Example;
