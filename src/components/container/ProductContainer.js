import React, { Component } from 'react'
import Product from '../static/Product'

export default class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: props.quantity || 0
        }
    }

    addProduct = () => {
        const newQuantity = this.state.quantity + 1;
        this.setState({ quantity: newQuantity })
    }

    removeProduct = () => {
        if (this.state.quantity > 0) {
            const newQuantity = this.state.quantity - 1;
            this.setState({ quantity: newQuantity })
        }
    }

    render() {
        return (
            <Product {...this.props}
                productAdded={this.addProduct}
                productRemoved={this.removeProduct}
                quantity={this.state.quantity} />
        );
    }
}
