import React from 'react';
import { Component } from "react";
import CardHome from '../../components/Card';
import ImageHome from '../../components/ImageHome';
import { Container, Row, Col} from 'react-bootstrap';
import './Home.css';
import '../../../App.css';
import ImgUser from '../../components/ImgUser';
import iconUser from '../../../images/iconUser.png';
import iconTecnico from '../../../images/iconTecnico.png';
import iconAdm from '../../../images/iconAdm.png';


class Home extends Component {
    render(){
        return (
            <div>
                <Container id="marginContainer">
                    <h1>Encontrou algum problema na Uneb?<br></br> Fale Conosco</h1>
                    <ImageHome />
                    <Row>
                        <Col md={4}>
                            <CardHome cardTitle="Usuário"
                                      description="Cadastre chamados"
                            />
                        </Col>
                        <Col md={4}>
                            <CardHome cardTitle="Técnico"
                                       description="Atenda Chamados"
                            />
                        </Col>
                        <Col md={4}>
                            <CardHome cardTitle="Administrativo"
                                      description="Administre chamados"
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h1>FUncionalidades especificas para cada usuário</h1>
                    <Row className="textCenter marginTop">
                        <Col md={4}>
                            <ImgUser src={iconUser}/>
                        </Col>
                        <Col md={8}>
                            <h2>Usuário</h2>
                            Abra um chamado sem se cadastrar!
                            Realize registro de ocorrências sem fazer cadastro, basta preencher o formulário e pronto.
                        </Col>
                    </Row>
                    <Row className="textCenter marginTop">
                        <Col md={8}>
                            <h2>Técnico</h2>
                            Abra um chamado sem se cadastrar!
                            Realize registro de ocorrências sem fazer cadastro, basta preencher o formulário e pronto.
                        </Col>
                        <Col md={4}>
                            <ImgUser src={iconTecnico}/>
                        </Col>
                    </Row>
                    <Row className="textCenter marginTop">
                        <Col md={4}>
                            <ImgUser src={iconAdm}/>
                        </Col>
                        <Col md={8}>
                            <h2>Administrativo</h2>
                            Abra um chamado sem se cadastrar!
                            Realize registro de ocorrências sem fazer cadastro, basta preencher o formulário e pronto.
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
