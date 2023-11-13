import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className='px-2 py-2 w-60  bg-transparent/20 rounded-md flex flex-row items-center'>
        <img src='/src/assets/search.png' className='h-4 w-4 mr-2' />
        <input className='bg-transparent rounded-sm text-white text-sm font-medium outline-none border-none w-full' />
      </div>
      <img src='/src/assets/user.jpg' className='h-12 w-12 rounded-full' />
    </div>
  )
}

export default SearchBar