import React, { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Mail,
  Phone,
  Calendar,
  MapPin,
} from "lucide-react";
import "./SignUp.css";

const SignUp = ({ onSignUpSuccess, onBackToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptNewsletter: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation du prénom
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "Le prénom doit contenir au moins 2 caractères";
    }

    // Validation du nom
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Le nom doit contenir au moins 2 caractères";
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    // Validation du téléphone
    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis";
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Format de téléphone invalide";
    }

    // Validation de la date de naissance
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "La date de naissance est requise";
    } else {
      const today = new Date();
      const birthDate = new Date(formData.dateOfBirth);
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        newErrors.dateOfBirth = "Vous devez avoir au moins 18 ans";
      }
    }

    // Validation de l'adresse
    if (!formData.address.trim()) {
      newErrors.address = "L'adresse est requise";
    }

    // Validation de la ville
    if (!formData.city.trim()) {
      newErrors.city = "La ville est requise";
    }

    // Validation du code postal
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Le code postal est requis";
    } else if (!/^\d{5}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Le code postal doit contenir 5 chiffres";
    }

    // Validation du mot de passe
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre";
    }

    // Validation de la confirmation du mot de passe
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "La confirmation du mot de passe est requise";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    // Validation des conditions générales
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Vous devez accepter les conditions générales";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulation d'une création de compte
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Compte créé avec succès
      onSignUpSuccess();
    } catch (error) {
      setErrors({
        general: "Erreur lors de la création du compte. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1 className="signup-logo">GO-MAKKAH</h1>
          <p className="signup-tagline">Créer votre compte</p>
          <p className="signup-subtitle">
            Rejoignez la communauté des pèlerins
          </p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          {/* Informations personnelles */}
          <div className="form-section">
            <h3 className="section-title">Informations personnelles</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  Prénom *
                </label>
                <div className="input-container">
                  <User className="input-icon" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.firstName ? "error" : ""}`}
                    placeholder="Votre prénom"
                    disabled={isLoading}
                  />
                </div>
                {errors.firstName && (
                  <span className="error-message">{errors.firstName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Nom *
                </label>
                <div className="input-container">
                  <User className="input-icon" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.lastName ? "error" : ""}`}
                    placeholder="Votre nom"
                    disabled={isLoading}
                  />
                </div>
                {errors.lastName && (
                  <span className="error-message">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Adresse email *
              </label>
              <div className="input-container">
                <Mail className="input-icon" />
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

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Téléphone *
                </label>
                <div className="input-container">
                  <Phone className="input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    placeholder="06 12 34 56 78"
                    disabled={isLoading}
                  />
                </div>
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="dateOfBirth" className="form-label">
                  Date de naissance *
                </label>
                <div className="input-container">
                  <Calendar className="input-icon" />
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={`form-input ${
                      errors.dateOfBirth ? "error" : ""
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.dateOfBirth && (
                  <span className="error-message">{errors.dateOfBirth}</span>
                )}
              </div>
            </div>
          </div>

          {/* Adresse */}
          <div className="form-section">
            <h3 className="section-title">Adresse</h3>

            <div className="form-group">
              <label htmlFor="address" className="form-label">
                Adresse *
              </label>
              <div className="input-container">
                <MapPin className="input-icon" />
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`form-input ${errors.address ? "error" : ""}`}
                  placeholder="123 rue de la Paix"
                  disabled={isLoading}
                />
              </div>
              {errors.address && (
                <span className="error-message">{errors.address}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  Ville *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`form-input ${errors.city ? "error" : ""}`}
                  placeholder="Paris"
                  disabled={isLoading}
                />
                {errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="postalCode" className="form-label">
                  Code postal *
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className={`form-input ${errors.postalCode ? "error" : ""}`}
                  placeholder="75001"
                  maxLength="5"
                  disabled={isLoading}
                />
                {errors.postalCode && (
                  <span className="error-message">{errors.postalCode}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="country" className="form-label">
                Pays
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="form-input"
                disabled={isLoading}
              >
                <option value="France">France</option>
                <option value="Algérie">Algérie</option>
                <option value="Maroc">Maroc</option>
                <option value="Tunisie">Tunisie</option>
                <option value="Belgique">Belgique</option>
                <option value="Suisse">Suisse</option>
              </select>
            </div>
          </div>

          {/* Sécurité */}
          <div className="form-section">
            <h3 className="section-title">Sécurité</h3>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Mot de passe *
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
                  placeholder="Minimum 8 caractères"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("password")}
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

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmer le mot de passe *
              </label>
              <div className="input-container">
                <Lock className="input-icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`form-input ${
                    errors.confirmPassword ? "error" : ""
                  }`}
                  placeholder="Confirmez votre mot de passe"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="password-toggle"
                  disabled={isLoading}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          </div>

          {/* Conditions */}
          <div className="form-section">
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className={`checkbox ${errors.acceptTerms ? "error" : ""}`}
                  disabled={isLoading}
                />
                <span className="checkbox-text">
                  J'accepte les{" "}
                  <a href="#" className="link">
                    conditions générales
                  </a>{" "}
                  et la{" "}
                  <a href="#" className="link">
                    politique de confidentialité
                  </a>{" "}
                  *
                </span>
              </label>
              {errors.acceptTerms && (
                <span className="error-message">{errors.acceptTerms}</span>
              )}
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="acceptNewsletter"
                  checked={formData.acceptNewsletter}
                  onChange={handleInputChange}
                  className="checkbox"
                  disabled={isLoading}
                />
                <span className="checkbox-text">
                  Je souhaite recevoir les actualités et offres spéciales de
                  GO-MAKKAH
                </span>
              </label>
            </div>
          </div>

          {errors.general && (
            <div className="error-message general-error">{errors.general}</div>
          )}

          <button type="submit" className="signup-button" disabled={isLoading}>
            {isLoading ? "Création en cours..." : "Créer mon compte"}
          </button>
        </form>

        <div className="signup-footer">
          <p>Vous avez déjà un compte ?</p>
          <button
            onClick={onBackToLogin}
            className="login-link"
            disabled={isLoading}
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
