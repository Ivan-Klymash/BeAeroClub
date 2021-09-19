import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Flights from '../OfferPage/Flights/Flights'
import Adrenalin from '../OfferPage/Adrenalin/Adrenalin'
import Recreation from '../OfferPage/Recreation/Recreation'

const OfferPage = () => {
    return (
        <>
            <Switch>
                <Route path="/flights" exact component={Flights} />
                <Route path="/adrenalin" exact component={Adrenalin} />
                <Route path="/recreation" exact component={Recreation} />
            </Switch>
        </>
    )
}

export default OfferPage
