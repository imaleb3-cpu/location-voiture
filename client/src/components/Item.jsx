import React from 'react'
import { assets } from '../assets/data'
import { useNavigate } from 'react-router-dom'

const Item = ({ car }) => {
  const currency = "MAD"
  const navigate = useNavigate()

  const colors = ["#f8fafc", "#f0f9ff", "#fffbeb"];
  const bgColor = colors[parseInt(car.id?.slice(-4) || "0", 16) % colors.length]

  return (
    <div 
      onClick={() => { navigate("/listing/" + car.id); scrollTo(0, 0) }}
      className="group bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-gray-300/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: bgColor }}>
        <img 
          src={car.images[0]} 
          alt={car.title} 
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge prix */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-gray-100">
          <span className="text-lg font-bold text-blue-600">{currency} {car.price}.00</span>
          <span className="text-xs text-gray-400 ml-1">/jour</span>
        </div>
        {/* Badge type */}
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
          {car.bodyType}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h4 className="text-lg font-bold text-gray-900 line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors duration-200">
          {car.title}
        </h4>

        {/* Specs Grid - Option 3 Cards Premium */}
        <div className="grid grid-cols-4 gap-2 mt-5 mb-4">
          {[
            { icon: assets.transmission, label: car.transmission, sub: "Boîte" },
            { icon: assets.seats, label: car.seats, sub: "Places" },
            { icon: assets.fuelType, label: car.fuelType, sub: "Moteur" },
            { icon: assets.odometer, label: car.odometer, sub: "Km" }
          ].map((spec, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300 border border-slate-100 group-hover:border-blue-100"
            >
              <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300">
                <img src={spec.icon} alt="" className="w-[18px] h-[18px] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-9 text-center">
                <span className="block text-[10px] font-bold text-slate-700 group-hover:text-blue-700 transition-colors truncate">
                  {spec.label}
                </span>
                <span className="block text-[9px] text-slate-400 font-medium mt-0.5 truncate">
                  {spec.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-5">
          {car.description}
        </p>

        {/* CTA Button */}
        <button className="w-full py-3.5 rounded-xl font-semibold text-white bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2">
          Voir les détails
          <svg width="18" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Item