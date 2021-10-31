import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import Item from './Item/Item';
import './Offer.css'

const Offer = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('https://gruesome-mansion-46697.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div>
            <Container className="offer">
                <h2 >Our Offers</h2>
                <div className="offer-content">
                    <Row>
                        {
                            offers.map(offer => <Col><Item
                                key={offer.key}
                                offer={offer}
                            ></Item></Col>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Offer;