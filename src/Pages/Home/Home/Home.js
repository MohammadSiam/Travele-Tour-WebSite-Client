import React from 'react';
import Banner from '../Banner/Banner';
import NextTrip from '../NextTrip/NextTrip';
import Offer from '../Offer/Offer';
import Traveller from '../Traveller/Traveller';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <NextTrip></NextTrip>
            <Traveller></Traveller>
        </div>
    );
};

export default Home;