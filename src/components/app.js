import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome.js';
import Nav from './nav.js';
import OurMacarons from './our_macarons';
import GiftsParties from './gifts_parties.js';
import Contact from './contact.js'

export default () => {

    return (
        <div className="container">
            <Nav />
            <Route exact path="/" component={Welcome} />
            <Route path="/our-macarons" component={OurMacarons} />
            <Route path="/gifts-parties" component={GiftsParties} />
            <Route path="/contact" component={Contact} />
        </div>
    )
}
