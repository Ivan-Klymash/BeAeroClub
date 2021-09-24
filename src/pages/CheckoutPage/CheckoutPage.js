import React, { Component } from 'react'
import axios from 'axios'

class CheckoutPage extends Component {
    state = {
        name: '',
        address: '',
        isOrderSend: false,
    }

    orderName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    orderAddress = (e) => {
        this.setState({
            address: e.target.value,
        })
    }

    sendForm = (e) => {
        e.preventDefault()
        axios
            .post('', {
                name: this.state.name,
                address: this.state.address,
            })
            .then((res) => res.data)
            .then(({ name, address }) =>
                this.setState({
                    name,
                    address,
                    isOrderSend: true,
                })
            )
    }

    renderForm = () => {
        return (
            <div className="form-order">
                <h2>Checkout Form </h2>
                <form>
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
                            placeholder="Your address"
                            value={this.state.address}
                            onChange={this.orderAddress}
                        />
                    </div>
                    <br />
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }

    renderMessage = () => {
        return (
            <div>
                Dear {this.state.name}, thanks for your order.
                <div>Delivery address is: {this.state.address} </div>
            </div>
        )
    }

    render() {
        return (
            <>
                <h1>Checkout Page</h1>
                {this.state.isOrderSend !== true
                    ? this.renderForm()
                    : this.renderMessage()}
            </>
        )
    }
}

export default CheckoutPage
