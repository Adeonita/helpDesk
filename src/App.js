import React from 'react';
import { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Home  from  './components/pages/Home/Home';
import AbrirChamado from './components/pages/AbrirChamado/AbrirChamado';
import Login from './components/pages/Login/Login';
import ConsultarChamado from './components/pages/ConsultarChamado/ConsultarChamado';
import Chamados from './components/pages/Chamados/Chamados';
import './style/css/bootstrap.min.css';
import logoUneb from '../src/images/logo.png';
import CadastrarTecnico from './components/pages/CadastrarTecnico/CadastrarTecnico';
import CadastrarAreasProblemas from './components/pages/CadastrarAreas-Problemas/CadastrarAreas-Problemas';


class App extends Component {
  render() {
    return (
      <Router>
          <div className="header">
            <Navbar variant="light">
            <Navbar>
              <Navbar.Brand className=" wow fadeIn" data-wow-duration="2s">
                <Link to="/">
                  <img src={logoUneb} height="100px"/>
                </Link>
              </Navbar.Brand>
            </Navbar>
            <Nav className="mr-auto menu-principal">
                <li className="hvr-underline-from-left wow fadeIn" data-wow-duration="2s"><Link to="/">Home</Link></li>
                <li className="hvr-underline-from-left wow fadeIn" data-wow-duration="2s"><Link to="/abrir-chamado">Abrir Chamado</Link ></li>
                <li className="hvr-underline-from-left wow fadeIn" data-wow-duration="2s"><Link to="/login">Login</Link></li>
                <li className="hvr-underline-from-left wow fadeIn" data-wow-duration="2s"><Link to="/consultar-chamado">Consultar Chamado</Link></li>
                <li className="hvr-underline-from-left wow fadeIn" data-wow-duration="2s"><Link to="/chamados">Chamados</Link></li>
                <li className="wow fadeIn" data-wow-duration="2s">
                  <NavDropdown className="margin-dropdown" title="Cadastrar" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/cadastrar-tecnico">Funcionários</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/cadastrar-areas-problemas">Áreas e Problemas</Link></NavDropdown.Item>
                  </NavDropdown>
                </li>
              </Nav>
            </Navbar>
          </div>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/abrir-chamado'} component={AbrirChamado} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/consultar-chamado'} component={ConsultarChamado}/>
            <Route exact path={'/chamados'} component={Chamados}/>
            <Route exact path={'/cadastrar-tecnico'} component={CadastrarTecnico}/>
            <Route exact path={'/cadastrar-areas-problemas'} component={CadastrarAreasProblemas}/>
          </Switch>

      </Router>
    );
  }
}

export default App;
