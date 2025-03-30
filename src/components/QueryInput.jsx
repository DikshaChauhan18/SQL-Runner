import React from "react";

const QueryInput = ({ query, setQuery, onRunQuery }) => {
  return (
    <div className="query-input">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your SQL query..."
      />
      <button onClick={onRunQuery}>Run Query</button>
    </div>
  );
};

export default QueryInput;
