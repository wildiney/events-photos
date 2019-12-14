import React from 'react'

const Menu = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/eventos">Fernando Masi</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <a className="nav-link" href="/eventos/aniversario/1">Festa da Luiza </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/eventos/festa/2">Festa de encerramento</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu