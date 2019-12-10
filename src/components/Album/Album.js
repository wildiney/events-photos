import React from 'react';
import LazyLoad from 'react-lazyload'

import styles from './Album.module.css';

const Loading = ()=>(
  <div>
    <h5>Loading...</h5>
  </div>
)

const Album = (props) => {
  const eventos = props.eventos.map(
    (evento) => (
      evento.fotos.map(
        (fotos, index)=>(
          <LazyLoad key={index} placeholder={<Loading />}>
          <li className={styles.pict}>
            <img 
              className={styles.img_responsive}
              srcset={`${fotos.lowres} 768w, ${fotos.mediumres} 992w, ${fotos.highres} 1200w`}
              alt={evento.evento} />
          </li>
          </LazyLoad>
        )
      )
    )
  );
  return eventos;
}

export default Album