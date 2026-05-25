import React, {useEffect, useState} from 'react'

const CarImages = ({car}) => {
    const [image, setImage] = useState(null)

    useEffect(()=>{
        if(car){
            setImage(car.images[0])
        }
    }, [car])

  return (
    <div className='flex flex-col gap-5'>
        {/* MAIN IMAGE */}
        <div className='bg-white rounded-3xl overflow-hidden flexCenter w-full h-[244px] lg:h-[322px] shadow-xl shadow-gray-200/50 border border-gray-100 group'>
            <img src={image} alt="" loading='eager' className='max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700' />
        </div>
        {/* THUMBNAILS GRID */}
        <div className='grid grid-cols-2 gap-5'>
            {car.images.map((item, index)=>(
                <button 
                    key={index} 
                    onClick={()=> setImage(item)} 
                    type='button' 
                    className={`bg-white rounded-3xl overflow-hidden flexCenter w-full h-[111px] lg:h-[122px] transition-all duration-300 shadow-lg shadow-gray-200/40 border border-gray-100 ${item === image ? "ring-2 ring-blue-500 scale-[102%]" : "hover:shadow-xl hover:-translate-y-1 hover:scale-[101%]"}`}
                >
                    <img src={item} alt={`thumb-${index}`} className='max-w-full max-h-full object-contain' loading='lazy' />
                </button>
            ))}
        </div>
    </div>
  )
}

export default CarImages