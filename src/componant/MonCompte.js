// File: MonComptePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  User,
  Users,
  ChevronDown,
  Check,
  Edit,
  Calendar,
  CreditCard,
  FileText,
  Mail,
  Settings,
  LogOut,
  Download,
  Eye,
} from "lucide-react";
import "../componant/MonCompte.css";

const MonComptePage = ({ onNavigateToHome, onNavigateToAccount, onLogout }) => {
  const [activeTab, setActiveTab] = useState("profil");
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    nom: "Ghezal",
    prenom: "Mohamed",
    email: "mohamed.ghezal@gmail.com",
    telephone: "+33 7 15 35 76 98",
    adresse: "25 Rue de la République",
    ville: "Paris",
    codePostal: "75011",
    dateNaissance: "15/02/1999",
    numeroPasseport: "18AA12345",
  });

  const reservations = [
    {
      id: "HJ2025-001",
      type: "Hajj Sérénité",
      statut: "Confirmé",
      dateDepart: "15/06/2025",
      dateRetour: "30/06/2025",
      prix: "4500€",
    },
    {
      id: "OM2024-154",
      type: "Omra Confort",
      statut: "Terminé",
      dateDepart: "12/01/2024",
      dateRetour: "22/01/2024",
      prix: "1200€",
    },
  ];

  const documents = [
    {
      nom: "Visa Arabie Saoudite",
      type: "PDF",
      taille: "2.3 MB",
      date: "12/02/2025",
    },
    {
      nom: "Billet d'avion Hajj 2025",
      type: "PDF",
      taille: "1.1 MB",
      date: "10/02/2025",
    },
  ];

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Ici tu peux appeler une API pour sauvegarder userData si nécessaire
  };

  const renderProfilTab = () => (
    <div className="tab-content">
      <div className="tab-header">
        <h2>Mon Profil</h2>
        <button
          onClick={isEditing ? handleSave : handleEditToggle}
          className={`btn ${isEditing ? "btn-save" : "btn-edit"}`}
        >
          <Edit size={16} />
          <span>{isEditing ? "Sauvegarder" : "Modifier"}</span>
        </button>
      </div>

      <div className="card-light">
        <h3>Informations personnelles</h3>
        <div className="form-grid">
          <div className="form-field">
            <label>Nom</label>
            <input
              type="text"
              value={userData.nom}
              disabled={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, nom: e.target.value })
              }
              className={`input ${
                isEditing ? "input-active" : "input-disabled"
              }`}
            />
          </div>

          <div className="form-field">
            <label>Prénom</label>
            <input
              type="text"
              value={userData.prenom}
              disabled={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, prenom: e.target.value })
              }
              className={`input ${
                isEditing ? "input-active" : "input-disabled"
              }`}
            />
          </div>

          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              value={userData.email}
              disabled={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className={`input ${
                isEditing ? "input-active" : "input-disabled"
              }`}
            />
          </div>

          <div className="form-field">
            <label>Téléphone</label>
            <input
              type="tel"
              value={userData.telephone}
              disabled={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, telephone: e.target.value })
              }
              className={`input ${
                isEditing ? "input-active" : "input-disabled"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderReservationsTab = () => (
    <div className="tab-content">
      <div className="section-header">
        <h2>Mes Réservations</h2>
      </div>

      <div className="stack">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="reservation-card">
            <div className="reservation-top">
              <div>
                <h3 className="reservation-title">{reservation.type}</h3>
                <span className="muted">#{reservation.id}</span>
              </div>
              <div
                className={`status-badge ${
                  reservation.statut === "Confirmé" ? "status-confirm" : ""
                }`}
              >
                {reservation.statut}
              </div>
            </div>

            <div className="reservation-meta">
              <div className="meta-item">
                <Calendar size={16} />{" "}
                <span>Départ: {reservation.dateDepart}</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />{" "}
                <span>Retour: {reservation.dateRetour}</span>
              </div>
              <div className="meta-item">
                <CreditCard size={16} /> <span>Prix: {reservation.prix}</span>
              </div>
            </div>

            <div className="card-actions">
              <button className="btn btn-primary">
                <Eye size={16} /> Voir détails
              </button>
              <button className="btn btn-ghost">
                <Download size={16} /> Télécharger
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocumentsTab = () => (
    <div className="tab-content">
      <div className="section-header">
        <h2>Mes Documents</h2>
      </div>

      <div className="stack">
        {documents.map((doc, index) => (
          <div key={index} className="document-card">
            <div className="doc-icon">
              <FileText size={24} color="white" />
            </div>
            <div className="doc-meta">
              <h4 className="doc-title">{doc.nom}</h4>
              <div className="muted small">
                {doc.type} • {doc.taille} • {doc.date}
              </div>
            </div>
            <div className="doc-actions">
              <button className="icon-btn">
                <Eye size={16} />
              </button>
              <button className="icon-btn">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSupportTab = () => (
    <div className="tab-content">
      <div className="section-header">
        <h2>Support & Assistance</h2>
      </div>

      <div className="support-grid">
        <div className="support-card2">
          <div className="support-icon">
            <Phone size={24} color="white" />
          </div>
          <h3>Support téléphonique</h3>
          <p className="muted">Disponible 24h/24, 7j/7</p>
          <div className="phone-big">01 49 87 70 21</div>
          <p className="muted small">Français • Arabe</p>
        </div>

        <div className="support-card2">
          <div className="support-icon">
            <Mail size={24} color="white" />
          </div>
          <h3>Support par email</h3>
          <p className="muted">Réponse sous 24h</p>
          <button className="btn btn-primary">Envoyer un message</button>
        </div>

        <div className="support-card2">
          <div className="support-icon">
            <Users size={24} color="white" />
          </div>
          <h3>Groupe WhatsApp</h3>
          <p className="muted">Assistance et informations</p>
          <button className="btn btn-success">Rejoindre le groupe</button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "profil":
        return renderProfilTab();
      case "reservations":
        return renderReservationsTab();
      case "documents":
        return renderDocumentsTab();
      case "support":
        return renderSupportTab();
      default:
        return renderProfilTab();
    }
  };

  return (
    <div className="account-page">
      {/* Header */}
      <header className="account-header">
        <div className="header-inner">
          <div onClick={onNavigateToHome} style={{ cursor: "pointer" }}>
            <h1 className="brand">GO-MAKKAH</h1>
            <p className="tagline">Quand foi et prestige se rencontrent</p>
          </div>
          <div className="contact-block">
            <div className="contact-phone">01 49 87 70 21</div>
            <div className="contact-address">
              32 avenue Pierre Semard, 94200
            </div>
          </div>
        </div>
      </header>

      {/* Navigation (laisse telle qu'elle, on ne modifie pas la logique) */}
      <nav className="navigation">
        <div className="container nav-container">
          <div className="nav-links">
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome && onNavigateToHome();
              }}
            >
              Accueil
            </a>
            <a href="#" className="nav-link">
              Omra
            </a>
            <a href="#" className="nav-link">
              Omra combinée
            </a>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome && onNavigateToHome();
              }}
            >
              Hajj
            </a>
            <a href="#" className="nav-link">
              Voyages Monde
            </a>
            <a href="#" className="nav-link">
              Nos services
            </a>
          </div>

          <div className="account-links">
            <div
              className="account-link active"
              onClick={onNavigateToAccount}
              style={{ cursor: "pointer" }}
            >
              <a href="#" className="nav-link active">
                Mon compte
              </a>
            </div>

            <div className="account-link">
              <Users className="icon-small" />
              <span>Espace client</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-wrap">
        <div className="account-layout">
          {/* Sidebar */}
          <aside className="sidebar2">
            <div className="sidebar2-top">
              <div className="avatar">
                <User size={32} color="white" />
              </div>
              <div>
                <h3 className="member-name">Mohamed Ghezal</h3>
                <p className="muted">Membre depuis 2023</p>
              </div>
            </div>

            <nav className="sidebar-nav">
              {[
                { key: "profil", icon: User, label: "Mon Profil" },
                {
                  key: "reservations",
                  icon: Calendar,
                  label: "Mes Réservations",
                },
                { key: "documents", icon: FileText, label: "Mes Documents" },
                { key: "support", icon: Phone, label: "Support" },
              ].map(({ key, icon: Icon, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`sidebar-btn ${activeTab === key ? "active" : ""}`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
              <button onClick={onLogout} className="sidebar-btn logout-btn">
                <LogOut size={20} />
                <span>Déconnexion</span>
              </button>
            </nav>
          </aside>

          {/* Main Card */}
          <main className="main-card">{renderTabContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default MonComptePage;
