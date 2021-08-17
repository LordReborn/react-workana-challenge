import React from "react";

const FilterForm = (Props) => {
  let onPriceInputChange = ({ target }) => {
    Props.onPriceInputChange(target.name, target.value);
  };
  return (
    <div>
      {/* Bind handlers and props */}
      <label htmlFor="name">Filter:</label>
      <input
        type="number"
        name="priceFrom"
        placeholder="Price from..."
        value={Props.priceFrom}
        onChange={(e) => onPriceInputChange(e)}
      />
      <input
        type="number"
        name="priceTo"
        placeholder="Price to..."
        value={Props.priceTo}
        onChange={(e) => onPriceInputChange(e)}
      />
    </div>
  );
};

export default FilterForm;
