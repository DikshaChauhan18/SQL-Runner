import React from "react";
import QueryInput from "../components/QueryInput";
import QueryHistory from "../components/QueryHistory";
import TableView from "../components/TableView";
import QuerySelector from "../components/QuerySelector";

const Home = ({ query, setQuery, history, setHistory, tableData, handleRunQuery, handleQuerySelection }) => {
  const clearHistory = () => {
    console.log("hi")
    setHistory([]);
    localStorage.removeItem("history");
  };

  return (
    <div className="home-container">
      <h1>Atlan SQL Runner</h1>
      
      {/* Query Selector Dropdown */}
      <QuerySelector handleQuerySelection={handleQuerySelection} />
      
      <QueryInput query={query} setQuery={setQuery} onRunQuery={handleRunQuery} />
      
      <TableView data={tableData} />

      <QueryHistory history={history} setQuery={setQuery} clearHistory={clearHistory} />
    </div>
  );
};

export default Home;