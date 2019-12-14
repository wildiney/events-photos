import React from 'react'
import Display from './Display/Display'

const Home = (props) => {
  let eventos = [{
    id: 1,
    evento: "Aniversário da Luíza",
    slug: "aniversario-da-luiza",
    cover: "https://slicedpixel.com/eventos/2019-12-07-Luiza/luiza-1_low.jpg",
    data: "07/12/2019",
    fotos: []
  },
  {
    id: 2,
    evento: "Festa de fim de ano",
    slug: "festa-de-fim-de-ano",
    cover: "https://slicedpixel.com/eventos/2019-12-08-festa-encerramento/festa-encerramento-1_768.jpg",
    data: "08/12/2019",
    fotos: []
  }
  ]

  for (let i = 1; i < 438; i++) {
    eventos[0].fotos.push({
      highres: "https://slicedpixel.com/eventos/2019-12-07-Luiza/luiza-" + i + "_high.jpg",
      mediumres: "https://slicedpixel.com/eventos/2019-12-07-Luiza/luiza-" + i + "_medium.jpg",
      lowres: "https://slicedpixel.com/eventos/2019-12-07-Luiza/luiza-" + i + "_low.jpg"
    })
  }

  const eventsList = eventos.map(
    (evento, index) => {
      return <Display key={index} link={"/eventos/aniversario/" + evento.id} image={evento.cover} evento={evento.evento} data={evento.data} />
    }
  );

  return (
    <div className="container">
      <div className="eventos row">
        <div className="col-6 mx-auto">
          {eventsList}
        </div>
      </div>

    </div>
  );
}

export default Home