import React, { useState } from "react";
import Login from "../src/componant/Login";
import SignUp from "../src/componant/SignUp";
import GoMakkahPage from "../src/componant/GoMakkaPage";
import MonCompte from "../src/componant/MonCompte";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage("home");
  };

  const handleSignUpSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage("home");
  };

  const navigateToSignUp = () => {
    setCurrentPage("signup");
  };

  const navigateToLogin = () => {
    setCurrentPage("login");
  };

  const navigateToAccount = () => {
    if (isAuthenticated) {
      setCurrentPage("account");
    }
  };

  const navigateToHome = () => {
    if (isAuthenticated) {
      setCurrentPage("home");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("login");
  };

  return (
    <div className="App">
      {/* Page Login */}
      {currentPage === "login" && !isAuthenticated && (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onNavigateToSignUp={navigateToSignUp}
        />
      )}

      {/* Page SignUp */}
      {currentPage === "signup" && !isAuthenticated && (
        <SignUp
          onSignUpSuccess={handleSignUpSuccess}
          onBackToLogin={navigateToLogin}
        />
      )}

      {/* Page Home */}
      {currentPage === "home" && isAuthenticated && (
        <GoMakkahPage onNavigateToAccount={navigateToAccount} />
      )}

      {/* Page Mon Compte */}
      {currentPage === "account" && isAuthenticated && (
        <MonCompte onNavigateToHome={navigateToHome} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
