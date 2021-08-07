import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
} from 'react-bootstrap';

import Rating from '../components/Rating';

// match prop helps to find the id in url.
const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match.params.id]);

  return (
    <div style={{ paddingTop: '70px' }}>
      <Link className='btn btn-light my-3' to='/'>
        {`<---`}
      </Link>
      <Container className='mx-5 my-3'>
        <Row>
          <Col md={3}>
            <Image src={product.image} alt={product.name} />
          </Col>
          <Col md={5}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h6
                  style={{
                    padding: 0,
                    margin: 1,
                    color: 'gray',
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
              <ListGroup.Item>₹ {product.price}</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
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
                        {console.log(product.countInStock)}
                        {product.countInStock > 0 ? (
                          <span style={{ color: '#007600' }}>In Stock</span>
                        ) : (
                          <span style={{ color: '#B12704' }}>Out Of Stock</span>
                        )}
                      </strong>
                    </Col>
                  </Row>
                  <Row>
                    <span
                      className='mt-2'
                      style={{ color: '#272727', fontSize: '12px' }}
                    >
                      Sold by @{product.brand}
                    </span>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    disabled={(product.countInStock = 0)}
                    type='button'
                    style={{
                      color: '#f7f7f7',
                      backgroundColor: '#272727',
                      borderRadius: 5,
                      width: '100%',
                      borderColor: '#272727',
                    }}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductScreen;