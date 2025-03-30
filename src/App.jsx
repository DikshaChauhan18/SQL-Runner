import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { executeQuery } from "./utils/queryParser";
import { saveHistory, getHistory } from "./utils/localStorage";
import { predefinedQueries } from "./utils/predefinedQueries";

const App = () => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    setHistory(getHistory());
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleRunQuery = () => {
    if (!query.trim()) return; // Prevent empty queries
  
    const result = executeQuery(query);
    setTableData(result);
  
    // Add query to history
    const newHistory = [query, ...history].slice(0, 10);
    setHistory(newHistory);
    saveHistory(newHistory);
  };

  const handleQuerySelection = (event) => {
    const selectedQuery = event.target.value;
    setQuery(selectedQuery);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
      <Home
        query={query}
        setQuery={setQuery}
        history={history}
        setHistory={setHistory}
        tableData={tableData}
        handleRunQuery={handleRunQuery}
        handleQuerySelection={handleQuerySelection}
      />
      
    </div>
  );
};

export default App;
