import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Flights from '../OfferPage/Flights/Flights'
import Adrenalin from '../OfferPage/Adrenalin/Adrenalin'
import Recreation from '../OfferPage/Recreation/Recreation'
import PropTypes from 'prop-types'

const OfferPage = ({ changeLike, changeNumber }) => {
    return (
        <>
            <Switch>
                <Route
                    path="/flights"
                    exact
                    render={() => (
                        <>
                            <Flights
                                changeLike={changeLike}
                                changeNumber={changeNumber}
                            />
                        </>
                    )}
                />
                <Route
                    path="/adrenalin"
                    exact
                    render={() => (
                        <>
                            <Adrenalin
                                changeLike={changeLike}
                                changeNumber={changeNumber}
                            />
                        </>
                    )}
                />
                <Route
                    path="/recreation"
                    exact
                    render={() => (
                        <>
                            <Recreation
                                changeLike={changeLike}
                                changeNumber={changeNumber}
                            />
                        </>
                    )}
                />
            </Switch>
        </>
    )
}
OfferPage.propTypes = {
    changeLike: PropTypes.func,
    changeNumber: PropTypes.func,
}

export default OfferPage
