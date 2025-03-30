import React from "react";

const QueryHistory = ({ history, setQuery, clearHistory }) => {
  return (
    <div className="query-history">
      <h3>Query History</h3>
      {history.length > 0 ? (
        <>
          <ul>
            {history.map((query, index) => (
              <li key={index} onClick={() => setQuery(query)}>
                {query}
              </li>
            ))}
          </ul>
          <button className="clear-history-btn" onClick={clearHistory}>
            Clear History
          </button>
        </>
      ) : (
        <p>No history available</p>
      )}
    </div>
  );
};

export default QueryHistory;
