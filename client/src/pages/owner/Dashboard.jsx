import React, { useEffect, useState } from 'react'
import { assets} from '../../assets/data'
import { useUser } from "@clerk/clerk-react"
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
    const {axios, getToken, user, currency} = useAppContext()
    const [dashboardData, setDashboardData] = useState({
        bookings: [],
        totalBookings: 0,
        totalRevenue: 0,
    })
    const [totalCars, setTotalCars] = useState(0)
    const [error, setError] = useState(null)

    const getDashboardData = async() => {
        try {
            const { data } = await axios.get('/api/bookings/agency', {
                headers: {
                    Authorization: `Bearer ${await getToken()}`
                }
            });
            if (data.success) {
                setDashboardData(data.dashboardData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    };

    const markBookingAsPaid = async (bookingId) => {
        try {
            const { data } = await axios.post('/api/bookings/mark-paid', { bookingId }, {
                headers: { Authorization: `Bearer ${await getToken()}` }
            })
            if (data.success) {
                toast.success(data.message)
                getDashboardData()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if(user){
            getDashboardData();
        }
    }, [user])

    if (!user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Chargement...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 max-w-md text-center">
                    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Erreur</h2>
                    <p className="text-red-600">{error}</p>
                </div>
            </div>
        )
    }

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
                                Tableau de bord
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Vue d'<span className="text-blue-400">ensemble</span>
                            </h1>
                            <p className="text-lg text-slate-300 mt-2 max-w-xl">
                                Suivez vos performances, vos réservations et gérez votre activité en temps réel.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/20">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/30 flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Bienvenue,</p>
                                <p className="text-sm font-semibold">{user?.firstName || user?.username || "Admin"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">

                {/* ===== STATISTIQUES ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 -mt-24 relative z-20">
                    {[
                        { 
                            number: dashboardData?.totalRevenue?.toLocaleString() || "0", 
                            label: "Gains totaux", 
                            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                            color: "blue",
                            bg: "bg-blue-50",
                            text: "text-blue-600",
                            border: "border-blue-200",
                            showCurrency: true
                        },
                        { 
                            number: dashboardData?.totalBookings?.toLocaleString() || "0", 
                            label: "Réservations", 
                            icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                            color: "emerald",
                            bg: "bg-emerald-50",
                            text: "text-emerald-600",
                            border: "border-emerald-200",
                            showCurrency: false
                        },
                        { 
                            number: totalCars.toLocaleString(), 
                            label: "Voitures listées", 
                            icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
                            color: "amber",
                            bg: "bg-amber-50",
                            text: "text-amber-600",
                            border: "border-amber-200",
                            showCurrency: false
                        }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-xl ${stat.bg} ${stat.border} border flex items-center justify-center shrink-0`}>
                                    <svg className={`w-7 h-7 ${stat.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">{stat.number}{stat.showCurrency ? <span className="text-lg text-gray-400 ml-1">{currency}</span> : null}</div>
                                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ===== TABLEAU DES RÉSERVATIONS ===== */}
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
                                <h2 className="text-lg font-bold">Réservations récentes</h2>
                                <p className="text-slate-400 text-sm">{dashboardData.bookings.length} réservation(s)</p>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="hidden sm:table-header-group border-b border-gray-200">
                                <tr className="bg-gray-50/80">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-16">#</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Voiture</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Période</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Montant</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Statut</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {dashboardData.bookings.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-16 text-center">
                                            <div className="max-w-sm mx-auto">
                                                <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                                                    <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Aucune réservation</h3>
                                                <p className="text-gray-400 text-sm">Les réservations apparaîtront ici dès que vos clients effectueront des locations.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    dashboardData.bookings.map((booking, index) => (
                                        <tr key={booking.id || index} className="hover:bg-blue-50/30 transition-colors duration-200 group">
                                            {/* Mobile Card View */}
                                            <td className="sm:hidden px-6 py-5" colSpan={5}>
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-20 h-14 rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                                                            <img
                                                                src={booking?.carRef?.images?.[0]}
                                                                alt={booking?.carRef?.title || "Voiture"}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='56'%3E%3Crect width='80' height='56' rx='8' fill='%23f1f5f9'/%3E%3Cpath d='M30 28h20M40 22v12' stroke='%23cbd5e1' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E";
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-bold text-gray-900 truncate">{booking?.carRef?.title || "N/A"}</p>
                                                            <p className="text-sm text-gray-500">
                                                                {booking?.pickUpDate ? new Date(booking.pickUpDate).toLocaleDateString('fr-FR') : "N/A"} au{" "}
                                                                {booking?.dropOffDate ? new Date(booking.dropOffDate).toLocaleDateString('fr-FR') : "N/A"}
                                                            </p>
                                                            <div className="flex items-center justify-between mt-2">
                                                                <span className="text-xl font-bold text-gray-900">{currency}{booking?.totalPrice?.toLocaleString() || "0"}</span>
                                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                                                    booking?.isPaid 
                                                                        ? 'bg-green-50 text-green-700 border border-green-200' 
                                                                        : 'bg-red-50 text-red-700 border border-red-200'
                                                                }`}>
                                                                    <span className={`w-1.5 h-1.5 rounded-full ${booking?.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                                    {booking?.isPaid ? "Payé" : "Non Payé"}
                                                                </span>
                                                            </div>
                                                            {!booking?.isPaid && (
                                                                <button
                                                                    onClick={() => markBookingAsPaid(booking.id)}
                                                                    className='mt-2 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30'
                                                                >
                                                                    Marquer comme payé
                                                                </button>
                                                            )}
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
                                                            src={booking?.carRef?.images?.[0]}
                                                            alt={booking?.carRef?.title || "Voiture"}
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='48'%3E%3Crect width='64' height='48' rx='8' fill='%23f1f5f9'/%3E%3Cpath d='M24 24h16M32 18v12' stroke='%23cbd5e1' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E";
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="font-semibold text-gray-900 line-clamp-2 max-w-[200px]">{booking?.carRef?.title || "N/A"}</span>
                                                </div>
                                            </td>

                                            <td className="hidden sm:table-cell px-6 py-5">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <div>
                                                        <p className="font-medium text-gray-800">
                                                            {booking?.pickUpDate ? new Date(booking.pickUpDate).toLocaleDateString('fr-FR') : "N/A"}
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            au {booking?.dropOffDate ? new Date(booking.dropOffDate).toLocaleDateString('fr-FR') : "N/A"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="hidden sm:table-cell px-6 py-5">
                                                <span className="text-lg font-bold text-gray-900">{currency}{booking?.totalPrice?.toLocaleString() || "0"}</span>
                                            </td>

                                            <td className="hidden sm:table-cell px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                                                        booking?.isPaid 
                                                            ? 'bg-green-50 text-green-700 border border-green-200' 
                                                            : 'bg-red-50 text-red-700 border border-red-200'
                                                    }`}>
                                                        <span className={`w-2 h-2 rounded-full ${booking?.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                        {booking?.isPaid ? "Payé" : "Non Payé"}
                                                    </span>
                                                    {!booking?.isPaid && (
                                                        <button
                                                            onClick={() => markBookingAsPaid(booking.id)}
                                                            className='px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30'
                                                        >
                                                            Marquer payé
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    {dashboardData.bookings.length > 0 && (
                        <div className="px-8 py-5 border-t border-gray-100 flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                Affichage de <span className="font-semibold text-gray-900">{dashboardData.bookings.length}</span> réservation(s)
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
    )
}

export default Dashboard