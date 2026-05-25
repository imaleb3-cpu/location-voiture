import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {assets} from '../assets/data'
import CarImages from '../components/CarImages'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const CarDetails = () => {
  const{currency, cars, navigate, axios, getToken} = useAppContext()
  const [car, setCar] = useState(null)
  const {id} = useParams()
  const [pickUpDate, setPickUpDate] = useState(null)
  const [dropOffDate, setDropOffDate] = useState(null)
  const [isAvailable, setIsAvailable] = useState(false)

  //check Availability
  const checkAvailability = async()=>{
    try {
      //ckeck is pickupDate is greater than dropOff
      if(pickUpDate > dropOffDate){
        toast.error("La date de prise en charge doit être antérieure à la date de restitution.")
      }
      const {data} = await axios.post("/api/bookings/check-availability", {car: id, pickUpDate, dropOffDate})

      if(data.success){
        if(data.isAvailable){
          setIsAvailable(true)
          toast.success("La voiture est disponible")
        }else{
          setIsAvailable(false)
          toast.success("La voiture n'est pas disponible")
        }
      }else{
        toast.error(data.error)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  //book car if isAvailable
  const onSubmitHandler = async (e)=>{
    e.preventDefault()
    try {
      if(!isAvailable){
        return checkAvailability()
      }else{
        const {data} = await axios.post('/api/bookings/book', {car: id, pickUpDate, dropOffDate},{headers: {Authorization: `Bearer ${await getToken()}`}})
        if(data.success){
          toast.success(data.message)
          navigate("/my-bookings")
          scrollTo(0,0)
        }else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(cars && cars.length > 0){
      const foundCar = cars.find(c=>c.id === id)
      if(foundCar){
       setCar(foundCar)
      }
    }
  }, [cars, id])

  return (
    car && (
      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-16 xl:py-32'>
          {/* CONTAINER */}
          <div className='flex flex-col md:flex-row gap-8'>
            {/* INFO - LEFT SIDE */}
            <div className='flex-[5] bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-8 sm:p-10'>

              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 -mx-8 sm:-mx-10 -mt-8 sm:-mt-10 mb-8"></div>

              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium">{car.address}</span>
              </div>

              <div className='flex justify-between flex-col sm:flex-row sm:items-end mt-3 mb-6'>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{car.title}</h1>
                <div className="flex items-baseline gap-1 mt-2 sm:mt-0">
                  <span className="text-3xl font-bold text-blue-600">{currency}{car.price}</span>
                  <span className="text-gray-400 font-medium">/jour</span>
                </div>
              </div>

              <div className='flex justify-between items-start mb-6'>
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                  {car.bodyType}
                </span>
                <div className='flex items-center gap-1'>
                  <span className="text-lg font-bold text-gray-900 mr-1">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8'>
                {[
                  { icon: assets.transmission, label: "Transmission", value: car.transmission },
                  { icon: assets.seats, label: "Sièges", value: car.seats },
                  { icon: assets.fuelType, label: "Carburant", value: car.fuelType },
                  { icon: assets.odometer, label: "Kilométrage", value: car.odometer },
                ].map((spec, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      <img src={spec.icon} alt="" width={18} className="opacity-60" />
                      <span className="text-xs text-gray-400 font-medium">{spec.label}</span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Détails du véhicule</h3>
                <p className='text-gray-600 leading-relaxed'>{car.description}</p>
              </div>

              {/* Features */}
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Caractéristiques</h3>
                <div className='flex gap-3 flex-wrap'>
                  {car.features.map((feature)=>(
                    <span key={feature} className='px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-xl border border-blue-100'>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* FORM / CHECK AVAILABILITY */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/30 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Réserver ce véhicule</h3>
                <form onSubmit={onSubmitHandler} className='flex flex-col lg:flex-row gap-5'>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="pickUpDate" className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Prise en charge
                    </label>
                    <input 
                      type="date" 
                      onChange={(e)=> setPickUpDate(e.target.value)} 
                      min={new Date().toISOString().split("T")[0]} 
                      id="pickUpDate" 
                      className='w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 transition-all duration-200 shadow-sm' 
                    />
                  </div>
                  <div className='flex flex-col w-full'>
                    <label htmlFor="dropOffDate" className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Restitution
                    </label>
                    <input 
                      type="date" 
                      onChange={(e)=> setDropOffDate(e.target.value)} 
                      min={pickUpDate} 
                      id="dropOffDate" 
                      disabled={!pickUpDate} 
                      className='w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 transition-all duration-200 shadow-sm disabled:bg-gray-50 disabled:text-gray-400' 
                    />
                  </div>
                  <div className="flex items-end">
                    <button 
                      type='submit' 
                      className='w-full lg:w-auto py-4 px-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2'
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <span>{isAvailable ? "Réserver la voiture" : "Vérifier les dates"}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* CONTACT AGENCY */}
              <div className='mt-8 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/30 overflow-hidden'>
                <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <div className="p-6 sm:p-8">
                  <h3 className='text-lg font-bold text-gray-900 mb-4'>Contacter l'agence</h3>

                  <div className="flex items-start gap-4 mb-6">
                    <img src={car.agencyRef.user.image} alt="" className='h-14 w-14 rounded-2xl object-cover ring-2 ring-gray-100' />
                    <div>
                      <div className='flex items-center gap-2 mb-1'>
                        <h4 className="font-bold text-gray-900">{car.agencyRef.name}</h4>
                        <span className='px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-200'>Agence</span>
                      </div>
                      <p className="text-sm text-gray-500">Bureau de l'agence</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className='w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0'>
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">Téléphone</p>
                        <p className="text-sm font-semibold text-gray-900">{car.agencyRef.contact}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className='w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0'>
                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">E-mail</p>
                        <p className="text-sm font-semibold text-gray-900">{car.agencyRef.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-3'>
                    <button className='flex-1 flex items-center justify-center gap-2 py-3.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg'>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Envoyez un e-mail
                    </button>
                    <button className='flex-1 flex items-center justify-center gap-2 py-3.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30'>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Appelez maintenant
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGES - RIGHT SIDE */}
            <div className='flex flex-[4] w-full'>
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-6 sm:p-8 w-full">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6"></div>
                <CarImages car={car}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default CarDetails