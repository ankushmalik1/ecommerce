import React from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="primary" variant="dark" style={{ height: 60 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Hub</Link>
        </Navbar.Brand>

        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="secondary">
              <FaShoppingCart color="white" fontSize="25px"></FaShoppingCart>
              <Badge bg="success">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="dropdown-menu-right"
              style={{ minWidth: 370 }}
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.title}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.title}</span>
                        <span>$ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Show My Basket
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
