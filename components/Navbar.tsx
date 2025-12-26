import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  <nav className="flex justify-between items-center p-4 px-10">
    {/* logo */}
    <h1 className="font-anton">Logo</h1>
    {/* menu items */}
    <ul className="flex space-x-4">
      <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>  
        <Link href="/contact"><li>Contact</li></Link>
    </ul>
  </nav>
  )
}

export default Navbar