import React, { useState } from "react";
import GoMakkahPage from "../src/componant/GoMakkaPage";
import MonCompte from "../src/componant/MonCompte";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateToAccount = () => {
    setCurrentPage("account");
  };

  const navigateToHome = () => {
    setCurrentPage("home");
  };

  return (
    <div className="App">
      {currentPage === "home" && (
        <GoMakkahPage onNavigateToAccount={navigateToAccount} />
      )}
      {currentPage === "account" && (
        <MonCompte onNavigateToHome={navigateToHome} />
      )}
    </div>
  );
}

export default App;
