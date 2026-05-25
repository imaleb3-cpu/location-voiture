import React from 'react'
import { assets } from '../assets/data'
import { useNavigate } from "react-router-dom"

const Banner = () => {
  const navigate = useNavigate()
  return (
    <section className='py-16 xl:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative'>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
          
          <div className='flex flex-col md:flex-row items-center relative z-10'>
            {/* LEFT SIDE - IMAGE */}
            <div className='flex-1 flex items-center justify-center p-8'>
              <img
                src={assets.banner}
                alt="bannerImg"
                className='w-full h-auto object-contain drop-shadow-2xl max-w-sm'
              />
            </div>

            {/* RIGHT SIDE - TEXT */}
            <div className='flex-1 text-white p-8 md:p-12 lg:pr-16'>
              <div className='flex flex-col gap-5'>
                {/* Label */}
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 text-xs font-semibold rounded-full mb-2 border border-white/20 w-fit">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Location simplifiée
                </span>

                <h3 className='capitalize text-3xl md:text-4xl font-bold leading-tight'>
                  Louez en toute{' '}
                  <span className="text-blue-400">tranquillité</span>
                </h3>

                <p className='text-slate-300 leading-relaxed max-w-md'>
                  Trouvez votre prochain véhicule ou commencez à gagner de l'argent avec le vôtre en quelques minutes. Nous nous occupons de l'assurance, de la vérification des conducteurs et des paiements sécurisés.
                </p>

                <button
                  onClick={() => navigate("/listing")}
                  className='inline-flex items-center gap-2 px-6 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 w-fit'
                >
                  Explorez les véhicules
                  <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner