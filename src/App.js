import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import Album from './components/Album/Album';
import Home from './components/Home/Home'
import Eventos from './components/Eventos/Eventos'

import './index.css'

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/eventos" component={Eventos} />
      </Switch>
    </main>
  );
}

export default App;
