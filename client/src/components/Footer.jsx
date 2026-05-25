import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/data'

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-700',
      icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
    },
    {
      name: 'Instagram',
      color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 hover:opacity-90',
      icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z'
    },
    {
      name: 'Twitter',
      color: 'bg-sky-500 hover:bg-sky-600',
      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
    },
    {
      name: 'LinkedIn',
      color: 'bg-blue-700 hover:bg-blue-800',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z'
    }
  ]

  const companyLinks = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },  // ← LIEN VERS About.jsx
    { to: "/contact", label: "Nous contacter" },
    { to: "/privacy", label: "Politique de confidentialité" },
  ]

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=bp+11201%2C+Avenue+Zitoune%2C+Meknes%2C+Maroc"

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img src={assets.logoImg} alt="logoImg" width={88} className='h-7 invert brightness-0' />
              <span className='text-white uppercase text-xs font-extrabold tracking-[6px] relative bottom-1 block mt-1'>AysiCar</span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Trouvez une voiture fiable avec des prix transparents, des inspections vérifiées, des options flexibles de retrait et de livraison, ainsi qu'un service client disponible 24h/24 pour une expérience de location fluide.
            </p>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 rounded-xl ${social.color} flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg`}
                  title={social.name}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              
              {/* Company */}
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                  Entreprise
                </h3>
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.to} 
                        className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors duration-200"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                  Services
                </h3>
                <ul className="space-y-4">
                  {[
                    "Location de voitures",
                    "Livraison à domicile",
                    "Assistance 24/7"
                  ].map((service) => (
                    <li key={service}>
                      <span className="text-slate-400 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                  Contactez-nous
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Téléphone</p>
                      <p className="text-sm text-slate-300 font-medium">+212 24 62 00 64</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">E-mail</p>
                      <p className="text-sm text-slate-300 font-medium">aysicar@gmail.ma</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <a 
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">Adresse</p>
                        <p className="text-sm text-slate-300 font-medium hover:text-blue-400 transition-colors">Meknes, Maroc</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">
              Copyright 2026 © <span className="text-blue-400 font-semibold">AYSICAR</span>. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-200">
                Conditions d'utilisation
              </Link>
              <Link to="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-200">
                Politique de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer