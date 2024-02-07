import { CarProps } from '@/types'
import React from 'react'
import { useState } from 'react'

interface CarCardProps {
  car : CarProps;
}

const CarCard = ( {car}: CarCardProps ) => {

  const { city_mpg, combination_mpg, cylinders, displacement, drive, fuel_type, highway_mpg, make, model, transmission, year} = car;
  return (
    <div className='bg-blue-600 text-white text-center w-[300px] py-[50px] rounded-3xl' >
      {make} : {model} {year} : {transmission} <br />
      <div>
        {Object.entries(car).map(([key, value]) => (
          <div>
            <h1>{key} : {value};</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarCard