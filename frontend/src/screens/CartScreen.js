import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
  Form,
  ListGroupItem,
} from "react-bootstrap";

import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { loading, error, cartItems } = cart;
  console.log(cartItems);

  useEffect(async () => {
    if (productId) {
      await dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    console.log("remove");
  };

  return (
    <Row
      style={{
        paddingTop: "70px",
      }}
    >
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup
            variant="flush"
            style={{
              display: "flex",
              justifyItems: "center",
              border: "1px solid #f7f7f7",
            }}
          >
            {cartItems.map((cartItem) => (
              <ListGroup.Item key={cartItem.product}>
                <Row className="my-4">
                  <Col md={2}>
                    <Image
                      src={cartItem.image}
                      alt={cart.name}
                      style={{ maxHeight: "200px", maxWidth: "100px" }}
                    />
                  </Col>
                  <Col md={3}>
                    <Link
                      to={`/product/${cartItem.product}`}
                      style={{ textDecoration: "none", color: "#272727" }}
                    >
                      <Row>
                        <h6>{`${cartItem.brand}: ${cartItem.name}`}</h6>
                      </Row>
                      <Row>
                        <p>{`Category: ${cartItem.category}`}</p>
                      </Row>
                    </Link>
                  </Col>
                  <Col md={2}>
                    <h6>{`₹ ${cartItem.price}`}</h6>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={cartItem.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(cartItem.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(cartItem.countInStock).keys()].map((val) => (
                        <option key={val + 1} value={val + 1}>
                          {val + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      varient="light"
                      onClick={() => removeFromCartHandler(cartItem.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <h2>
              Subtotal (
              {cartItems.reduce(
                (accumilater, item) => accumilater + item.qty,
                0
              )}
              ) items
            </h2>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;

/**
 * Another input option for user friendly implementation.
 */
/**
     <Col md={2}>
        <input
          type="number"
          min={1}
          max={cartItem.countInStock}
          value={cartItem.qty}
          onChange={(e) =>
            dispatch(addToCart(cartItem.product, Number(e.target.value)))
          }
        ></input>
      </Col>
 */
