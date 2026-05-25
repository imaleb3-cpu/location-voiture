import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            id: "collecte",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Données collectées",
            content: [
                { bold: "Informations d'identification", text: " : nom complet, adresse e-mail, numéro de téléphone, date de naissance, pièce d'identité (CNI ou passeport)." },
                { bold: "Informations de réservation", text: " : dates de location, lieu de prise en charge et de restitution, type de véhicule choisi." },
                { bold: "Informations de paiement", text: " : coordonnées bancaires traitées de manière sécurisée via nos partenaires certifiés, historique des transactions." },
                { bold: "Données de localisation", text: " : position GPS lors de l'utilisation de l'application mobile (avec votre consentement explicite)." },
                { bold: "Données techniques", text: " : adresse IP, type de navigateur, appareil utilisé, cookies et données de navigation." }
            ]
        },
        {
            id: "utilisation",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Utilisation des données",
            content: [
                { bold: "Gestion des réservations", text: " : traitement et confirmation de vos demandes de location de véhicules." },
                { bold: "Communication", text: " : envoi de confirmations, rappels, notifications et informations relatives à votre réservation." },
                { bold: "Sécurité et vérification", text: " : vérification d'identité des propriétaires et locataires pour garantir la sécurité de la communauté." },
                { bold: "Amélioration du service", text: " : analyse des usages pour optimiser l'expérience utilisateur et développer de nouvelles fonctionnalités." },
                { bold: "Support client", text: " : traitement de vos demandes et réclamations dans les meilleurs délais." },
                { bold: "Obligations légales", text: " : respect des obligations fiscales et réglementaires en vigueur au Maroc." }
            ]
        },
        {
            id: "cookies",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Cookies et technologies similaires",
            content: [
                { bold: "Cookies essentiels", text: " : nécessaires au fonctionnement du site (authentification, panier de réservation)." },
                { bold: "Cookies de performance", text: " : analyse du trafic et comportement des utilisateurs via Google Analytics." },
                { bold: "Cookies de fonctionnalité", text: " : mémorisation de vos préférences (langue, ville favorite)." },
                { bold: "Cookies de ciblage", text: " : publicité personnalisée uniquement avec votre consentement explicite." }
            ],
            note: "Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur ou notre bandeau de consentement."
        },
        {
            id: "protection",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Protection des données",
            content: [
                { bold: "Chiffrement SSL/TLS", text: " : toutes les communications entre votre navigateur et nos serveurs sont chiffrées de bout en bout." },
                { bold: "Stockage sécurisé", text: " : vos données sont stockées sur des serveurs cloud certifiés ISO 27001, situés dans l'Union Européenne." },
                { bold: "Contrôle d'accès", text: " : accès restreint aux données personnelles, uniquement aux employés autorisés et soumis à NDA." },
                { bold: "Audit régulier", text: " : tests de pénétration et audits de sécurité trimestriels par des cabinets externes indépendants." },
                { bold: "Paiement sécurisé", text: " : vos coordonnées bancaires ne transitent jamais par nos serveurs ; elles sont traitées directement par nos partenaires certifiés PCI-DSS." }
            ]
        },
        {
            id: "partage",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            ),
            title: "Partage avec des tiers",
            content: [
                { bold: "Prestataires de services", text: " : hébergement cloud, service client, envoi d'e-mails (sous contrat de confidentialité strict)." },
                { bold: "Partenaires de paiement", text: " : banques et établissements de paiement pour le traitement sécurisé des transactions." },
                { bold: "Assureurs", text: " : en cas de sinistre, uniquement les informations strictement nécessaires à la gestion du dossier." },
                { bold: "Autorités légales", text: " : uniquement sur demande judiciaire ou pour prévenir une fraude avérée." }
            ],
            note: "AysiCar ne vend jamais vos données personnelles. Chaque partenaire est soumis à des obligations contractuelles de confidentialité et de sécurité conformes au RGPD."
        },
        {
            id: "droits",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            title: "Vos droits",
            content: [
                { bold: "Droit d'accès", text: " : obtenir une copie de vos données personnelles." },
                { bold: "Droit de rectification", text: " : corriger ou mettre à jour vos informations." },
                { bold: "Droit à l'effacement", text: " : demander la suppression de vos données (droit à l'oubli)." },
                { bold: "Droit à la portabilité", text: " : recevoir vos données dans un format structuré et les transférer." },
                { bold: "Droit d'opposition", text: " : vous opposer au traitement de vos données à des fins de marketing." },
                { bold: "Droit de limitation", text: " : restreindre le traitement de vos données dans certains cas." }
            ],
            note: "Pour exercer ces droits, contactez-nous à privacy@aysicar.ma. Nous répondons dans un délai maximum de 30 jours conformément à la loi 09-08 et au RGPD."
        },
        {
            id: "conservation",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Durée de conservation",
            content: [
                { bold: "Données de compte", text: " : pendant la durée de votre inscription + 3 ans après suppression du compte." },
                { bold: "Données de réservation", text: " : 5 ans après la dernière location (obligations fiscales et légales)." },
                { bold: "Données de paiement", text: " : 13 mois après la transaction (normes bancaires)." },
                { bold: "Cookies", text: " : de 1 jour à 13 mois selon leur nature." },
                { bold: "Données de support", text: " : 3 ans après clôture du ticket." }
            ]
        },
        {
            id: "contact",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Contact & DPO",
            content: [
                { bold: "Délégué à la Protection des Données (DPO)", text: "" }
            ],
            contactInfo: {
                email: "privacy@aysicar.ma",
                address: "bp 11201, Avenue Zitoune, Meknès, Maroc",
                phone: "+212 24 62 00 64"
            },
            note: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL (Commission Nationale de contrôle de la protection des Données à caractère Personnel du Maroc)."
        }
    ];

    const lastUpdated = "20 mai 2026";

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50" style={{ paddingTop: '70px' }}>

            {/* ===== HERO SECTION ===== */}
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 text-xs font-semibold rounded-full mb-6 border border-white/20">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Disponible maintenant
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                        Politique de <span className="text-blue-400">Confidentialité</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Nous collectons certaines informations personnelles afin d'assurer le bon fonctionnement 
                        de la plateforme et d'améliorer l'expérience utilisateur. Vos données sont protégées 
                        et ne sont pas partagées avec des tiers sans autorisation.
                    </p>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Dernière mise à jour : {lastUpdated}
                    </p>
                </div>
            </div>

            {/* ===== TABLE OF CONTENTS ===== */}
            <div className="bg-white border-b border-slate-200 sticky top-[60px] z-40">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
                        {sections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                                    activeSection === section.id
                                        ? 'bg-slate-900 text-white'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                            >
                                {index + 1}. {section.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== CONTENT SECTIONS ===== */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">
                {sections.map((section, index) => (
                    <section 
                        key={section.id} 
                        id={section.id} 
                        className="scroll-mt-32"
                    >
                        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                            {/* Section Header */}
                            <div className="px-6 md:px-8 py-6 border-b border-slate-100 bg-slate-50/50">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                        {section.icon}
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Section {String(index + 1).padStart(2, '0')}</span>
                                        <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                                    </div>
                                </div>
                            </div>

                            {/* Section Content */}
                            <div className="px-6 md:px-8 py-6">
                                <div className="space-y-4">
                                    {section.content.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                                            <p className="text-slate-600 leading-relaxed">
                                                <span className="font-semibold text-slate-800">{item.bold}</span>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Contact Info Card (for contact section) */}
                                {section.contactInfo && (
                                    <div className="mt-6 p-5 bg-slate-50 rounded-xl border border-slate-200">
                                        <div className="grid sm:grid-cols-3 gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500">Email</p>
                                                    <p className="text-sm font-semibold text-slate-800">{section.contactInfo.email}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500">Téléphone</p>
                                                    <p className="text-sm font-semibold text-slate-800">{section.contactInfo.phone}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500">Adresse</p>
                                                    <p className="text-sm font-semibold text-slate-800">{section.contactInfo.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Note */}
                                {section.note && (
                                    <div className="mt-5 p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-sm text-slate-600 leading-relaxed">{section.note}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* ===== CTA SECTION ===== */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Des questions sur vos données ?</h3>
                            <p className="text-slate-400 max-w-lg">
                                Notre Délégué à la Protection des Données est à votre disposition pour répondre à toutes vos questions concernant la confidentialité.
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-colors duration-200 shadow-lg shrink-0"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            Contacter le DPO
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PrivacyPolicy;