import React, { useState } from "react";
import { Phone, User, Users, ChevronDown, Check } from "lucide-react";
import "./App.css";
import image1 from "../src/assets/images/image1.png";
import image2 from "../src/assets/images/image2.png";
import image3 from "../src/assets/images/image3.png";
import image4 from "../src/assets/images/image4.png";
import image5 from "../src/assets/images/image5.png";
import franceImg from "../src/assets/images/France.png";
import algeriaImg from "../src/assets/images/Algeria.png";
import moroccoImg from "../src/assets/images/Morocco.png";
import saudiImg from "../src/assets/images/SaudiArabia.png";
import tunisiaImg from "../src/assets/images/Tunisia.png";

const GoMakkahPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="go-makkah-page">
      {/* Header */}
      <div className="header-fixed">
        <header className="header">
          <div className="container header-container">
            <div>
              <h1 className="logo">GO-MAKKAH</h1>
              <p className="tagline">Quand foi et prestige se rencontrent</p>
            </div>
            <div className="contact-info">
              <div className="phone-number">01 49 87 70 21</div>
              <div className="address">32 avenue Pierre Semard, 94200</div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="navigation">
          <div className="container nav-container">
            <div className="nav-links">
              <a href="#" className="nav-link">
                Accueil
              </a>
              <a href="#" className="nav-link">
                Omra
              </a>
              <a href="#" className="nav-link">
                Omra combinée
              </a>
              <a href="#" className="nav-link active">
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
              <div className="account-link">
                <User className="icon-small" />
                <span>Mon compte</span>
              </div>
              <div className="account-link">
                <Users className="icon-small" />
                <span>Espace client</span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            {/* Hero content can be added here */}
          </div>
        </div>
      </div>

      <div className="container main-container">
        <div className="content-grid">
          {/* Main Content */}
          <div className="main-content">
            {/* Le contexte du Hajj */}
            <section className="section">
              <h2 className="section-title blue">
                Le contexte du Hajj aujourd'hui
              </h2>
              <div className="text-content">
                <p>
                  Depuis plusieurs années, l'Arabie Saoudite a mis en place un
                  système centralisé de gestion du Hajj appelé{" "}
                  <strong>Nusuk</strong>. Toutes les inscriptions et tous les
                  packages Hajj passent par ce portail officiel. Les agences
                  saoudiennes agréées y proposent leurs offres, souvent en
                  partenariat avec des agences françaises de confiance comme{" "}
                  <strong>GO-MAKKAH</strong>.
                </p>
                <p>
                  Notre rôle est de vous aider à naviguer dans{" "}
                  <strong>ce système complexe</strong>, à choisir le pack qui
                  correspond le mieux à vos attentes, et à{" "}
                  <strong>sécuriser</strong> votre inscription dans les{" "}
                  <strong>meilleures conditions</strong>.
                </p>
              </div>
            </section>

            {/* Problèmes rencontrées */}
            <section className="section">
              <h2 className="section-title blue">
                Problèmes rencontrées et solutions
              </h2>

              <div className="problem-section">
                <h3 className="problem-title">
                  Volume important de comptes... mais conversion imparfaite
                </h3>
                <div className="text-content">
                  <p>
                    Nous avons entendu que près de 100 000 comptes ont été créés
                    en France sur la plateforme Nusuk durant la période
                    d'ouverture des inscriptions. Ce chiffre reste à être
                    confirmé officiellement, mais il illustre une forte
                    mobilisation initiale.
                  </p>
                  <p>
                    Toutefois, en 2023, seuls 7 000 à 8 000 pèlerins français
                    ont effectivement pu accomplir le Hajj — selon les
                    statistiques recueillies ([turn0search]).
                  </p>
                  <p>
                    En conséquence : un grand nombre d'inscriptions restent non
                    finalisées, qu'il s'agisse d'erreurs techniques, de
                    validation stoppée, ou de paiement non abouti.
                  </p>
                </div>
              </div>

              <div className="problem-section">
                <h3 className="problem-title">
                  Difficultés techniques rencontrées
                </h3>
                <div className="text-content">
                  <p>
                    Nos clients nous ont rapporté plusieurs cas problématiques,
                    notamment :
                  </p>
                  <ul className="bullet-list">
                    <li>
                      Connexion interrompue au moment du paiement ou de la
                      validation du forfait.
                    </li>
                    <li>
                      Forfait visible comme disponible, qui devient soudainement
                      inaccessible au final.
                    </li>
                    <li>
                      Dépôt dans l'e-wallet effectué, sans validation immédiate
                      ni retour clair, générant une incertitude dommageable.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="problem-section">
                <h3 className="problem-title">
                  Stress généralisé et absence de soutien francophone
                </h3>
                <div className="text-content">
                  <p>
                    Certains candidats ont dû recommencer tout le processus à
                    plusieurs reprises.
                  </p>
                  <p>
                    D'autres ont vu leur réservation validée... puis annulée
                    sans explication.
                  </p>
                  <p>
                    L'absence ou la lenteur d'un support en français a fait
                    perdre un temps précieux à plusieurs d'entre eux.
                  </p>
                  <p>
                    Ces observations traduisent une réalité : le passage de
                    l'inscription à l'accès effectif au Hajj reste trop
                    aléatoire, même pour des candidats préparés. Cela justifie
                    pleinement la valeur ajoutée de votre agence — une présence
                    rassurante, opérationnelle et parfaitement alignée sur les
                    attentes des pèlerins français.
                  </p>
                </div>
              </div>
            </section>

            {/* Comment ça se passe */}
            <section className="section">
              <h2 className="section-title blue">
                Comment ça se passe concrètement ?
              </h2>
              <p className="intro-text">
                La procédure se déroule en plusieurs étapes :
              </p>

              <div className="steps-grid">
                {[
                  {
                    number: "1",
                    title: "Choisir l'agence et le type de pack",
                    description: "(VIP, confort ou économique).",
                  },
                  {
                    number: "2",
                    title: "Créer un compte Nusuk",
                    description:
                      "soit vous-même avec notre assistance gratuite, soit nous le faisons pour vous avec notre pack Sérénité)",
                  },
                  {
                    number: "3",
                    title: "Découvrir les offres",
                    description:
                      "officielles annoncées par les autorités saoudiennes.",
                  },
                  {
                    number: "4",
                    title: "Sélectionner votre pack Hajj",
                    description:
                      "(nous vous aidons à comparer, décortiquer et vérifier chaque détail).",
                  },
                  {
                    number: "5",
                    title: "Alimenter votre portefeuille client",
                    description:
                      "(le paiement est bloqué sur Nusuk jusqu'à validation).",
                  },
                  {
                    number: "6",
                    title: "Confirmer l'inscription dès l'ouverture",
                    description:
                      "une étape cruciale où la rapidité fait toute la différence.",
                  },
                ].map((step, index) => (
                  <div key={index} className="step-card">
                    <div className="step-number">{step.number}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          {/* Formules Hajj */}

          {/* Sidebar */}
          <div className="sidebar">
            {/* Support téléphonique */}
            <div className="support-card">
              <div className="support-header">
                <Phone className="support-icon" />
                <h3 className="support-title">Support téléphonique</h3>
              </div>
              <p className="support-text">
                GO-MAKKAH vous offre hotline support NUSUK
              </p>
              <div className="support-phone">01 49 87 70 21</div>
              <p className="support-info">Ligne ouvert 24h/2h</p>
              <p className="support-info">Avec la langue Arabe et Français</p>
            </div>

            {/* FAQ Sidebar */}
            <div className="sidebar-faq">
              <h3 className="sidebar-title">
                Compte Nusuk bloqué à la création ?
              </h3>

              <div className="sidebar-section">
                <h4 className="sidebar-subtitle">Solutions possibles</h4>
                <ol className="solution-list">
                  <li>
                    Vérifiez que vos données correspondent exactement au
                    passeport (majuscules, accents).
                  </li>
                  <li>
                    Utilisez un numéro de téléphone valide (idéalement un
                    portable international).
                  </li>
                </ol>
                <p className="read-more">Afficher la suite ›</p>
              </div>

              <div className="sidebar-section">
                <h4 className="sidebar-subtitle">
                  Carte bancaire refusée par Nusuk ?
                </h4>
              </div>

              <div className="sidebar-section">
                <h4 className="sidebar-subtitle">
                  Forfait confirmé puis annulé sur Nusuk?
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content2">
          <section className="section">
            <h2 className="section-title blue">
              Tout savoir sur nos formules Hajj Go-Makkah
            </h2>

            {/* Formule VIP */}
            <div className="formula-item">
              <h3 className="formula-title">Notre formule Hajj VIP</h3>
              <p className="formula-description">
                Profitez d'un <strong>hébergement 5★ à Abraj Al Beit</strong> ou
                Jabal Omar, avec <strong>transferts en TGV</strong> pour un
                confort optimal. Votre séjour inclut aussi un campement à Minâ (
                <strong>Al Kabch</strong>), pour vivre pleinement les rites du
                Hajj dans les meilleures conditions.
              </p>
            </div>

            {/* Formule CONFORT */}
            <div className="formula-item">
              <h3 className="formula-title">Notre formule Hajj CONFORT</h3>
              <p className="formula-description">
                Séjournez dans des <strong>hôtels 5★ à Jabal Omar</strong>,
                profitez de <strong>transferts en TGV</strong> rapides et
                confortables, et vivez les rites du Hajj avec un campement à
                Minâ, dans la zone d'<strong>Al Kabch ou Mouayssem</strong>,
                pour une expérience spirituelle inoubliable.
              </p>
            </div>

            {/* Formule ECONOMIQUE */}
            <div className="formula-item">
              <h3 className="formula-title">Notre formule Hajj ECONOMIQUE</h3>
              <p className="formula-description">
                Séjour en{" "}
                <strong>
                  hôtels 4 ou 5★ situés à seulement 1-2 km du Haram
                </strong>
                , avec{" "}
                <strong>
                  transferts en TGV ou en bus pour plus de confort
                </strong>
                . Le programme inclut également un campement à Minâ, dans la
                zone d'<strong>Al Mouayssem</strong>, afin de vivre pleinement
                les rites du Hajj.
              </p>
            </div>

            <h2 className="section-title blue">
              L'accompagnement GO Makkah : bien plus qu'une simple inscription
            </h2>
            <p className="intro-text">
              Chez GO Makkah, nous croyons que le Hajj doit se préparer avec
              autant de rigueur spirituelle que logistique.
            </p>
            <p className="intro-text">
              C'est pourquoi nous mettons à votre disposition, gratuitement :
            </p>

            <div className="services-grid">
              {[
                {
                  icon: "📚",
                  title: "Des formations pratiques",
                  description: "(en ligne et parfois en présentiel)",
                },
                {
                  icon: "👥",
                  title: "Des webinars et réunions",
                  description: "pour suivre l'actualité du Hajj",
                },
                {
                  icon: "💬",
                  title: "Un groupe Whatsaap",
                  description:
                    "pour rester en contact permanent avec notre équipe",
                },
                {
                  icon: "📞",
                  title: "Réponses personnalisées",
                  description: "à toutes vos questions par télé / whatsaap",
                },
                {
                  icon: "👨‍⚕️",
                  title: "Accompagnement religieux et médical",
                  description:
                    "séminaires avec imams, médecins et experts du Hajj",
                },
              ].map((service, index) => (
                <div key={index} className="service-item">
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>

            <p className="intro-text">
              Cet accompagnement est inclus pour tous nos inscrits, quelle que
              soit l'option choisie.
            </p>
          </section>

          {/* Formules adaptées */}
          <section className="section">
            <h2 className="section-title blue">
              Deux formules adaptées à vos besoins
            </h2>

            <div className="packages-grid">
              {/* Pack Gratuit */}
              <div className="package-card free">
                <div className="package-header">
                  <div className="package-badge">Pack Gratuit</div>
                  <h3 className="package-title">Hajj Assistance GO-Makkah</h3>
                </div>
                <div className="package-stats">
                  <span className="stats-text">
                    7% de nos client ont le choisis
                  </span>
                </div>
                <div className="package-content">
                  <p className="package-feature">
                    Nous vous inscrivons sur notre groupe whatsup d'information
                    & assistance
                  </p>
                  <p className="package-feature">
                    Nous vous envoyons nos formules Hajj 2026
                  </p>
                  <p className="package-feature">
                    Vous créez par vous-même votre compte Nusuk
                  </p>
                  <p className="package-feature">
                    Vous réservez une de nos formules
                  </p>
                  <p className="package-feature">
                    Vous nous envoyez votre passeport et la formule confirmée
                  </p>
                  <button className="package-button free-btn">
                    Inscrivez-vous vite !
                  </button>
                </div>
              </div>

              {/* Pack 250 EUR */}
              <div className="package-card premium">
                <div className="package-header">
                  <div className="package-badge">250 EUR</div>
                  <h3 className="package-title">Hajj Sérénité GO-Makkah</h3>
                </div>
                <div className="package-stats">
                  <span className="stats-text">
                    80% de nos client ont le choisis
                  </span>
                </div>
                <div className="package-content">
                  <p className="package-feature">
                    Nous vous inscrivons sur notre groupe whatsup d'information
                    & assistance
                  </p>
                  <p className="package-feature">
                    Nous créons et gérons pour vous votre compte NUSUK
                  </p>
                  <p className="package-feature">
                    Nous payons votre hajj pour vous si vous le demander. Vos
                    payez votre hajj chez nous
                  </p>
                  <p className="package-feature">
                    Nous vous envoyons nos formules Hajj 2026
                  </p>
                  <p className="package-feature">
                    Nous gérons la réservation de votre hajj jusqu'au bout
                  </p>
                  <p className="package-feature">
                    Et Vous partez au hajj avec nos équipes accompagnateurs très
                    expérimentés
                  </p>
                  <button className="package-button premium-btn">
                    Inscrivez-vous vite !
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi choisir GO Makkah */}
          <section className="section">
            <h2 className="section-title blue">Pourquoi choisir GO Makkah ?</h2>

            <div className="images-row">
              {[image1, image2, image3, image4, image5].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`image${index + 1}`}
                  className="image-item"
                />
              ))}
            </div>
          </section>

          {/* Hajj Sérénité Details */}
          <section className="section">
            <h2 className="section-title">
              Pour un hajj encore plus en sérénité !
            </h2>
            <h3 className="subtitle">
              Nous vous recommandons notre option{" "}
              <span className="highlight">Hajj sérénité</span>
            </h3>

            <div className="serenity-content">
              <div className="feature-item">
                <Check className="feature-icon" />
                <div>
                  <p className="feature-text">
                    Notre option hajj sérénité : pour ceux qui veulent :
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <Check className="feature-icon" />
                <p className="feature-text">
                  Augmenter votre chance de réserver la formule de votre choix
                </p>
              </div>
              <div className="feature-item">
                <Check className="feature-icon" />
                <div>
                  <p className="feature-text">
                    Ne pas vivre tout le stress de l'utilisation la plateforme
                    Nusuk, nos techniciens s'occupent de tout à votre place.
                  </p>
                  <p className="feature-detail">
                    Ne rien rater, nous faisons la veille sur Nusuk à votre
                    place (nouveaux vols, nouvelle formule, nouveaux prix, etc.)
                  </p>
                  <p className="feature-detail">Comment ça se passe ?</p>
                </div>
              </div>
              <div className="feature-item">
                <Check className="feature-icon" />
                <p className="feature-text">
                  Nous créons un compte NUSUk pour vous, vous n'avez rien à
                  faire
                </p>
              </div>
              <div className="feature-item">
                <Check className="feature-icon" />
                <p className="feature-text">
                  Nous nous occupons de toutes les étapes sur Nusuk en étroite
                  coordination avec vous
                </p>
              </div>
              <div className="feature-item">
                <Check className="feature-icon" />
                <p className="feature-text">
                  Le jour j, laissez nous gérer la réservation finale
                </p>
              </div>

              <div className="premium-features">
                <p className="premium-intro">
                  Ce n'est pas fini ! Avec le pack sérénité, vous avez droit à :
                </p>

                <div className="feature-item">
                  <Check className="feature-icon" />
                  <p className="feature-text">
                    Assistance 24h/24, 7j/7 un conseiller vous répond au
                    téléphone de manière personnalisée
                  </p>
                </div>

                <div className="feature-item">
                  <Check className="feature-icon" />
                  <p className="feature-text">
                    L'inscription à notre série de réunions Zoom privées :
                  </p>
                </div>

                <div className="meetings-list">
                  {[
                    "Semaine 1 : Hajj 2026 mode d'emploi ?",
                    "Semaine 2 : Comment choisir votre formule hajj",
                    "Semaine 3 : Présentation de Nusuk, comment ça fonctionne ?",
                    "Semaine 4 : Présentation de nos formules hajj 2026",
                    "Semaine 5 : Questions/Réponses avant réservation finale",
                    "Semaine 6 : Préparation à la deuxième phase de réservation sur Nusuk",
                  ].map((week, index) => (
                    <div key={index} className="meeting-item">
                      <div className="meeting-number">{index + 1}</div>
                      <p className="meeting-text">{week}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-item">
                <Check className="feature-icon" />
                <p className="feature-text">
                  Inscription à un stage de 8 séances de formation Hajj en
                  présentiel dans nos locaux animés par des cheikh,
                  accompagnateurs, médecins, imams,...pour une préparation
                  maximale (technique, spirituelle, religieuse, médicale, etc.)
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section">
            <h2 className="section-title">
              Tout savoir sur notre service Hajj
            </h2>
            <p className="help-text">
              Pour plus d'informations consulter notre{" "}
              <span className="help-link">page d'aide</span>.
            </p>

            <div className="faq-container">
              {[
                "Qu'est-ce que le Hajj ?",
                "Quand a lieu le Hajj ?",
                "Qui est obligé de faire le Hajj ?",
                "Quelles sont les principales étapes du Hajj ?",
                "Quelle est la différence entre le Hajj et la 'Umra ?",
                "Quels sont les bienfaits du Hajj ?",
              ].map((question, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="faq-text">{question}</span>
                    <ChevronDown
                      className={`faq-icon ${openFaq === index ? "open" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer">
                      <p>Contenu de réponse pour la question : {question}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-header">
            <h3 className="footer-title">
              Témoignage de nos clients Hajj 2024
            </h3>
          </div>

          <div className="footer-grid">
            <div className="footer-column">
              <h4 className="footer-subtitle">Plan de site</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Qui sommes nous
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    annuaire_des_hotels
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    recherche
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Boutique en ligne
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-subtitle">Liens utiles</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Qui sommes nous
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    annuaire_des_hotels
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    recherche
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Boutique en ligne
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-subtitle">Hajj - Omra</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Qui sommes nous
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    annuaire_des_hotels
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    recherche
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Boutique en ligne
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-subtitle">Informations</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Qui sommes nous
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    annuaire_des_hotels
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    recherche
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Boutique en ligne
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-subtitle">Nos agences</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Qui sommes nous
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    annuaire_des_hotels
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    recherche
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Boutique en ligne
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-divider">
            <div className="country-badges">
              <div className="country-badge">
                <img src={franceImg} alt="France" className="country-icon" />
                <span>GO-MAKKAH France</span>
              </div>
              <div className="country-badge">
                <img src={algeriaImg} alt="Algerie" className="country-icon" />
                <span>GO-MAKKAH Algérie</span>
              </div>
              <div className="country-badge">
                <img src={moroccoImg} alt="Morocco" className="country-icon" />
                <span>GO-MAKKAH Maroc</span>
              </div>
              <div className="country-badge">
                <img
                  src={saudiImg}
                  alt="Saudi Arabia"
                  className="country-icon"
                />
                <span>GO-MAKKAH Saudi</span>
              </div>
              <div className="country-badge">
                <img src={tunisiaImg} alt="Tunisia" className="country-icon" />
                <span>GO-MAKKAH Tunisie</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoMakkahPage;
