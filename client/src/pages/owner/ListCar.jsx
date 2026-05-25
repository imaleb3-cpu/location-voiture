import React, { useEffect, useState } from "react";
import {useAppContext} from '../../context/AppContext'
import toast from "react-hot-toast";

const ListCar = () => {
    const {axios, getToken, user, currency} = useAppContext()
    const [cars, setCars] = useState([]);
    //const [error, setError] = useState(null);

    //Get cars of the agency
    const getCars = async() => {
        try {
            const { data } = await axios.get('/api/cars/owner', {
                headers: {
                    Authorization: `Bearer ${await getToken()}`
                }
            })
            if (data.success){
                setCars(data.cars)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    };

    //Toggle availability of the car
    const toggleAvailability = async (carId)=>{
        try {
            const { data } = await axios.post('/api/cars/toggle-availability', {carId},{
                headers: {
                    Authorization: `Bearer ${await getToken()}`
                }
            })
            if (data.success){
                toast.success(data.message)
                getCars()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if(user){
            getCars()
        }
    }, [user]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20">

            {/* ===== HERO SECTION ===== */}
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 text-xs font-semibold rounded-full mb-4 border border-white/20">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                Gestion du parc
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Mes <span className="text-blue-400">véhicules</span>
                            </h1>
                            <p className="text-lg text-slate-300 mt-2 max-w-xl">
                                Gérez la disponibilité et suivez l'état de votre flotte de véhicules en temps réel.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/20">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/30 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Véhicules</p>
                                <p className="text-sm font-semibold">{cars.length} voiture(s)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">

                {/* ===== TABLEAU DES VOITURES ===== */}
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Liste des véhicules</h2>
                                <p className="text-slate-400 text-sm">{cars.length} véhicule(s) enregistré(s)</p>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="hidden sm:table-header-group border-b border-gray-200">
                                <tr className="bg-gray-50/80">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-16">#</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nom</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Adresse</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Prix/Jour</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Disponibilité</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {cars.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-16 text-center">
                                            <div className="max-w-sm mx-auto">
                                                <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                                                    <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Aucun véhicule</h3>
                                                <p className="text-gray-400 text-sm">Vos véhicules apparaîtront ici une fois ajoutés à votre catalogue.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    cars.map((car, index) => (
                                        <tr key={car.id || index} className="hover:bg-blue-50/30 transition-colors duration-200 group">
                                            {/* Mobile Card View */}
                                            <td className="sm:hidden px-6 py-5" colSpan={5}>
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-20 h-14 rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                                                            <img
                                                                src={car?.images?.[0] || "/placeholder-car.png"}
                                                                alt={car?.title || "Car"}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    e.target.src = "/placeholder-car.png";
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-bold text-gray-900 truncate">{car?.title || "Sans titre"}</p>
                                                            <p className="text-sm text-gray-500">{car?.address || "N/A"}</p>
                                                            <div className="flex items-center justify-between mt-2">
                                                                <span className="text-xl font-bold text-gray-900">{currency}{car?.price?.toLocaleString() || "0"}<span className="text-sm text-gray-400 font-normal">/jour</span></span>
                                                                <div className="flex items-center gap-2">
                                                                    <span className={`text-xs font-semibold ${car?.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                                                                        {car?.isAvailable ? "Disponible" : "Indisponible"}
                                                                    </span>
                                                                    <label className='relative inline-flex items-center cursor-pointer'>
                                                                        <input
                                                                            onChange={()=>toggleAvailability(car.id) }
                                                                            type="checkbox" 
                                                                            className='sr-only peer' 
                                                                            checked={car?.isAvailable || false} 
                                                                        />
                                                                        <div className='w-10 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors duration-200'></div>
                                                                        <span className='absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4 shadow-sm' />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Desktop Table Cells */}
                                            <td className="hidden sm:table-cell px-6 py-5 text-sm text-gray-400 font-medium">
                                                #{index + 1}
                                            </td>

                                            <td className="hidden sm:table-cell px-6 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-12 rounded-xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                                                        <img
                                                            src={car?.images?.[0] || "/placeholder-car.png"}
                                                            alt={car?.title || "Car"}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.target.src = "/placeholder-car.png";
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="font-semibold text-gray-900 line-clamp-2 max-w-[200px]">{car?.title || "Sans titre"}</span>
                                                </div>
                                            </td>

                                            <td className="hidden sm:table-cell px-6 py-5">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="text-gray-700">{car?.address || "N/A"}</span>
                                                </div>
                                            </td>

                                            <td className="hidden sm:table-cell px-6 py-5">
                                                <span className="text-lg font-bold text-gray-900">{currency}{car?.price?.toLocaleString() || "0"}<span className="text-sm text-gray-400 font-normal">/jour</span></span>
                                            </td>

                                            <td className="hidden sm:table-cell px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                                                        car?.isAvailable 
                                                            ? 'bg-green-50 text-green-700 border border-green-200' 
                                                            : 'bg-red-50 text-red-700 border border-red-200'
                                                    }`}>
                                                        <span className={`w-2 h-2 rounded-full ${car?.isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                        {car?.isAvailable ? "Disponible" : "Indisponible"}
                                                    </span>
                                                    <label className='relative inline-flex items-center cursor-pointer'>
                                                        <input
                                                            onChange={()=>toggleAvailability(car.id) }
                                                            type="checkbox" 
                                                            className='sr-only peer' 
                                                            checked={car?.isAvailable || false} 
                                                        />
                                                        <div className='w-10 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors duration-200'></div>
                                                        <span className='absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4 shadow-sm' />
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    {cars.length > 0 && (
                        <div className="px-8 py-5 border-t border-gray-100 flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                Affichage de <span className="font-semibold text-gray-900">{cars.length}</span> véhicule(s)
                            </p>
                            <div className="flex gap-2">
                                <button className="px-4 py-2.5 text-sm font-medium text-white bg-blue-500 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-200 hover:bg-blue-600 active:scale-[0.98]">
                                    Précédent
                                </button>
                                <button className="px-4 py-2.5 text-sm font-medium text-white bg-blue-500 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-200 hover:bg-blue-600 active:scale-[0.98]">
                                    Suivant
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
export default ListCar;