import React from 'react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1);
   } // This will navigate back one step in the history
  return (
    <div className='px-3 w-full flex items-center justify-center'>
      <div className=" my-[30px] w-full flex items-center flex-col justify-center lg:w-[800px] bg-[#F3F3F3] py-16 px-4 lg:px-16 rounded-[20px]">
        <img src="https://www.bronzinolaw.com/wp-content/uploads/Municipal_Court_Case_BL.jpg" className='w-[450px] h-[475px] object-cover' alt="" />
        <div className='my-4 w-full bg-[#E3DBC8] py-[17px] px-[33px] border border-[#A16025]'>
          <ul className=' list-disc'>
            <li className=' font-medium'>Cocktail</li>
            <li className=' font-medium'>Recettes (comment faire sa liqueur dans sa cave)</li>
            <li className=' font-medium'>Découvertes</li>
            <li className=' font-medium'>Meilleures/pires idées</li>
            <li className=' font-medium'>Rencontre autour d'un verre (dégustations)</li>
            <li className=' font-medium'>VDM like</li>
          </ul>
        </div>
        <div className='flex items-center justify-center mt-4 w-full'>
          <button onClick={handleGoBack} className='bg-[#686868] px-6 py-2 rounded-[10px] flex items-center gap-1 text-white'>
            Back <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.9925 19.4933C16.264 19.4933 19.7897 15.9676 19.7897 11.7037C19.7897 7.43973 16.2565 3.91406 11.985 3.91406C7.72102 3.91406 4.20288 7.43973 4.20288 11.7037C4.20288 15.9676 7.72855 19.4933 11.9925 19.4933ZM11.9925 17.9414C8.53463 17.9414 5.76985 15.1616 5.76985 11.7037C5.76985 8.24581 8.53463 5.47349 11.985 5.47349C15.4428 5.47349 18.2227 8.24581 18.2302 11.7037C18.2378 15.1616 15.4504 17.9414 11.9925 17.9414ZM8.10522 11.7037C8.10522 11.9146 8.18809 12.0804 8.35383 12.2461L10.9077 14.7623C11.0357 14.8828 11.1864 14.9506 11.3672 14.9506C11.7213 14.9506 11.9774 14.6794 11.9774 14.3253C11.9774 14.137 11.9021 13.9788 11.7816 13.8658L10.8625 12.9919L10.0187 12.3139L11.5631 12.3817H15.2394C15.6236 12.3817 15.8948 12.0879 15.8948 11.7037C15.8948 11.3119 15.6236 11.0257 15.2394 11.0257H11.5631L10.0263 11.101L10.87 10.4155L11.7816 9.54157C11.8946 9.42857 11.9774 9.27037 11.9774 9.08203C11.9774 8.72796 11.7213 8.46429 11.3672 8.46429C11.1864 8.46429 11.0357 8.52455 10.9077 8.64509L8.35383 11.1688C8.18056 11.3345 8.10522 11.5003 8.10522 11.7037Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Details