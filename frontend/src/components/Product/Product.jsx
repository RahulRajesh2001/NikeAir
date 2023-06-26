import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 border-0'>
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Card.Title as='div' style={{ fontSize: 'small', color: 'black' }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
            <Card.Text as='h8' style={{ color: 'lightgrey'}} >
          ₹{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

