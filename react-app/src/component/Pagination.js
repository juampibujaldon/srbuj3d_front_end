import React from 'react';
import './Pagination.css';

const Pagination = () => (
  <div className="pagination">
    <button>{'<'}</button>
    <span>Página 1 de 10</span>
    <button>{'>'}</button>
  </div>
);

export default Pagination;