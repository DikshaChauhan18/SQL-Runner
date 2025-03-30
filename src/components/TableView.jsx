import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const TableView = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5;

  if (!data || data.length === 0) return <p style={{ textAlign: "center" }}>No data to display</p>;

  const sortTable = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const pageCount = Math.ceil(sortedData.length / rowsPerPage);
  const displayedData = sortedData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="table-view">
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>
                {key.toUpperCase()} 
                <button onClick={() => sortTable(key)}>
                  {sortConfig.key === key
                    ? sortConfig.direction === "asc" ? ` 🔼 (Sort by ${key})` : ` 🔽 (Sort by ${key})`
                    : ` ⬆⬇ (Sort by ${key})`}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default TableView;
