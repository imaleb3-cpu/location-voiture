import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { assets } from "../assets/data"
import Navbar from './Navbar'
import { useUser, useClerk, UserButton } from "@clerk/clerk-react"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../context/AppContext'

const BookingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 36 36"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 12h-5" />
    <path d="M15 8h-5" />
    <path d="M19 17V5a2 2 0 0 0-2-2H4" />
    <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1" />
  </svg>
)

const Header = () => {
  const { navigate, user, isOwner, setShowAgencyReg, searchQuery, setSearchQuery } = useAppContext()
  const [menuOpened, setMenuOpened] = useState(false)
  const [active, setActive] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()

  const { openSignIn } = useClerk()

  const { t } = useTranslation()

  const isHomePage = location.pathname.endsWith('/')
  const toggleMenu = () => setMenuOpened(prev => !prev)

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 10)
      if (window.scrollY > 10) {
        setMenuOpened(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [location.pathname])

  return (
    <header className={`fixed top-0 w-full left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/30 py-3 border-b border-gray-100`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between'>
          {/* LOGO - ESPACE AUGMENTÉ ENTRE LOGO ET NOM */}
          <div className='flex items-center flex-1'>
            <Link to={"/"} className="flex flex-col items-center">
              <img src={assets.logoImg} alt="logoImg" width={100} className='h-8' />
              <span className='text-gray-900 uppercase text-xs font-bold tracking-[5px] mt-3'>AysiCar</span>
            </Link>
          </div>

          {/* NAVBAR */}
          <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles={menuOpened
              ? "flex items-start flex-col gap-y-6 fixed top-20 right-4 p-6 bg-white shadow-2xl shadow-gray-200/50 w-64 ring-1 ring-gray-100 rounded-2xl z-50 border border-gray-100"
              : "hidden lg:flex items-center gap-x-1 text-sm font-semibold"
            }
          />

          {/* BOUTONS & RECHERCHE & PROFIL */}
          <div className='flex items-center justify-end gap-x-3 sm:gap-x-5 flex-1'>
            {user && (
              <button 
                onClick={() => isOwner ? navigate("/owner") : setShowAgencyReg(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all duration-200 hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOwner ? "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" : "M12 4v16m8-8H4"} />
                </svg>
                {isOwner ? "Dashboard" : "Devenir agence"}
              </button>
            )}

            {/* Barre de recherche */}
            <div className='relative hidden xl:flex items-center'>
              <div className={`transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-full shadow-sm overflow-hidden flex items-center ${showSearch ? "w-[280px] opacity-100 px-4 py-2.5" : "w-0 opacity-0 px-0 py-0 border-0"}`}>
                <svg className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Rechercher une voiture..."
                  className='w-full text-sm outline-none bg-transparent text-gray-800 placeholder:text-gray-400'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div 
                onClick={() => setShowSearch(prev => !prev)} 
                className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-200 ${showSearch ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 shadow-sm'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Menu mobile */}
            <div className="lg:hidden">
              {menuOpened ? (
                <button 
                  onClick={toggleMenu} 
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <button 
                  onClick={toggleMenu} 
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              )}
            </div>

            {/* Profil utilisateur */}
            <div className='group relative'>
              {user ? (
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                      },
                      userButtonTrigger: {
                        border: "2px solid #e5e7eb",
                        borderRadius: "12px",
                        padding: "2px",
                        transition: "all 0.2s",
                      },
                    },
                  }}
                >
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label={t('Mes réservations')}
                      labelIcon={<BookingIcon />}
                      onClick={() => navigate('/my-bookings')}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <button 
                  onClick={openSignIn} 
                  className='flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg'
                >
                  <span>{t('Se connecter')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header