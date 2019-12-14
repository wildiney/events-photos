import React from 'react';
import LazyLoad from 'react-lazyload'

import styles from './Album.module.css';

const Loading = ()=>(
  <div>
    <h5>Loading...</h5>
  </div>
)

const Album = (props) => {
  const eventos = props.eventos.fotos.map(
        (fotos, index)=>(
          <LazyLoad key={index} placeholder={<Loading />}>
          <li className={styles.pict}>
            <img 
              className={styles.img_responsive}
              srcSet={`${fotos.lowres} 768w`}
              alt={props.eventos.evento} />
          </li>
          </LazyLoad>
        )
      );
  return eventos;
}

export default Album