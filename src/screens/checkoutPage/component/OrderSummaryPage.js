import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { CartState } from '../../../context/Context';

const OrderSummaryPage = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();


    const totalPrice = cart.reduce(
        (total, item) => total + item.qty * item.price,
        0
    );

    return (
        <div className="container">
            <Card>
                <Card.Header>Order Summary</Card.Header>
                <ListGroup variant="flush">
                    {cart.map((item) => (
                        <ListGroupItem key={item.id}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="cartitem" key={item.id}>
                                    <img
                                        src={item.image}
                                        className="cartItemImg"
                                        alt={item.title}
                                    />
                                    <div className="cartItemDetail">
                                        <span>{item.title}</span>
                                        <span>₹ {item.price}</span>
                                    </div>
                                </span>
                                <span className="badge badge-pill badge-secondary">
                                    {item.qty}
                                </span>
                            </div>
                        </ListGroupItem>
                    ))}
                    <ListGroupItem>
                        <div className="d-flex justify-content-between">
                            <strong>Total:</strong>
                            <span>${totalPrice}</span>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};


export default OrderSummaryPage;