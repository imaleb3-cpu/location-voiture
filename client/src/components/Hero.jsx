import React from "react"
import { assets, cities } from "../assets/data"

const Hero = () => {
  const inputClasses = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 transition-all duration-200 shadow-sm"
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-1"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20">
      
      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 text-xs font-semibold rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Disponible maintenant
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Découvrez{" "}
            <span className="text-blue-400">une gamme exclusive</span>{" "}
            de voitures haut de gamme
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Des véhicules premium soigneusement sélectionnés dans les destinations les plus captivantes du Maroc.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        
        {/* ===== FORMULAIRE DE RECHERCHE ===== */}
        <div className="-mt-28 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            
            <div className="p-8 sm:p-10">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Réservez votre véhicule</h2>
                <p className="text-gray-400 text-sm">Trouvez la voiture idéale pour votre prochain voyage en quelques clics.</p>
              </div>
              <form className="grid md:grid-cols-4 gap-5 items-end">
                {/* Destination */}
                <div className="md:col-span-1">
                  <label htmlFor="destinationInput" className={labelClasses}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      Destination
                    </div>
                  </label>
                  <input
                    list='destinations'
                    id="destinationInput"
                    type="text"
                    className={inputClasses}
                    placeholder="Saisissez une ville"
                    required
                  />
                  <datalist id="destinations">
                    {cities.map((city, index) => (
                      <option value={city} key={index} />
                    ))}
                  </datalist>
                </div>
                {/* Prise en charge */}
                <div className="md:col-span-1">
                  <label htmlFor="pickUp" className={labelClasses}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Prise en charge
                    </div>
                  </label>
                  <input
                    id="pickUp"
                    type="date"
                    className={inputClasses}
                  />
                </div>
                {/* Restitution */}
                <div className="md:col-span-1">
                  <label htmlFor="dropOff" className={labelClasses}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                        <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Restitution
                    </div>
                  </label>
                  <input
                    id="dropOff"
                    type="date"
                    className={inputClasses}
                  />
                </div>

                {/* Bouton Rechercher */}
                <div className="md:col-span-1">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold text-white shadow-lg bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Rechercher
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* ===== IMAGE DE FOND / VISUEL ===== */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 group">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
          <img 
            src={assets.bg} 
            alt="Collection de véhicules premium AysiCar" 
            className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-8 left-8 z-20 text-white">
            <h3 className="text-2xl font-bold mb-2">Notre flotte premium</h3>
            <p className="text-slate-200 text-sm max-w-md">Des berlines élégantes aux SUV robustes, trouvez le véhicule parfait pour chaque occasion.</p>
          </div>
        </div>
        {/* ===== STATISTIQUES RAPIDES ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Véhicules disponibles", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
            { number: "15,000+", label: "Locations réussies", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { number: "24/7", label: "Assistance routière", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { number: "4.9/5", label: "Satisfaction client", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Hero