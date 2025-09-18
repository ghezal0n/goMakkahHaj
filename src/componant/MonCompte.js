import React, { useState } from "react";
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

const MonComptePage = ({ onNavigateToHome }) => {
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
  };

  const renderProfilTab = () => (
    <div style={{ padding: "32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
          paddingBottom: "16px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#2b6cb3",
            margin: 0,
          }}
        >
          Mon Profil
        </h2>
        <button
          onClick={isEditing ? handleSave : handleEditToggle}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: isEditing ? "#22c55e" : "#be9e49",
            color: "white",
          }}
        >
          <Edit size={16} />
          {isEditing ? "Sauvegarder" : "Modifier"}
        </button>
      </div>

      <div
        style={{ background: "#f9fafb", padding: "24px", borderRadius: "12px" }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#374151",
            marginBottom: "20px",
          }}
        >
          Informations personnelles
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div>
            <label
              style={{
                fontWeight: "500",
                color: "#374151",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Nom
            </label>
            <input
              type="text"
              value={userData.nom}
              disabled={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, nom: e.target.value })
              }
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                width: "100%",
                background: isEditing ? "white" : "#f9fafb",
                color: isEditing ? "#000" : "#6b7280",
              }}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "500",
                color: "#374151",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Prénom
            </label>
            <input
              type="text"
              value={userData.prenom}
              disabled={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, prenom: e.target.value })
              }
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                width: "100%",
                background: isEditing ? "white" : "#f9fafb",
                color: isEditing ? "#000" : "#6b7280",
              }}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "500",
                color: "#374151",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={userData.email}
              disabled={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                width: "100%",
                background: isEditing ? "white" : "#f9fafb",
                color: isEditing ? "#000" : "#6b7280",
              }}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "500",
                color: "#374151",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Téléphone
            </label>
            <input
              type="tel"
              value={userData.telephone}
              disabled={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, telephone: e.target.value })
              }
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                width: "100%",
                background: isEditing ? "white" : "#f9fafb",
                color: isEditing ? "#000" : "#6b7280",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderReservationsTab = () => (
    <div style={{ padding: "32px" }}>
      <div
        style={{
          marginBottom: "32px",
          paddingBottom: "16px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#2b6cb3",
            margin: 0,
          }}
        >
          Mes Réservations
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "24px",
              transition: "box-shadow 0.3s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#2b6cb3",
                    margin: 0,
                  }}
                >
                  {reservation.type}
                </h3>
                <span style={{ fontSize: "14px", color: "#6b7280" }}>
                  #{reservation.id}
                </span>
              </div>
              <div
                style={{
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  background:
                    reservation.statut === "Confirmé" ? "#d1fae5" : "#f3f4f6",
                  color:
                    reservation.statut === "Confirmé" ? "#065f46" : "#374151",
                }}
              >
                {reservation.statut}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "24px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                <Calendar size={16} />
                <span>Départ: {reservation.dateDepart}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                <Calendar size={16} />
                <span>Retour: {reservation.dateRetour}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                <CreditCard size={16} />
                <span>Prix: {reservation.prix}</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  background: "#2b6cb3",
                  color: "white",
                }}
              >
                <Eye size={16} />
                Voir détails
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  background: "#f3f4f6",
                  color: "#374151",
                }}
              >
                <Download size={16} />
                Télécharger
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocumentsTab = () => (
    <div style={{ padding: "32px" }}>
      <div
        style={{
          marginBottom: "32px",
          paddingBottom: "16px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#2b6cb3",
            margin: 0,
          }}
        >
          Mes Documents
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {documents.map((doc, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "#be9e49",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FileText size={24} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#374151",
                  margin: "0 0 4px 0",
                }}
              >
                {doc.nom}
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                <span>{doc.type}</span>
                <span>•</span>
                <span>{doc.taille}</span>
                <span>•</span>
                <span>{doc.date}</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                style={{
                  width: "36px",
                  height: "36px",
                  border: "none",
                  background: "#f3f4f6",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Eye size={16} />
              </button>
              <button
                style={{
                  width: "36px",
                  height: "36px",
                  border: "none",
                  background: "#f3f4f6",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSupportTab = () => (
    <div style={{ padding: "32px" }}>
      <div
        style={{
          marginBottom: "32px",
          paddingBottom: "16px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#2b6cb3",
            margin: 0,
          }}
        >
          Support & Assistance
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "24px",
            background: "#f9fafb",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#be9e49",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <Phone size={24} color="white" />
          </div>
          <h3 style={{ margin: "0 0 8px 0" }}>Support téléphonique</h3>
          <p style={{ margin: "0 0 16px 0" }}>Disponible 24h/24, 7j/7</p>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#2b6cb3",
              marginBottom: "8px",
            }}
          >
            01 49 87 70 21
          </div>
          <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
            Français • Arabe
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "24px",
            background: "#f9fafb",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#be9e49",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <Mail size={24} color="white" />
          </div>
          <h3 style={{ margin: "0 0 8px 0" }}>Support par email</h3>
          <p style={{ margin: "0 0 16px 0" }}>Réponse sous 24h</p>
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              background: "#2b6cb3",
              color: "white",
              cursor: "pointer",
            }}
          >
            Envoyer un message
          </button>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "24px",
            background: "#f9fafb",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#be9e49",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <Users size={24} color="white" />
          </div>
          <h3 style={{ margin: "0 0 8px 0" }}>Groupe WhatsApp</h3>
          <p style={{ margin: "0 0 16px 0" }}>Assistance et informations</p>
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              background: "#22c55e",
              color: "white",
              cursor: "pointer",
            }}
          >
            Rejoindre le groupe
          </button>
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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#991b1b",
          color: "white",
          padding: "16px 0",
        }}
      >
        <div
          style={{
            padding: "0 50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div onClick={onNavigateToHome} style={{ cursor: "pointer" }}>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                margin: "0 0 4px 0",
              }}
            >
              GO-MAKKAH
            </h1>
            <p style={{ fontSize: "14px", margin: 0 }}>
              Quand foi et prestige se rencontrent
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "4px",
              }}
            >
              01 49 87 70 21
            </div>
            <div style={{ fontSize: "14px" }}>
              32 avenue Pierre Semard, 94200
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "0px 50px",
        }}
      >
        <div
          style={{
            padding: "16px 50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome();
              }}
              style={{ color: "#4b5563", textDecoration: "none" }}
            >
              Accueil
            </a>
            <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>
              Omra
            </a>
            <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>
              Omra combinée
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHome();
              }}
              style={{ color: "#4b5563", textDecoration: "none" }}
            >
              Hajj
            </a>
            <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>
              Voyages
            </a>
            <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>
              Monde
            </a>
            <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>
              Nos services
            </a>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#991b1b",
                fontWeight: "600",
              }}
            >
              <User size={16} />
              <span>Mon compte</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ padding: "48px 0" }}>
        <div style={{ padding: "0 50px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: "48px",
            }}
          >
            {/* Sidebar */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "24px",
                height: "fit-content",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#be9e49",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <User size={32} color="white" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "18px", color: "#2b6cb3" }}>
                    Mohamed Ghezal
                  </h3>
                  <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
                    Membre depuis 2023
                  </p>
                </div>
              </div>

              <nav
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
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
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      border: "none",
                      background: activeTab === key ? "#2b6cb3" : "transparent",
                      color: activeTab === key ? "white" : "#374151",
                      textAlign: "left",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500",
                      width: "100%",
                    }}
                  >
                    <Icon size={20} />
                    {label}
                  </button>
                ))}

                {/* <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    border: "none",
                    background: "transparent",
                    color: "#ef4444",
                    textAlign: "left",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "16px",
                    borderTop: "1px solid #e5e7eb",
                    paddingTop: "20px",
                    width: "100%",
                  }}
                >
                  <LogOut size={20} />
                  Déconnexion
                </button> */}
              </nav>
            </div>

            {/* Main Content */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonComptePage;
