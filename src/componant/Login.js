import React, { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import "./Login.css";

const Login = ({ onLoginSuccess, onNavigateToSignUp }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Récupérer les utilisateurs depuis localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Chercher l'utilisateur
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (!user) {
        throw new Error("Email ou mot de passe incorrect");
      }

      // Stocker l'utilisateur connecté dans localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));

      onLoginSuccess();
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-logo">GO-MAKKAH</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Adresse email
            </label>
            <div className="input-container">
              <User className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? "error" : ""}`}
                placeholder="votre@email.com"
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Mot de passe */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input ${errors.password ? "error" : ""}`}
                placeholder="Votre mot de passe"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          {errors.general && (
            <div className="error-message general-error">{errors.general}</div>
          )}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </button>

          <div className="login-links">
            <a href="#" className="forgot-password">
              Mot de passe oublié ?
            </a>
          </div>
        </form>

        <div className="login-footer">
          <p>Vous n'avez pas de compte ?</p>
          <button
            onClick={onNavigateToSignUp}
            className="register-link"
            disabled={isLoading}
          >
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
