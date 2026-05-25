import React from 'react'
import Title from './Title'
import { assets } from '../assets/data'

const About = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 py-16 xl:py-28 pt-36'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        {/* CONTAINER */}
        <div className='flex items-center flex-col lg:flex-row gap-14'>
          
          {/* INFO - LEFT SIDE */}
          <div className='flex-[5]'>
            <Title 
              title1={"Votre partenaire de confiance"}
              title2={"Nous vous accompagnons à chaque étape"}
              paraStyles={"hidden"}
            />
            
            <p className='text-gray-500 leading-relaxed mb-10 mt-5 max-w-xl'>
              Trouvez une voiture fiable avec des prix transparents, des inspections vérifiées, des options flexibles de retrait et de livraison, ainsi qu'un service client disponible 24h/24 et 7j/7 pour une expérience de location fluide.
            </p>

            <div className='grid gap-6 md:grid-cols-2'>
              <div className='group p-6 rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h5 className='font-bold text-gray-900 mb-2'>Service rapide</h5>
                <p className='text-sm text-gray-500 leading-relaxed'>Réservez en quelques secondes avec une confirmation immédiate et des options de retrait flexibles, pour prendre la route rapidement, sans attente ni complications.</p>
              </div>
              
              <div className='group p-6 rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h5 className='font-bold text-gray-900 mb-2'>Large choix de véhicules</h5>
                <p className='text-sm text-gray-500 leading-relaxed'>Choisissez parmi une gamme allant des modèles économiques aux voitures de luxe, régulièrement entretenus et vérifiés, pour des performances fiables et le véhicule idéal pour chaque trajet.</p>
              </div>
              
              <div className='group p-6 rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className='font-bold text-gray-900 mb-2'>Tarification transparente</h5>
                <p className='text-sm text-gray-500 leading-relaxed'>Des tarifs clairs dès le départ, sans frais cachés, avec un détail précis des assurances et des options, pour un coût prévisible et facile à comprendre avant la réservation.</p>
              </div>
              
              <div className='group p-6 rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className='font-bold text-gray-900 mb-2'>Assistance 24h/24</h5>
                <p className='text-sm text-gray-500 leading-relaxed'>Un service client disponible à tout moment par chat ou téléphone, pour résoudre rapidement les problèmes et vous accompagner dans vos modifications, prolongations ou besoins d'assistance routière.</p>
              </div>
            </div>
          </div>

          {/* IMAGE - RIGHT SIDE */}
          <div className='flex-[4] flex gap-6'>
            <div className='relative flex justify-end mb-12'>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 group">
                <img 
                  src={assets.about1} 
                  alt="Notre flotte de véhicules" 
                  className='rounded-3xl group-hover:scale-105 transition-transform duration-700'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className='relative flex justify-end mt-12'>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 group">
                <img 
                  src={assets.about2} 
                  alt="Service client AysiCar" 
                  className='rounded-3xl group-hover:scale-105 transition-transform duration-700'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About