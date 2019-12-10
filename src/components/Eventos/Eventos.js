import React from 'react'

import Album from '../Album/Album'


const Eventos = (props) => {
  let eventos = [{
    id: 1,
    evento: "Aniversário da Luíza",
    data: "08/12/2019",
    fotos: []
  }]

  for (let i = 1; i < 438; i++) {
    eventos[0].fotos.push({
      highres: "https://slicedpixel.com/eventos/2019-12-07-Luiza/luiza-" + i + "_high.jpg",
      mediumres: "https://slicedpixel.com/eventos/2019-12-07-Luiza/luiza-" + i + "_medium.jpg",
      lowres: "https://slicedpixel.com/eventos/2019-12-07-Luiza/luiza-" + i + "_low.jpg"
    })
  }

  return (
    <div className="container" >
      <div className="postit">
        <h1>Aniversário da Luíza <small>(2019-12-07)</small></h1>
        <a className="btn btn-success" href="http://services.slicedpixel.com/downloads/file/2019-12-07-Luiza.zip">Download em alta</a>
      </div>
      <Album eventos={eventos} />
    </div>
  )
}

export default Eventos