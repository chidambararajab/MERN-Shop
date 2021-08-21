import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetails } from "../actions/productActions";

// match prop helps to find the id in url.
const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}?/qty=${qty}`);
  };

  return (
    <div
      style={{
        paddingTop: "70px",
      }}
    >
      <Link className="btn btn-light my-3" to="/">
        {`<---`}
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container className="m-2">
          <Row>
            <Col md={3} style={{ margin: "3% 0" }}>
              <Image
                src={product.image}
                alt={product.name}
                style={{ maxHeight: "500px", maxWidth: "250px" }}
              />
            </Col>
            <Col md={5} style={{ margin: "3% 0" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6
                    style={{
                      padding: 0,
                      margin: 1,
                      color: "gray",
                    }}
                  >
                    {`${product.brand} `}
                  </h6>
                  <h5>{product.name}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={` ${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6>₹ {product.price}</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Product Description: </strong>
                  {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3} style={{ margin: "3% 0" }}>
              <Card>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <span>Price : </span>
                      </Col>
                      <Col>
                        <strong>₹{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <span>Status : </span>
                      </Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0 ? (
                            <span style={{ color: "#007600" }}>In Stock</span>
                          ) : (
                            <span style={{ color: "#B12704" }}>
                              Out Of Stock
                            </span>
                          )}
                        </strong>
                      </Col>
                    </Row>
                    <Row>
                      <span
                        className="mt-2"
                        style={{ color: "#272727", fontSize: "11px" }}
                      >
                        Sold by @{product.brand}
                      </span>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (val) => (
                                <option key={val + 1} value={val + 1}>
                                  {val + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      className="btn-block"
                      disabled={product.countInStock === 0}
                      type="button"
                      style={{
                        color: "#f7f7f7",
                        backgroundColor: "#272727",
                        borderRadius: 5,
                        width: "100%",
                        borderColor: "#272727",
                      }}
                      onClick={addToCardHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductScreen;
