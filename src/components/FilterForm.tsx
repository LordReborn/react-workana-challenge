import React from "react";

interface FilterFormProps {
  priceFrom: number;
  priceTo: number;
  onPriceInputChange: Function;
}
const FilterForm = (Props: FilterFormProps) => {
  let onPriceInputChange = (target: HTMLInputElement) => {
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
        onChange={(e) => onPriceInputChange(e.target)}
      />
      <input
        type="number"
        name="priceTo"
        placeholder="Price to..."
        value={Props.priceTo}
        onChange={(e) => onPriceInputChange(e.target)}
      />
    </div>
  );
};

export default FilterForm;
