import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartState } from "../../../context/Context";

const ShippingAddressPage = () => {
  const [validated, setValidated] = useState(false);

  const [addressSaved, setAddressSaved] = useState(false);

  const [shippingAddressData, setShippingAddressData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const {
    checkoutData: { shippingAddress },
    checkoutDispatch,
  } = CartState();

  const history = useNavigate();

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddressData({
      ...shippingAddressData,
      [name]: value,
    });
  };

  const handleShippingAddressSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    if (form.checkValidity() === true) {
      e.preventDefault();
      setAddressSaved(true);
      checkoutDispatch({
        type: "SAVE_SHIPPING_ADDRESS",
        payload: shippingAddressData,
      });
    }
  };

  return (
    <div>
      <h5>Shipping Address</h5>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleShippingAddressSubmit}
      >
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={shippingAddressData.firstName}
                onChange={handleShippingAddressChange}
                pattern="^[A-Za-z]{3,20}$"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first name (3-20 letters).
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={shippingAddressData.lastName}
                onChange={handleShippingAddressChange}
                pattern="^[A-Za-z]{3,20}$"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name (3-20 letters).
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="HouseNo Street Name"
                value={shippingAddressData.address}
                onChange={handleShippingAddressChange}
                required
                pattern="^[0-9]+\s[A-z]+\s[A-z]+"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid address (e.g. 123 Main St).
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Enter City"
                value={shippingAddressData.city}
                onChange={handleShippingAddressChange}
                required
                pattern="^[A-Za-z]{3,20}$"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid city name (3-20 letters).
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                placeholder="Enter State"
                value={shippingAddressData.state}
                onChange={handleShippingAddressChange}
                required
                pattern="^[A-Za-z]{2}$"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid state name (eg. MP).
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="zipCode"
                placeholder="Enter Zip Code"
                value={shippingAddressData.zipCode}
                onChange={handleShippingAddressChange}
                required
                pattern="^[0-9]{5}$"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid 5 digit Zip Code.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                placeholder="Enter Country"
                value={shippingAddressData.country}
                onChange={handleShippingAddressChange}
                required
                pattern="^[A-Za-z]{3,20}$"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Country name (3-20 letters).
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-between">
          <div>
            {addressSaved ? (
              <Link to="/checkout/payment">
                <Button variant="success">Continue to Payment</Button>
              </Link>
            ) : (
              <Button type="submit">Save Address</Button>
            )}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ShippingAddressPage;
