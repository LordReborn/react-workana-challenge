import React from "react";
import { Columns } from "../interfaces";

interface SearchProps {
  columns: Columns;
  onCheckboxClick: Function;
}

const ToggleColumns = (Props: SearchProps) => {
  let onCheckboxClick = (target: HTMLInputElement) => {
    let name = target.name;
    let checked = target.checked;
    Props.onCheckboxClick(name, checked);
  };
  return (
    <div className="toggle-columns">
      {Object.keys(Props.columns).map((column, index) => {
        return (
          <div key={index}>
            <label>{column}</label>
            <input
              name={column}
              type="checkbox"
              onChange={(e) => onCheckboxClick(e.target)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ToggleColumns;
