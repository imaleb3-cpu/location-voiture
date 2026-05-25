// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const teamMembers = [
        {
            name: "Ettanaghmalti Aya",
            role: "Fondateur & CEO",
            description: "Visionnaire passionnée par l'innovation digitale et la mobilité durable au Maroc.",
            initials: "EA"
        },
        {
            name: "Lmouiz Salma",
            role: "Directrice Technique",
            description: "Experte en architecture logicielle et solutions cloud sécurisées.",
            initials: "LS"
        },
        {
            name: "Belkadi Imane",
            role: "Directrice Marketing",
            description: "Stratège digitale avec 8 ans d'expérience dans le secteur automobile.",
            initials: "BI"
        }
    ];

    const services = [
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            title: "Location P2P",
            description: "Plateforme sécurisée connectant propriétaires et locataires avec vérification d'identité."
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Sécurité Maximale",
            description: "Assurance tous risques, vérification des antécédents et paiement sécurisé."
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Disponibilité 24/7",
            description: "Réservation instantanée et assistance client permanente, jour et nuit."
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Tarifs Transparents",
            description: "Aucun frais caché. Prix compétitifs garantis 20% moins cher que l'agence."
        }
    ];

    const timeline = [
        {
            title: "Conception & Stratégie",
            description: "Analyse approfondie du marché marocain, étude des besoins de mobilité et définition du modèle économique collaboratif."
        },
        {
            title: "Développement & Tests",
            description: "Construction de la plateforme, intégration de systèmes de paiement sécurisés et réalisation d'une phase de bêta-test auprès d'un groupe d'utilisateurs sélectionnés."
        },
        {
            title: "Lancement National",
            description: "Déploiement opérationnel à travers le Maroc avec une large sélection de véhicules référencés."
        }
    ];

    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=bp+11201%2C+Avenue+Zitoune%2C+Meknes%2C+Maroc";

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden" style={{ paddingTop: '70px' }}>

            {/* ===== HERO SECTION ===== */}
            {/* ===== HERO SECTION ===== */}
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 text-xs font-semibold rounded-full mb-6 border border-white/20">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Plateforme Leader au Maroc
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                        Redéfinir la <span className="text-blue-400">mobilité</span> au Maroc
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        AysiCar est la première plateforme marocaine de location de voitures entre particuliers,
                        alliant technologie de pointe et confiance communautaire.
                    </p>
                </div>
            </div>


            {/* ===== 1. QUI NOUS SOMMES ===== */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Qui nous sommes</h2>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent"></div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                <strong className="text-slate-900">AysiCar</strong> est une entreprise technologique marocaine
                                fondée sur une vision simple : transformer chaque voiture stationnée en opportunité de mobilité
                                pour autrui.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Notre plateforme met en relation des propriétaires de véhicules souhaitant optimiser leurs actifs
                                avec des particuliers et professionnels recherchant une solution de transport flexible, économique
                                et écologique.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-8 border border-slate-100">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <span className="text-slate-700 font-medium">Économie collaborative</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="text-slate-700 font-medium">Technologie sécurisée</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                    <span className="text-slate-700 font-medium">Impact environnemental positif</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-slate-700 font-medium">Communauté de confiance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* ===== 2. L'OBJECTIF ===== */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Notre mission</h2>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Pour les propriétaires</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Monétisez votre véhicule lorsqu'il est inutilisé. Fixez vos propres tarifs, définissez
                            vos disponibilités et générez des revenus complémentaires substantiels tout en participant
                            à une économie circulaire.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Pour les locataires</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Accédez à une flotte diversifiée de véhicules vérifiés à des tarifs 20% inférieurs aux agences
                            traditionnelles. Réservez en quelques clics et retirez le véhicule près de chez vous.
                        </p>
                    </div>
                </div>
                </div>
            </section>

            {/* ===== 3. L'HISTOIRE ===== */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Notre parcours</h2>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent"></div>
                </div>

                <div className="relative">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 via-slate-300 to-transparent"></div>

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <div key={index} className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="hidden md:block flex-1"></div>

                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-500 shadow-lg flex items-center justify-center">
                                        <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                                    </div>
                                </div>

                                <div className="flex-1 pt-1">
                                    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </section>

            {/* ===== 4. LES SERVICES ===== */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Nos services</h2>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-blue-50 border border-slate-100 group-hover:border-blue-100 flex items-center justify-center mb-6 transition-colors duration-300 text-slate-600 group-hover:text-blue-600">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
                </div>
            </section>

            {/* ===== 5. L'ÉQUIPE ===== */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Notre équipe dirigeante</h2>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                            <div className="p-8 text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-white shadow-md flex items-center justify-center text-xl font-bold text-slate-500 group-hover:from-blue-50 group-hover:to-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                                    {member.initials}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>

                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </section>

            {/* ===== 6. COORDONNÉES ===== */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Nos coordonnées</h2>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent"></div>
                </div>

                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">

                        <div className="p-8 hover:bg-slate-800/50 transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Siège Social</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                bp 11201, Avenue Zitoune<br />
                                Meknes, Maroc
                            </p>
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm mt-4 transition-colors"
                            >
                                Google Maps
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-8 hover:bg-slate-800/50 transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Téléphone</h3>
                            <p className="text-slate-400 text-sm">+212 24 62 00 64</p>
                            <p className="text-slate-500 text-xs mt-3 uppercase tracking-wider">Lun-Ven, 9h-18h</p>
                        </div>

                        <div className="p-8 hover:bg-slate-800/50 transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Email</h3>
                            <p className="text-slate-400 text-sm">aysicar@gmail.ma</p>
                            <p className="text-slate-500 text-xs mt-3 uppercase tracking-wider">Support 24h/24</p>
                        </div>

                        <div className="p-8 hover:bg-slate-800/50 transition-colors duration-300">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
                                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Site Web</h3>
                            <p className="text-slate-400 text-sm">www.aysicar.ma</p>
                            <p className="text-slate-500 text-xs mt-3 uppercase tracking-wider">Disponible partout</p>
                        </div>

                    </div>
                </div>
                </div>
            </section>

            {/* CTA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Contactez notre équipe
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

        </div>

  );
};

export default About;