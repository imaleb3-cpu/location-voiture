import React from 'react'
import { assets } from '../assets/data'
import Title from './Title'

const testimonials = [
  {
    stars: 5,
    date: "25 Avr 2026",
    text: "Bonne expérience globale, la voiture était confortable et propre. Petit retard lors de la livraison, mais le personnel est resté aimable et arrangeant.",
    userImg: assets.user1,
    userName: "Sara Ait Ali"
  },
  {
    stars: 5,
    date: "27 Avr 2026",
    text: "J'ai apprécié la simplicité de la réservation en ligne. Le service client est réactif et professionnel. Prix corrects pour une voiture en très bon état. Je relouerai sans hésiter.",
    userImg: assets.user2,
    userName: "Yassine Khatib"
  },
  {
    stars: 5,
    date: "3 mai 2026",
    text: "Service excellent! J'ai loué une voiture pour un week-end à Casablanca et tout s'est très bien passé. La voiture était propre, récente et conforme à la description. La prise en charge a été rapide et sans complication. Je recommande fortement !",
    userImg: assets.user3,
    userName: "Mariam Boulahcen"
  }
]

const Testimonial = () => {
  return (
    <section className='bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 py-16 xl:py-32'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <Title 
          title1={"Ce que disent nos utilisateurs"}
          title2={"Ne vous fiez pas seulement à notre parole."}
          titleStyles={"mb-10"}
          para={"Découvrez les avis de nos utilisateurs sur notre service. Nous cherchons constamment à nous améliorer. Si votre expérience a été positive, n'hésitez pas à laisser un avis."}
        />

        {/* CONTAINER */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className='group bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden'
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

              <div className='p-8 space-y-5'>
                {/* Header: Stars + Date */}
                <div className='flex items-center justify-between'>
                  <div className='flex gap-1'>
                    {[...Array(t.stars)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-white bg-blue-500 px-3 py-1 rounded-full">
                    {t.date}
                  </span>
                </div>

                {/* Quote icon */}
                <div className="relative">
                  <svg className="absolute -top-2 -left-1 w-8 h-8 text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className='text-gray-600 text-sm leading-relaxed pl-6 relative z-10'>
                    {t.text}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                {/* User */}
                <div className='flex items-center gap-3'>
                  <div className="relative">
                    <img 
                      src={t.userImg} 
                      alt={t.userName} 
                      className='h-12 w-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300' 
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className='text-gray-900 font-bold text-sm'>{t.userName}</p>
                    <p className='text-gray-500 text-xs'>Client vérifié</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial