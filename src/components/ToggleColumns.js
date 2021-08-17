import React from "react";

const ToggleColumns = (Props) => {
  let onCheckboxClick = (e) => {
    let name = e.target.name;
    let checked = e.target.checked;
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
              onChange={(e) => onCheckboxClick(e)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ToggleColumns;
