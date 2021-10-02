import React, { Component } from 'react'
import axios from 'axios'
import './CheckoutPage.css'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Cart from '../../container/Header/Cart/Cart'
import { Button } from '@material-ui/core'

class CheckoutPage extends Component {
    state = {
        name: '',
        surname: '',
        address: '',
        phone: '',
        isOrderSend: false,
    }

    orderName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }
    orderSurname = (e) => {
        this.setState({
            surname: e.target.value,
        })
    }

    orderAddress = (e) => {
        this.setState({
            address: e.target.value,
        })
    }
    orderPhone = (e) => {
        this.setState({
            phone: e.target.value,
        })
    }

    sendForm = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: this.state.name,
                    surname: this.state.surname,
                    address: this.state.address,
                    phone: this.state.phone,
                }
            )
            .then((res) => res.data)
            .then(({ name, surname, address, phone }) =>
                this.setState({
                    name,
                    surname,
                    address,
                    phone,
                    isOrderSend: true,
                })
            )
    }

    renderForm = () => {
        return (
            <>
                <h2>Checkout Form</h2>
                <div className="form-order">
                    <p className="contact-details">
                        <ErrorOutlineIcon
                            fontSize="small"
                            className="necessarily"
                        />
                        Your contact details:
                    </p>

                    <form onSubmit={this.sendForm} className="checkout-form">
                        <div>
                            <input
                                type="text"
                                placeholder="Your name"
                                value={this.state.name}
                                onChange={this.orderName}
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                type="text"
                                placeholder="Your surname"
                                value={this.state.surname}
                                onChange={this.orderSurname}
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                type="text"
                                placeholder="Your address"
                                value={this.state.address}
                                onChange={this.orderAddress}
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                type="tel"
                                name="tel"
                                placeholder="Your phone"
                                value={this.state.phone}
                                onChange={this.orderPhone}
                            />
                        </div>
                        <br />
                        <button type="submit" className="form-submit">
                            Send
                        </button>
                        <button type="reset" htmlFor="tel" value="Reset Form">
                            Reset
                        </button>
                    </form>
                </div>
                <hr />
                <h4>Order:</h4>
                <Cart></Cart>
                <hr />
                <h4>Delivery:</h4>
                <p>
                    <input type="radio" name="delivery" />
                    Self-pickup from the department of postal operators:
                </p>
                <input type="searsh" placeholder="find the delivery point" />
                <p>
                    <input type="radio" name="delivery" /> Delivery by courier:
                    <br />
                    <span className="courier-time">
                        choose a convenient courier delivery time for you
                    </span>
                </p>
                <input type="date" />
                <hr />
                <Button variant="contained">I confirm the order</Button>
                <h6>
                    By confirming the order, I accept
                    <a href=""> the terms of the user agreement</a>
                </h6>
            </>
        )
    }

    renderMessage = () => {
        return (
            <div>
                Dear {this.state.name}, thanks for your order!
                <div>Delivery address: {this.state.address}</div>
                <div>We will call you at the number: {this.state.phone} </div>
                <br />
                <div>
                    Your order and total price: <Cart> </Cart>
                </div>
                <br />
                <div>
                    <i>We wish you a good day! </i>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                <h1 className="checkout-title">Checkout Page</h1>
                {/* {console.log(this.state)} */}
                {this.state.isOrderSend !== true
                    ? this.renderForm()
                    : this.renderMessage()}
            </>
        )
    }
}

export default CheckoutPage
