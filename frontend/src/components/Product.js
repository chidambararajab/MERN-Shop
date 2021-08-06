import React from 'react';
import { Card } from 'react-bootstrap';

import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 mx-2 p-2 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          style={{ maxBlockSize: '400px' }}
        />
      </a>

      <Card.Body>
        <a
          href={`/product/${product._id}`}
          style={{ textDecoration: 'none', color: '#292929' }}
        >
          <Card.Title as='p'>
            <strong>
              <span>{`${product.brand}: ${product.name}`}</span>
            </strong>
          </Card.Title>
        </a>

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
