import React from 'react';
import { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import Home  from  './components/pages/Home/Home';
import AbrirChamado from './components/pages/AbrirChamado/AbrirChamado';
import Login from './components/pages/Login/Login';
import ConsultarChamado from './components/pages/ConsultarChamado/ConsultarChamado';
import Chamados from './components/pages/Chamados/Chamados';
import './style/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="marginMenu">
          <Navbar variant="light">
          <Nav className="mr-auto menu-principal">
              <li><Link to="/">Home</Link></li>
              <li>|</li>
              <li><Link to="/abrir-chamado">Abrir Chamado</Link ></li>
              <li>|</li>
              <li><Link to="/login">Login</Link></li>
              <li>|</li>
              <li><Link to="/consultar-chamado">Consultar Chamado</Link></li>
              <li>|</li>
              <li><Link to="/chamados">Chamados</Link></li>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/abrir-chamado'} component={AbrirChamado} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/consultar-chamado'} component={ConsultarChamado}/>
            <Route exact path={'/chamados'} component={Chamados}/>
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
