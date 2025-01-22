import React from 'react'

function Footer() {
  return (

<footer className="bg-teal-50 shadow relative bottom-0">
    <div className="w-full mx-auto my-1 p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-blue-600 sm:text-center">© 2023 <a href="https://emxample.com/" className="hover:underline">Team™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0 text-blue-600">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 hover:text-blue-800">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 hover:text-blue-800">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 hover:text-blue-800">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline hover:text-blue-800">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer