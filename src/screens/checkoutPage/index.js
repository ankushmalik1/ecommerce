import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import OrderSummaryPage from "./component/OrderSummaryPage";
import { Outlet } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-5">Checkout Page</h2>
      <Row>
        <Col
          md={6}
          className="order-md-1 order-2 my-3 my-md-0 order-summary-col"
        >
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4">Order Summary</Card.Title>
              <OrderSummaryPage />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Outlet />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
