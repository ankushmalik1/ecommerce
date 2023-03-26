import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../../../context/Context";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';


const PaymentInfoPage = () => {
    const [validated, setValidated] = useState(false);

    const [paymentSaved, setPaymentSaved] = useState(false);

    const [cardBrand, setCardBrand] = useState(null);

    const [paymentInfo, setPaymentInfo] = useState({
        cardName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvv: '',
    });

    const {
        checkoutData,
        checkoutDispatch
    } = CartState();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPaymentInfo({
            ...paymentInfo,
            [name]: value
        });

        if (/^4/.test(paymentInfo.cardNumber)) {
            setCardBrand('visa');
        } else if (/^5[1-5]/.test(paymentInfo.cardNumber)) {
            setCardBrand('mastercard');
        } else if (/^3[47]/.test(paymentInfo.cardNumber)) {
            setCardBrand('amex');
        } else {
            setCardBrand(null);
        }



    };

    const handlePaymentInfoSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity() === true) {
            event.preventDefault()
            setPaymentSaved(true)
            checkoutDispatch({
                type: "SAVE_PAYMENT_INFO",
                payload: paymentInfo
            })
        }
    };



    return (
        <div >

            <h5>Payment Info</h5>
            <Form noValidate validated={validated} onSubmit={handlePaymentInfoSubmit}>
                <Form.Group controlId="cardName" className="mb-3">
                    <Form.Label>Cardholder Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="cardName"
                        placeholder="Enter cardholder name"
                        value={paymentInfo.cardName}
                        onChange={handleInputChange}
                        pattern="^[A-Za-z]+([\s]?[A-Za-z]+)*$"
                    />

                    <Form.Control.Feedback type="invalid">
                        Please enter cardholder name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="cardNumber" className="mb-3">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="cardNumber"
                        placeholder="Enter credit card number"
                        maxLength={16}
                        value={paymentInfo.cardNumber}
                        onChange={handleInputChange}
                        pattern="^4[0-9]{12}(?:[0-9]{3})?$|^5[1-5][0-9]{14}$|^3[47][0-9]{13}$"

                    />

                    {paymentInfo.cardNumber && cardBrand === 'visa' && <FaCcVisa size={30} />}
                    {paymentInfo.cardNumber && cardBrand === 'mastercard' && <FaCcMastercard size={30} />}
                    {paymentInfo.cardNumber && cardBrand === 'amex' && <FaCcAmex size={30} />}

                    <Form.Control.Feedback type="invalid">
                        Please enter a valid credit card number.
                    </Form.Control.Feedback>
                </Form.Group>

                <Row className="d-flex flex-column flex-md-row justify-content-between">
                    <Form.Group as={Col} md={4} controlId="expMonth">
                        <Form.Label>Exp. Month</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="expMonth"
                            placeholder="MM"
                            value={paymentInfo.expMonth}
                            onChange={handleInputChange}
                            pattern="^([1-9]|0[1-9]|1[0-2])$"
                        />

                        <Form.Control.Feedback type="invalid">
                            Please enter a valid expiration month (MM).
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md={4} controlId="expYear">
                        <Form.Label>Exp. Year</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="expYear"
                            placeholder="YYYY"
                            value={paymentInfo.expYear}
                            onChange={handleInputChange}
                            pattern="^20[2-9][4-9]$"
                        />

                        <Form.Control.Feedback type="invalid">
                            Please enter a valid expiration year (YYYY).
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md={4} controlId="cvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            value={paymentInfo.cvv}
                            onChange={handleInputChange}
                            pattern="^[0-9]{3,4}$"
                        />

                        <Form.Control.Feedback type="invalid">
                            Please enter a valid CVV.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <div className="mt-3 ">
                    <div>
                        {paymentSaved ? (
                            <Link to="/OrderCompleted">
                                <Button variant="success">Make Payment</Button>
                            </Link>
                        ) : (
                            <Button type="submit">Save Payment Info</Button>
                        )}
                    </div>
                </div>

            </Form>

        </div>

    );
};
export default PaymentInfoPage;