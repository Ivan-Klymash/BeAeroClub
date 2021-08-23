import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Flights from '../OfferPage/Flights/Flights'
import Adrenalin from '../OfferPage/Adrenalin/Adrenalin'
import Recreation from '../OfferPage/Recreation/Recreation'

const OfferPage = () => {
    return (
        <>
            <Switch>
                <Route path="/flights" component={Flights} />
                <Route path="/adrenalin" component={Adrenalin} />
                <Route path="/recreation" component={Recreation} />
            </Switch>
        </>
    )
}

export default OfferPage
