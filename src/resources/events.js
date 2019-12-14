
import React from 'react'

const eventsList = (props)=>{
  let eventos = [{
    id: 1,
    evento: "Aniversário da Luíza",
    slug:"aniversario-da-luiza",
    data: "07/12/2019",
    fotos: []
  },
  {
    id:2,
    evento: "Festa de fim de ano",
    slug:"festa-de-fim-de-ano",
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
  console.log("running")
  console.log(eventos[0])

  return eventos;
}

export default eventsList;
