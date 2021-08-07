import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card
      className='my-3 mx-2 p-2 rounded'
      style={{ width: '200px', height: '400px' }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          style={{ maxBlockSize: '400px' }}
        />
      </Link>

      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: 'none', color: '#292929' }}
        >
          <Card.Title as='p' style={{ fontSize: '14px' }}>
            <strong>
              <p
                style={{
                  padding: 0,
                  margin: 1,
                  fontSize: '12px',
                  color: 'gray',
                }}
              >{`${product.brand}`}</p>
              <span>{`${product.name}`}</span>
            </strong>
          </Card.Title>
        </Link>

        <Card.Text as='p'>
          <Rating
            value={product.rating}
            text={` ${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h6'>
          <div className='my-1'>₹ {product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
