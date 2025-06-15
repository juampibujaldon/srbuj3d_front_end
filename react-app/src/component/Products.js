import React from 'react';
import Filters from './Filters';
import ProductList from './ProductList';
import Pagination from './Pagination';
import './Products.css';

const Products = () => (
  <div className="products-page">
    <Filters />
    <ProductList />
    <Pagination />
  </div>
);

export default Products;