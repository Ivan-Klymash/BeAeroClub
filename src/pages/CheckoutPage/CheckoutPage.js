import React, { Component } from 'react'
import axios from 'axios'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Cart from '../../container/Header/Cart/Cart'
import './CheckoutPage.css'

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
                <h4>Order:</h4>
                <Cart></Cart>
                <hr />
                <div className="payment">
                    <h3>Select payment method:</h3>
                    <p className="paymentParagraph">
                        <input type="radio" name="payment" />
                        Payment upon receipt of the goods
                    </p>

                    <p className="form-input">
                        <input type="radio" name="payment" />
                        Online payment card
                        <div>
                            <input type="email" placeholder="your email" />
                        </div>
                    </p>

                    <p className="form-input">
                        <input type="radio" name="payment" />
                        Google Pay
                        <div>
                            <input type="email" placeholder="your email" />
                        </div>
                    </p>
                    <button
                        type="submit"
                        className="form-submit"
                        onClick={() => alert('payment method selected')}
                    >
                        Send
                    </button>
                </div>
                <hr />
                <div className="form-order">
                    <h2>Checkout Form </h2>
                    <p>
                        <ErrorOutlineIcon
                            fontSize="small"
                            className="necessarily"
                        />
                        Enter your contact information:
                    </p>
                    <form onSubmit={this.sendForm} className="checkout-form">
                        <div className="form-input">
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
                        <i
                            style={{
                                padding: '20px 0px 0px 0px',
                                display: 'block',
                            }}
                        >
                            We will phone you to access your items.
                        </i>
                        <br />
                        <button type="submit" className="form-submit">
                            Send
                        </button>
                        <button type="reset" className="form-reset">
                            Reset
                        </button>
                    </form>
                </div>
                <hr />
            </>
        )
    }

    renderMessage = () => {
        return (
            <div style={{ backgroundColor: 'rgb(208 221 238)' }}>
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
                <h1 style={{ textAlign: 'center' }}>Checkout Page</h1>
                {this.state.isOrderSend !== true
                    ? this.renderForm()
                    : this.renderMessage()}
            </>
        )
    }
}

export default CheckoutPage
