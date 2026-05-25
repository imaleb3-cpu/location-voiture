import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { assets, cities } from '../assets/data'
import Title from './Title'
import Item from './Item'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { useAppContext } from '../context/AppContext'

const FeaturedCars = () => {
  const {cars} = useAppContext()
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    //const data = cars.filter((car) => cities.includes(car.city))
    setFeatured(cars)
  }, [cars])

  return (
    <section className='bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/20 py-16 xl:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <Title
          title1={"Votre prochaine voiture vous attend"}
          title2={"Roulez en toute simplicité"}
          titleStyles={"mb-10"}
        />
        <div className='flex items-center justify-between mt-8 mb-6'>
          <h5 className='text-gray-500 text-sm'>
            <span className='font-bold text-gray-900'>Affichage de 1 à 6</span>
            {" "}sur 3 000 annonces
          </h5>
          <Link
            to={'/listing'}
            onClick={() => scrollTo(0, 0)}
            className='bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-3 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0'
          >
            <img src={assets.sliders} alt="" className='invert w-5 h-5' />
          </Link>
        </div>

        {/* CARROUSEL */}
        <Swiper
          spaceBetween={24}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: { slidesPerView: 2, spaceBetween: 24 },
            1124: { slidesPerView: 3, spaceBetween: 24 },
            1300: { slidesPerView: 4, spaceBetween: 24 },
          }}
          modules={[Autoplay]}
          className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
        >
          {featured.slice(0, 6).map((car) => (
            <SwiperSlide key={car.id} className='w-full'>
              <Item car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default FeaturedCars