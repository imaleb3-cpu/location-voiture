import React, { useState, useCallback } from 'react'
import { assets } from '../../assets/data'
import { useAppContext } from '../../context/AppContext'
import toast from "react-hot-toast"

// Composant réutilisable pour les inputs
const InputField = ({ label, error, children, required = false }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        {children}
        {error && <span className="text-xs text-red-500 mt-0.5">{error}</span>}
    </div>
);

// Composant pour les champs texte
const TextInput = ({ value, onChange, placeholder, type = "text", icon, ...props }) => (
    <div className="relative">
        {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                {icon}
            </div>
        )}
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl 
                       text-sm text-gray-800 placeholder-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400
                       transition-all duration-200 shadow-sm hover:border-gray-300
                       ${icon ? 'pl-11' : ''}`}
            {...props}
        />
    </div>
);

// Composant pour les selects
const SelectField = ({ value, onChange, options, placeholder, icon, ...props }) => (
    <div className="relative">
        {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                {icon}
            </div>
        )}
        <select
            value={value}
            onChange={onChange}
            className={`w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl 
                       text-sm text-gray-800 appearance-none cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400
                       transition-all duration-200 shadow-sm hover:border-gray-300
                       ${icon ? 'pl-11' : ''} pr-10`}
            {...props}
        >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 9l6 6 6-6"/>
            </svg>
        </div>
    </div>
);

// Icônes SVG réutilisables
const Icons = {
    user: (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="currentColor"/>
        </svg>
    ),
    email: (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="currentColor"/>
        </svg>
    ),
    phone: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    ),
    car: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/>
            <circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>
        </svg>
    ),
    fuel: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 22v-6h18v6M3 10V4h18v6M3 16h18"/>
        </svg>
    ),
    gauge: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2v4M12 18a6 6 0 0 0 6-6c0-1-.5-2-1.5-2.5L12 6l-4.5 3.5C6.5 10 6 11 6 12a6 6 0 0 0 6 6z"/>
        </svg>
    ),
    seat: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 18v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>
            <path d="M8 18V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"/>
            <path d="M4 14h16"/>
        </svg>
    ),
    dollar: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
    ),
    settings: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
    ),
    image: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
        </svg>
    )
};

const AddCar = () => {
    const { axios, getToken } = useAppContext()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})

    const [images, setImages] = useState({ 1: null, 2: null, 3: null, 4: null });

    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        city: "",
        country: "",
        address: "",
        odometer: "",
        bodyType: "",
        priceRente: "",
        priceSale: "",
        Transmissions: "",
        seats: "",
        fuelType: "",
        features: {
            "Caméra de recul": false,
            "Apple CarPlay": false,
            "Accès sans clé": false,
            "Régulateur adaptatif": false,
            "Sièges chauffants": false,
            "Toit ouvrant": false,
            "Aide au stationnement": false,
            "Régulateur de vitesse": false,
        },
    })

    const bodyTypes = ["SUV", "Sedan", "Hatchback", "Coupe", "Convertible", "Van", "Grand Tourer"]
    const TransmissionsList = ["Automatique", "Manuelle", "CVT", "Double embrayage"]
    const fuelTypes = ["Essence", "Diesel", "Électrique", "Hybride"]

    const updateField = useCallback((field, value) => {
        setInputs(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => { const n = { ...prev }; delete n[field]; return n; })
        }
    }, [errors])

    const updateFeature = useCallback((feature) => {
        setInputs(prev => ({
            ...prev,
            features: { ...prev.features, [feature]: !prev.features[feature] }
        }))
    }, [])

    const handleImageChange = useCallback((key, file) => {
        if (file && !file.type.startsWith('image/')) {
            toast.error("Veuillez sélectionner une image valide.")
            return
        }
        setImages(prev => ({ ...prev, [key]: file }))
        if (errors.images) {
            setErrors(prev => { const n = { ...prev }; delete n.images; return n; })
        }
    }, [errors])

    const validate = () => {
        const newErrors = {}
        const requiredFields = {
            title: "Le nom du véhicule est requis",
            description: "La description est requise",
            city: "La ville est requise",
            country: "Le pays est requis",
            address: "L'adresse est requise",
            odometer: "Le kilométrage est requis",
            bodyType: "Le type de véhicule est requis",
            priceRente: "Le prix de location est requis",
            Transmissions: "La transmission est requise",
            seats: "Le nombre de sièges est requis",
            fuelType: "Le type de carburant est requis"
        }

        Object.entries(requiredFields).forEach(([field, message]) => {
            if (!inputs[field] || inputs[field].toString().trim() === "") {
                newErrors[field] = message
            }
        })

        if (inputs.odometer && (isNaN(inputs.odometer) || Number(inputs.odometer) < 0)) {
            newErrors.odometer = "Le kilométrage doit être un nombre positif"
        }
        if (inputs.priceRente && (isNaN(inputs.priceRente) || Number(inputs.priceRente) <= 0)) {
            newErrors.priceRente = "Le prix doit être un nombre positif"
        }
        if (inputs.seats && (isNaN(inputs.seats) || Number(inputs.seats) < 1 || Number(inputs.seats) > 50)) {
            newErrors.seats = "Le nombre de sièges doit être entre 1 et 50"
        }

        const hasImage = Object.values(images).some(img => img !== null)
        if (!hasImage) {
            newErrors.images = "Veuillez télécharger au moins une image."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        if (!validate()) {
            toast.error("Veuillez corriger les erreurs du formulaire.")
            return
        }

        setLoading(true)

        try {
            const formData = new FormData()
            formData.append("title", inputs.title.trim());
            formData.append("description", inputs.description.trim());
            formData.append("city", inputs.city.trim());
            formData.append("country", inputs.country.trim());
            formData.append("address", inputs.address.trim());
            formData.append("odometer", Number(inputs.odometer));
            formData.append("bodyType", inputs.bodyType);
            formData.append("transmission", inputs.Transmissions);
            formData.append("seats", Number(inputs.seats));
            formData.append("fuelType", inputs.fuelType);
            formData.append("price", Number(inputs.priceRente))
            if (inputs.priceSale) formData.append("priceSale", Number(inputs.priceSale))

            const features = Object.keys(inputs.features).filter(key => inputs.features[key])
            formData.append("features", JSON.stringify(features))

            Object.keys(images).forEach((key) => {
                images[key] && formData.append("images", images[key])
            })

            const { data } = await axios.post('/api/cars', formData, {
                headers: {
                    Authorization: `Bearer ${await getToken()}`
                }
            });

            if (data.success) {
                toast.success(data.message || "Véhicule ajouté avec succès !")
                setInputs({
                    title: "", description: "", city: "", country: "", address: "",
                    odometer: "", bodyType: "", priceRente: "", priceSale: "",
                    Transmissions: "", seats: "", fuelType: "",
                    features: Object.keys(inputs.features).reduce((acc, key) => ({ ...acc, [key]: false }), {})
                });
                setImages({ 1: null, 2: null, 3: null, 4: null })
                setErrors({})
            } else {
                toast.error(data.message || "Une erreur s'est produite.")
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Erreur de connexion.")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20">

            {/* ===== HERO SECTION ===== */}
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-blue-300 text-xs font-semibold rounded-full mb-6 border border-white/20">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Administration
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                        Ajouter un <span className="text-blue-400">véhicule</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Remplissez les informations ci-dessous pour ajouter un nouveau véhicule à votre flotte.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

                <form onSubmit={onSubmitHandler} className="space-y-8">

                    {/* ===== SECTION INFORMATIONS GÉNÉRALES ===== */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Informations générales</h2>
                                    <p className="text-sm text-gray-400">Détails de base du véhicule</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="md:col-span-2">
                                    <InputField label="Nom du véhicule" required error={errors.title}>
                                        <TextInput
                                            value={inputs.title}
                                            onChange={(e) => updateField('title', e.target.value)}
                                            placeholder="Ex: Mercedes-Benz Classe C 2023"
                                            icon={Icons.user}
                                        />
                                    </InputField>
                                </div>

                                <div className="md:col-span-2">
                                    <InputField label="Description" required error={errors.description}>
                                        <textarea
                                            value={inputs.description}
                                            onChange={(e) => updateField('description', e.target.value)}
                                            rows={4}
                                            placeholder="Décrivez le véhicule, son état, ses particularités..."
                                            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl 
                                                       text-sm text-gray-800 placeholder-gray-300 resize-none
                                                       focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400
                                                       transition-all duration-200 shadow-sm hover:border-gray-300"
                                        />
                                    </InputField>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== SECTION LOCALISATION ===== */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Localisation</h2>
                                    <p className="text-sm text-gray-400">Où se trouve le véhicule ?</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                <InputField label="Ville" required error={errors.city}>
                                    <TextInput
                                        value={inputs.city}
                                        onChange={(e) => updateField('city', e.target.value)}
                                        placeholder="Ex: Casablanca"
                                        icon={Icons.user}
                                    />
                                </InputField>

                                <InputField label="Pays" required error={errors.country}>
                                    <TextInput
                                        value={inputs.country}
                                        onChange={(e) => updateField('country', e.target.value)}
                                        placeholder="Ex: Maroc"
                                        icon={Icons.user}
                                    />
                                </InputField>

                                <InputField label="Adresse" required error={errors.address}>
                                    <TextInput
                                        value={inputs.address}
                                        onChange={(e) => updateField('address', e.target.value)}
                                        placeholder="Ex: 123 Boulevard Mohammed V"
                                        icon={Icons.user}
                                    />
                                </InputField>
                            </div>
                        </div>
                    </div>

                    {/* ===== SECTION CARACTÉRISTIQUES TECHNIQUES ===== */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Caractéristiques techniques</h2>
                                    <p className="text-sm text-gray-400">Spécifications du véhicule</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                <InputField label="Type de carrosserie" required error={errors.bodyType}>
                                    <SelectField
                                        value={inputs.bodyType}
                                        onChange={(e) => updateField('bodyType', e.target.value)}
                                        options={bodyTypes}
                                        placeholder="Sélectionnez un type"
                                        icon={Icons.car}
                                    />
                                </InputField>

                                <InputField label="Transmission" required error={errors.Transmissions}>
                                    <SelectField
                                        value={inputs.Transmissions}
                                        onChange={(e) => updateField('Transmissions', e.target.value)}
                                        options={TransmissionsList}
                                        placeholder="Sélectionnez la transmission"
                                        icon={Icons.settings}
                                    />
                                </InputField>

                                <InputField label="Type de carburant" required error={errors.fuelType}>
                                    <SelectField
                                        value={inputs.fuelType}
                                        onChange={(e) => updateField('fuelType', e.target.value)}
                                        options={fuelTypes}
                                        placeholder="Sélectionnez le carburant"
                                        icon={Icons.fuel}
                                    />
                                </InputField>

                                <InputField label="Kilométrage (km)" required error={errors.odometer}>
                                    <TextInput
                                        type="number"
                                        value={inputs.odometer}
                                        onChange={(e) => updateField('odometer', e.target.value)}
                                        placeholder="Ex: 25000"
                                        min="0"
                                        icon={Icons.gauge}
                                    />
                                </InputField>

                                <InputField label="Nombre de sièges" required error={errors.seats}>
                                    <TextInput
                                        type="number"
                                        value={inputs.seats}
                                        onChange={(e) => updateField('seats', e.target.value)}
                                        placeholder="Ex: 5"
                                        min="1"
                                        max="50"
                                        icon={Icons.seat}
                                    />
                                </InputField>

                                <InputField label="Prix de location /jour (MAD)" required error={errors.priceRente}>
                                    <div className="relative">
                                        <TextInput
                                            type="number"
                                            value={inputs.priceRente}
                                            onChange={(e) => updateField('priceRente', e.target.value)}
                                            placeholder="Ex: 450"
                                            min="0"
                                            icon={Icons.dollar}
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm font-medium pointer-events-none">MAD</span>
                                    </div>
                                </InputField>

                                <InputField label="Prix de vente (MAD)" error={errors.priceSale}>
                                    <div className="relative">
                                        <TextInput
                                            type="number"
                                            value={inputs.priceSale}
                                            onChange={(e) => updateField('priceSale', e.target.value)}
                                            placeholder="Ex: 250000 (optionnel)"
                                            min="0"
                                            icon={Icons.dollar}
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm font-medium pointer-events-none">MAD</span>
                                    </div>
                                </InputField>
                            </div>
                        </div>
                    </div>

                    {/* ===== SECTION ÉQUIPEMENTS ===== */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Équipements & Options</h2>
                                    <p className="text-sm text-gray-400">Sélectionnez les équipements disponibles</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {Object.keys(inputs.features).map((feature) => (
                                    <label
                                        key={feature}
                                        className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                                            ${inputs.features[feature] 
                                                ? 'border-blue-500 bg-blue-50/50' 
                                                : 'border-gray-200 hover:border-gray-300 bg-white'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={inputs.features[feature]}
                                            onChange={() => updateFeature(feature)}
                                            className="sr-only"
                                        />
                                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200
                                            ${inputs.features[feature]
                                                ? 'bg-blue-500 border-blue-500'
                                                : 'border-gray-300'
                                            }`}>
                                            {inputs.features[feature] && (
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className={`text-sm font-medium ${inputs.features[feature] ? 'text-blue-900' : 'text-gray-700'}`}>
                                            {feature}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ===== SECTION IMAGES ===== */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-rose-500 to-red-500"></div>
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Photos du véhicule</h2>
                                    <p className="text-sm text-gray-400">Ajoutez jusqu'à 4 images (minimum 1 requise)</p>
                                </div>
                            </div>

                            {errors.images && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-600 text-sm">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {errors.images}
                                </div>
                            )}

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {Object.keys(images).map((key) => (
                                    <label
                                        key={key}
                                        htmlFor={`carImages${key}`}
                                        className={`relative group cursor-pointer aspect-square rounded-2xl border-2 border-dashed 
                                            flex flex-col items-center justify-center overflow-hidden transition-all duration-300
                                            ${images[key] 
                                                ? 'border-blue-400 bg-blue-50/30' 
                                                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50 bg-gray-50/50'
                                            }`}
                                    >
                                        <input
                                            onChange={(e) => handleImageChange(key, e.target.files[0])}
                                            type="file"
                                            accept="image/*"
                                            id={`carImages${key}`}
                                            hidden
                                        />

                                        {images[key] ? (
                                            <>
                                                <img
                                                    src={URL.createObjectURL(images[key])}
                                                    alt={`Aperçu ${key}`}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <span className="text-white text-sm font-medium">Modifier</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setImages(prev => ({ ...prev, [key]: null }))
                                                    }}
                                                    className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center
                                                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm"
                                                >
                                                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </>
                                        ) : (
                                            <div className="flex flex-col items-center gap-2 p-4 text-gray-400 group-hover:text-blue-500 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </div>
                                                <span className="text-xs font-medium text-center">Image {key}</span>
                                            </div>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ===== BOUTONS DE SOUMISSION ===== */}
                    <div className="flex items-center justify-end gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => {
                                setInputs({
                                    title: "", description: "", city: "", country: "", address: "",
                                    odometer: "", bodyType: "", priceRente: "", priceSale: "",
                                    Transmissions: "", seats: "", fuelType: "",
                                    features: Object.keys(inputs.features).reduce((acc, key) => ({ ...acc, [key]: false }), {})
                                });
                                setImages({ 1: null, 2: null, 3: null, 4: null });
                                setErrors({});
                            }}
                            className="px-6 py-3.5 text-sm font-semibold text-gray-600 bg-white border border-gray-300 
                                       rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 shadow-sm"
                        >
                            Réinitialiser
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-3.5 text-sm font-semibold text-white bg-blue-500 rounded-xl
                                       hover:bg-blue-600 active:scale-[0.98] transition-all duration-200
                                       disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100
                                       shadow-lg shadow-blue-500/25 flex items-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Ajout en cours...
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Ajouter le véhicule
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCar;