import React, {useState, useMemo} from 'react'
import {useSearchParams} from "react-router-dom"
import Item from "../components/Item"
import { useAppContext } from '../context/AppContext'

const Listing = () => {
  const {cars, searchQuery, currency} = useAppContext()
  const [selectedFilters, setSelectedFilters] = useState({
    bodyType:[],
    priceRange: []
  })
  const [selectedSort, setSelectedSort] = useState("")
  const [currPage, setCurrPage] = useState(1)
  const itemsPerPage = 6

  const [searchParams] = useSearchParams()
  const heroDestination = (searchParams.get("destination") || "").toLowerCase().trim()

  const sortOptions = ["Pertinent", "Prix croissant", "Prix décroissant"];
  const bodyType = [
    "Coupe",
    "SUV",
    "Hatchback",
    "Sedan",
    "Convertible",
    "Van",
    "Grand tourer",
  ];

  const priceRange = [
    "0 à 2000",
    "2000 à 3000",
    "3000 à 5000",
    "5000 à 9900",
  ];

  const handleFilterChange = (checked, value, type)=>{
    setSelectedFilters((prev)=>{
      const updated = {...prev}
      if(checked){
        updated[type].push(value)
      }else{
        updated[type] = updated[type].filter(v=> v !== value)
      }
      return updated
    })
  }

  //sorting function
  const sortCars = (a,b)=>{
    if(selectedSort == "Prix croissant") return a.price - b.price;
    if(selectedSort == "Prix décroissant") return b.price - a.price;
    return 0;
  }

  //Price filtres
  const matchesPrice = (car)=>{
    if(selectedFilters.priceRange.length === 0) return true;
    return selectedFilters.priceRange.some((range)=>{
      const [min, max] = range.split(" à ").map(Number);
      return car.price >= min && car.price <= max
    })
  }

  //Type filter
  const matchesType = (car)=>{
    if(selectedFilters.bodyType.length === 0) return true;
    return selectedFilters.bodyType.includes(car.bodyType)
  }

  // Search Filter using header's searchQuery
  const matchesSearch = (car)=>{
    if(!searchQuery) return true;
    return(
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.country.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  //hero destination filter (from hero form -> /listing?destination=...)
  const matchesHeroDestination = (car)=>{
    if(!heroDestination) return true;
    return (car.city || "").toLowerCase().includes(heroDestination)
  }

  //Filtered & sorted CARS
  const filteredCars = useMemo(()=>{
    return cars.filter((c)=>
      matchesType(c) &&
      matchesPrice(c) &&
      matchesSearch(c) &&
      matchesHeroDestination(c)
    ).sort(sortCars)
  }, [cars, selectedFilters, selectedSort, searchQuery, heroDestination])

  //handle pagination logic
  const getPaginatedCars = ()=>{
    const startIndex = (currPage -1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage
    return filteredCars.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage)

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 pt-20'>

      {/* ===== HERO SECTION ===== */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 text-xs font-semibold rounded-full mb-4 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Catalogue
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Trouvez votre <span className="text-blue-400">véhicule idéal</span>
          </h1>
          <p className="text-lg text-slate-300 mt-2 max-w-xl">
            Explorez notre sélection de véhicules et filtrez selon vos préférences.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
        {/* CONTAINER */}
        <div className='flex flex-col sm:flex-row gap-8'>
          {/*FILTERS -LEFT SIDE*/}
          <div className='w-full sm:min-w-72 sm:max-w-80 space-y-6'>

            {/* SORT BY PRICE */}
            <div className='bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-6 sm:p-8'>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Trier par</h3>
              <div className="relative">
                <select 
                  value={selectedSort} 
                  onChange={(e)=>setSelectedSort(e.target.value)} 
                  className='w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400 transition-all duration-200 shadow-sm appearance-none'
                >
                  {sortOptions.map((sort, index)=>(
                    <option key={index} value={sort}>{sort}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* CAR TYPE */}
            <div className='bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-6 sm:p-8'>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Type de véhicule</h3>
              <div className="space-y-3">
                {bodyType.map((type)=>(
                  <label key={type} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={selectedFilters.bodyType.includes(type)} 
                      onChange={(e)=>handleFilterChange(e.target.checked, type, "bodyType")} 
                      className="w-5 h-5 rounded-lg border-gray-300 text-blue-500 focus:ring-blue-400/20 cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* PRICE RANGE */}
            <div className='bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-6 sm:p-8'>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Prix</h3>
              <div className="space-y-3">
                {priceRange.map((price)=>(
                  <label key={price} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={selectedFilters.priceRange.includes(price)} 
                      onChange={(e)=>handleFilterChange(e.target.checked, price, "priceRange")} 
                      className="w-5 h-5 rounded-lg border-gray-300 text-blue-500 focus:ring-blue-400/20 cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{currency}{price}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/*FILTERED CARS -RIGHT SIDE*/}
          <div className='flex-1'>
            <div className='bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-6 sm:p-8'>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6"></div>

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">
                  Résultats <span className="text-gray-400 font-normal text-sm ml-2">({filteredCars.length} véhicule{filteredCars.length > 1 ? 's' : ''})</span>
                </h3>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                {getPaginatedCars().length > 0 ? (
                  getPaginatedCars().map((car)=>(
                    <Item key={car.id} car={car} />
                  ))
                ) : (
                  <div className="col-span-full py-16 text-center">
                    <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Aucun résultat</h3>
                    <p className="text-gray-400 text-sm">Aucune voiture ne correspond aux filtres sélectionnés.</p>
                  </div>
                )}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className='flex items-center justify-center flex-wrap mt-10 gap-2'>
                  <button 
                    disabled={currPage === 1} 
                    onClick={()=>setCurrPage(prev=>prev-1)} 
                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                      currPage === 1 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    Précédent
                  </button>

                  {Array.from({length: totalPages}, (_ , index)=>(
                    <button 
                      key={index + 1} 
                      onClick={()=>setCurrPage(index + 1)} 
                      className={`w-10 h-10 flex items-center justify-center text-sm font-semibold rounded-xl transition-all duration-200 ${
                        currPage===index+1 
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                          : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      {index+1}
                    </button>
                  ))}

                  <button 
                    disabled={currPage === totalPages} 
                    onClick={()=>setCurrPage(prev=>prev+1)} 
                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                      currPage === totalPages 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    Suivant
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing