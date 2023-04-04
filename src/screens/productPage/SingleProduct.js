import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card className="productsCard">
        <Card.Img variant="top" src={prod.image} alt={prod.title}></Card.Img>
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {prod.price}</span>
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              style={{ flex: 0.5 }}
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
              variant="warning"
            >
              Remove from Basket
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              variant="success"
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Unavailable" : "Add to Basket"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
