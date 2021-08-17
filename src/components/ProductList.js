import React from "react";

const ProductList = ({ products, columns }) => {
  return (
    <div id="product-list">
      <header>
        <strong>{`Product List (${products.length} items)`}</strong>
      </header>
      <table>
        <thead>
          <tr>
            {columns.id && <th>ID</th>}
            {columns.name && <th>Name</th>}
            {columns.department && <th>Department</th>}
            {columns.currency && <th>Currency</th>}
            {columns.price && <th>Price</th>}
          </tr>
        </thead>
        <tbody>
          {products.map(function ({ id, name, department, currency, price }) {
            return (
              <tr key={id}>
                {columns.id && <td>{id}</td>}
                {columns.name && <td>{name}</td>}
                {columns.department && <td>{department}</td>}
                {columns.currency && <td>{currency}</td>}
                {columns.price && <td>{price}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
