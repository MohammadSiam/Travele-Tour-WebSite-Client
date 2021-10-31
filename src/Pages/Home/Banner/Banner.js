import React from 'react';
import './Banner.css'
import banner from '../../../Images/banner2.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner">
            <Row>
                <Col>
                    <figure className="position-realtive">
                        <img src={banner} alt="" className="img-fluid" />
                        <Container>
                            <figcaption className="figcaption-content">
                                <h1>Escape from the Ordinary</h1>
                                <p>
                                    Take a journey into the Great California Wilderness
                                </p>
                            </figcaption>
                        </Container>
                    </figure>
                </Col>
            </Row>
        </div>
    );
};

export default Banner;