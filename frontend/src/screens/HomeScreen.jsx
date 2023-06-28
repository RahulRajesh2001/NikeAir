import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Product from '../components/Product/Product';
import { useGetProductsQuery } from '../slices/productApiSlice';
import { Row, Col, Dropdown } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';

const HomeScreen = () => {
  const { keyword } = useParams();

  const [selectedCategory, setSelectedCategory] = useState('');

  const { data: products, isLoading, error } = useGetProductsQuery({
    keyword,
    category: selectedCategory, // Pass selected category as a parameter to the query
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {keyword && (
        <Link to="/" className="btn btn-light mx-2">
          Go Back
        </Link>
      )}
      <div className="home-screen-container">
        <h3>Man Shoes</h3>
        <div className="filter-container">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="categoryDropdown">
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item active={!selectedCategory} onClick={() => handleCategoryChange('')}>
                All Categories
              </Dropdown.Item>
              <Dropdown.Item
                active={selectedCategory === 'Air Max'}
                onClick={() => handleCategoryChange('Air Max')}
              >
               Air Max
              </Dropdown.Item>
              <Dropdown.Item
                active={selectedCategory === 'Nike Air Max 97'}
                onClick={() => handleCategoryChange('Nike Air Max 97')}
              >
                Nike Air Max 97
              </Dropdown.Item>
              <Dropdown.Item
                active={selectedCategory === 'Air Jordan'}
                onClick={() => handleCategoryChange('Air Jordan')}
              >
                Air Jordan
              </Dropdown.Item>
              <Dropdown.Item
                active={selectedCategory === 'Nike 95'}
                onClick={() => handleCategoryChange('Nike 95')}
              >
                Nike 95
              </Dropdown.Item>

              {/* Add more category options as needed */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <div>{error?.data?.message || error.error}</div>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={3} xl={2}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
        <Footer />
      </div>
    </>
  );
};

export default HomeScreen;
