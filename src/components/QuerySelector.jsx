import React from "react";
import { predefinedQueries } from "../utils/predefinedQueries";

const QuerySelector = ({ handleQuerySelection }) => {
  return (
    <div className="query-selector">
      <label>Select a predefined query:</label>
      <select onChange={handleQuerySelection} defaultValue="">
        <option value="" disabled>-- Select Query --</option>
        {predefinedQueries.map((queryObj, index) => (
          <option key={index} value={queryObj.query}>{queryObj.name}</option>
        ))}
      </select>
    </div>
  );
};

export default QuerySelector;
