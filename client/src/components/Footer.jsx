import React from 'react'

const Footer = () => {
  return (
   <footer className=" rounded-lg shadow bg-transparent m-4 w-full">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy;{new Date().getFullYear()} <a href="#" className="hover:underline">E² Bond™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer