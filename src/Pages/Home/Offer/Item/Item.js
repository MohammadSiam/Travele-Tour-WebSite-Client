import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { img, properties, name, description, price } = props.offer;


    return (
        <div className="item-content">
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }} className="item" border="light" >
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title><b>{name}</b></Card.Title>
                                <Card.Text>
                                    {properties}
                                    <br />
                                    <small>{description}</small><br />
                                    <small><b>{price}</b></small>
                                </Card.Text>
                                <Link to="/booking/"><button type="button" class="btn btn-primary">Booked Now</button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Item;