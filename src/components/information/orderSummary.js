import React, { Component } from 'react';

import { UnderlinedTitle, InfoTitle } from './infoHelp';

import { connect } from 'react-redux';

class OrderSummary extends Component {
    render() {
        const { className } = this.props;
        let subtotal = 0;
        let tax = 0.16;
        let shipping = 4.99;
        let amtCourses = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
            amtCourses += cartProduct.quantity;
        })
        return (
            <div className={`${className} order-summary`} >
                <UnderlinedTitle className='order-summary__title' title='Order Summary'/>
                <InfoTitle className='order-summary__subtotal' title={`${amtCourses} courses`} value={`$${subtotal.toFixed(2)}`}/>
                <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value={`$${(tax + shipping)}`}/>
                <InfoTitle className='order-summary__total info-title-green' title='Total' value={`$${(subtotal + tax + shipping)}`}/>
            </div>
        )
    }
}

function MapStateToProps(state){
    const { cartProducts } = state.user;
    return {cartProducts}
}

OrderSummary = connect(MapStateToProps)(OrderSummary);

export default OrderSummary; 