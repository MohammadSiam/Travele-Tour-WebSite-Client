
import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import comn from '../../../Images/community.jpeg'
import comn2 from '../../../Images/cmn.png'
import './Traveller.css'

const Traveller = () => {
    return (
        <div className="container">
            <h4>Connect With Traveller</h4>
            <div className="row">
                <div className="col-sm-3">
                    <Card >
                        <Card.Img variant="top" src={comn} />
                        <Card.Body>
                            <Card.Title>Travel Talk</Card.Title>
                            <Card.Text>
                                <small>General Discussion</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm-3">
                    <Card >
                        <Card.Img variant="top" src={comn2} />
                        <Card.Body>
                            <Card.Title>More Communities</Card.Title>
                            <Card.Text>
                                View all
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


            </div>

        </div>
    );
};

export default Traveller;