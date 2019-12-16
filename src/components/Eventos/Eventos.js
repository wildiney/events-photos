import React from 'react'
import Album from '../Album/Album'
import Menu from '../Menu/Menu'


const Eventos = (props) => {
  const paramId = parseInt(props.match.params.id);

  let eventList = [{
    id: 1,
    evento: "Aniversário da Luíza",
    slug: "aniversario-da-luiza",
    data: "07/12/2019",
    download: 'http://services.slicedpixel.com/downloads/file/2019-12-07-Luiza.zip',
    fotos: []
  },
  {
    id: 2,
    evento: "Festa de fim de ano",
    slug: "festa-de-fim-de-ano",
    data: "08/12/2019",
    download: null,
    fotos: []
  }
  ]

  for (let i = 1; i < 438; i++) {
    eventList[0].fotos.push({
      highres: "https://slicedpixel.com/eventos/festa-luiza/festa-luiza-" + i + ".jpg",
      mediumres: "https://slicedpixel.com/eventos/festa-luiza/festa-luiza-" + i + ".jpg",
      lowres: "https://slicedpixel.com/eventos/festa-luiza/festa-luiza-" + i + ".jpg"
    })
  }

  for (let i = 1; i < 301; i++) {
    eventList[1].fotos.push({
      highres: "https://slicedpixel.com/eventos/festa-encerramento/festa-encerramento-" + i + ".jpg",
      mediumres: "https://slicedpixel.com/eventos/festa-encerramento/festa-encerramento-" + i + ".jpg",
      lowres: "https://slicedpixel.com/eventos/festa-encerramento/festa-encerramento-" + i + ".jpg"
    })
  }


  let eventos = eventList.find(ev => ev.id === paramId)
  console.log(eventos)

  return (
    <div>
      <Menu />
      <div className="container" >
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="postit">
              <h1>{eventos.evento}<small>({eventos.data})</small></h1>
              {eventos.download !== null &&
                <a className="btn btn-success" href="http://services.slicedpixel.com/downloads/file/2019-12-07-Luiza.zip">Download em alta</a>
              }
            </div>
            <Album eventos={eventos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eventos