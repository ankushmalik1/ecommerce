import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import { CartState } from "../../context/Context";

const ThankYouPage = () => {
  const {
    state: { cart },

    checkoutData: { shippingAddress, paymentInfo },
  } = CartState();

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="container my-5">
      <Card>
        <Card.Header className="bg-success text-white">
          <h4>
            <BsCheckCircle className="mb-1" /> Thank you for shopping with us!
          </h4>
          <br />
          <h5>See you again! Happy Shopping</h5>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5>Order Details</h5>
              {cart.map((item) => (
                <div key={item.id}>
                  {item.title} x {item.qty}
                </div>
              ))}
              <div className="font-weight-bold mt-2">
                Total Price: ${totalPrice.toFixed(2)}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Customer Information</h5>
              <div>
                Name: {shippingAddress.firstName} {shippingAddress.lastName}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Payment Information</h5>
              <div>Card Holder Name: {paymentInfo.cardName}</div>
              <div>
                Card Number: **** **** **** {paymentInfo.cardNumber.slice(-4)}
              </div>
              <div>Expiry Date: {paymentInfo.expYear}</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Shipping Information</h5>
              <div>Address: {shippingAddress.address}</div>
              <div>City: {shippingAddress.city}</div>
              <div>State: {shippingAddress.state}</div>
              <div>Zip Code: {shippingAddress.zipCode}</div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ThankYouPage;
