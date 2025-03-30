export const saveHistory = (history) => {
    localStorage.setItem("history", JSON.stringify(history));
  };
  
  export const getHistory = () => {
    return JSON.parse(localStorage.getItem("history")) || [];
  };
  