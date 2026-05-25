import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ setMenuOpened, containerStyles }) => {
  const navLinks = [
    { path: "/", title: "Accueil" },
    { path: "/listing", title: "Voitures" },
    { path: "/contact", title: "Contact" },
  ]

  return (
    <nav className={containerStyles}>
      <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-2 shadow-lg shadow-gray-200/50 border border-gray-100/50">
        {navLinks.map((link) => (
          <NavLink
            onClick={() => { setMenuOpened(false); scrollTo(0, 0) }}
            key={link.title}
            to={link.path}
            className={({ isActive }) =>
              `relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive 
                  ? "text-white bg-blue-500 shadow-md shadow-blue-500/25" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Indicateur actif avec animation */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-20"></span>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {link.title === "Accueil" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {link.title === "Voitures" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  )}
                  {link.title === "Contact" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {link.title}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
