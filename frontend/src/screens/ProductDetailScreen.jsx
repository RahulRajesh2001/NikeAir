import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Carousel,
} from 'react-bootstrap'
import Rating from '../components/Rating/Rating'
import { useGetProductDetailsQuery } from '../slices/productApiSlice'

const ProductScreen = () => {
  const { id: productId } = useParams()

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId)

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {isLoading ? (
        <h2>loading...</h2>
      ) : error ? (
        <div>{error?.data?.message}</div>
      ) : (
        <>
          {' '}
          <Row>
            <Col md={1}></Col>

            <Col md={6} xl={4}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={product.image}
                    alt={product.name}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={product.image2}
                    alt={product.name}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={product.image3}
                    alt={product.name}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={product.image4}
                    alt={product.name}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={product.image5}
                    alt={product.name}
                  />
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col md={1}></Col>

            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating value={product.rating} />
                </ListGroupItem>
                <ListGroupItem>{product.description}</ListGroupItem>
              </ListGroup>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroupItem>
                  <Button
                    className='btn-block'
                    disabled={product.countInStock === 0}
                    style={{
                      background: 'white',
                      color: 'black',
                      border: '1px solid black',
                    }}
                  >
                    Add To Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default ProductScreen
