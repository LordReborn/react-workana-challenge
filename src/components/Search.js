import React, { useState } from "react";
import "../styles/Search.css";
import ToggleColumns from "./ToggleColumns";
import ProductList from "./ProductList";
import FilterForm from "./FilterForm";

const Search = ({ products }) => {
  const [prices, setPrices] = useState({
    priceFrom: "",
    priceTo: "",
  });
  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    currency: true,
    price: true,
  });

  const onPriceInputChange = (name, value) => {
    setPrices({ ...prices, [name]: value });
  };

  const filterProducts = (products) => {
    if (prices.priceTo && prices.priceFrom <= prices.priceTo) {
      return products.filter(
        (product) =>
          (prices.priceFrom <= product.price) &
          (product.price <= prices.priceTo)
      );
    } else {
      return products;
    }
  };

  const onCheckboxClick = (name, checked) => {
    setColumns({ ...columns, [name]: checked });
  };

  let displayedProducts = filterProducts(products);

  return (
    <div className="Products">
      <FilterForm
        priceFrom={prices.priceFrom}
        priceTo={prices.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns onCheckboxClick={onCheckboxClick} columns={columns} />

      <ProductList products={displayedProducts} columns={columns} />
    </div>
  );
};

export default Search;
