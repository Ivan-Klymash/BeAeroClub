import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Flights from '../OfferPage/Flights/Flights'
import Adrenalin from '../OfferPage/Adrenalin/Adrenalin'
import Recreation from '../OfferPage/Recreation/Recreation'
import PropTypes from 'prop-types'

const OfferPage = ({ changeLike }) => {
    return (
        <>
            <Switch>
                <Route
                    path="/flights"
                    exact
                    render={() => (
                        <>
                            <Flights changeLike={changeLike} />
                        </>
                    )}
                />
                <Route
                    path="/adrenalin"
                    exact
                    render={() => (
                        <>
                            <Adrenalin changeLike={changeLike} />
                        </>
                    )}
                />
                <Route
                    path="/recreation"
                    exact
                    render={() => (
                        <>
                            <Recreation changeLike={changeLike} />
                        </>
                    )}
                />
            </Switch>
        </>
    )
}
OfferPage.propTypes = {
    changeLike: PropTypes.func,
}

export default OfferPage
