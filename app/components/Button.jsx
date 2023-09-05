import React from 'react'

export default function Button({ buttonName }) {
  return (
    <button className='dark:bg-action-dark bg-action-light p-5 text-lg xl:text-2xl m-4 rounded-lg dark:font-dark-font-primary dark:hover:bg-primary-dark dark:hover:text-action-dark hover:bg-secondary-light hover:text-black text-white'>{buttonName}</button>
  )
}




