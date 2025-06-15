// components/
// ├── Products.js
// ├── Products.css
// ├── ProductCard.js
// ├── ProductCard.css
// ├── ProductList.js
// ├── ProductList.css
// ├── Filters.js
// ├── Filters.css
// ├── Pagination.js
// ├── Pagination.css

import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const mockProducts = [
  { id: 1, title: 'Producto 1', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Producto 2', price: 200, image: 'https://via.placeholder.com/150' },
  // ...más productos
];

const ProductList = () => (
  <div className="product-list">
    {mockProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;