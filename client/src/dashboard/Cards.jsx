import React from 'react'

const Cards = ({no,title,desc}) => {
    return (
        <div className='h-auto p-6 border-2 border-gray-200 drop-shadow-xl rounded-md bg-white w-auto '>
            <div className='border-t-4 border-blue-600 rouded-t-md'></div>
            <h1 className='text-xl font-bold mt-6'>{no}. {title}</h1>
            <p className='mt-4'>{desc}.{' '}<a href='#' className='text-blue-600 hover:underline'> View Lessons</a></p>
            <button className='bg-blue-600 mt-4 text-white rounded-full px-3 py-2 justify-center hover:bg-blue-700'>Take Course</button>
        </div>
    )
}

export default Cards
