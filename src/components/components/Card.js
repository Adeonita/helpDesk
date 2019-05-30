import React from 'react';
import { Component } from "react";
import './Card.css';
import {Card} from 'react-bootstrap';

class CardHome extends Component {
    render(){
        return(
            <div>
                <Card style={{ width: '18rem', backgroundColor: this.props.color }} className="cardHome">
                    <Card.Body>
                        <Card.Title className="alignCenter">{this.props.cardTitle}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardHome;
