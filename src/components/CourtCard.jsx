import React from 'react'
import { Link } from 'react-router-dom'
const CourtCard = ({item}) => {
  return (
    <Link to={`/details/${item?.id}`}>
      <div className='px-5 pt-5 rounded-[15px] bg-[#FE8C8C]'>
        <img src={item.image} className='h-[200px] w-full object-cover object-center' alt="" />
        <div className='pb-5 pt-2'>
          <p className='text-[16px]  text-[500]'>{item.details}</p>
        </div>
      </div>
    </Link>
  )
}

export default CourtCard