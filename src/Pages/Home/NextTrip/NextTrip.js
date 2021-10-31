import React from 'react';
import './NextTrip.css'
import { Col, Container, Row } from 'react-bootstrap';
import mosque from '../../../Images/s-mosque.jpg';
import monzil from '../../../Images/manzil.jpg';
import mondir from '../../../Images/mondir.jpg'


const NextTrip = () => {
    return (
        <div>
            <Container>
                <h3>Inspiration For Next Trip</h3>
                <div className="trip">
                    <Row>
                        <Col>
                            <figure className="position-realtive">
                                <img src={mosque} alt="" className="img-fluid" />
                                <>
                                    <figcaption>
                                        <h5>Sixty Dome Mosque</h5>
                                        <p>
                                            The mosque is locally known as the 'Shat Gombuj Masjid', which in Bengali means Sixty Domed Mosque
                                        </p>
                                    </figcaption>
                                </>
                            </figure>
                        </Col>
                        <Col>
                            <figure className="">
                                <img src={monzil} alt="" className="" />
                                <>
                                    <figcaption className="trip-content">
                                        <h5>Ahsan Manzil</h5>
                                        <p>
                                            Ahsan Manzil, an architectural treasure, is a witness to many historical events of Bangladesh.
                                        </p>
                                    </figcaption>
                                </>
                            </figure>
                        </Col>
                        <Col>
                            <figure className="">
                                <img src={mondir} alt="" className="" />
                                <>
                                    <figcaption>
                                        <h5>Kantajew Temple</h5>
                                        <p>
                                            Kantanagar Temple, commonly known as Kantaji Temple at Kantanagar,is a late-medieval Hindu temple in Dinajpur, Bangladesh.
                                        </p>
                                    </figcaption>
                                </>
                            </figure>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default NextTrip;