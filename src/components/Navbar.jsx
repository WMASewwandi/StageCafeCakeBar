import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = React.useState(false)

    // Close mobile menu on nav click
    const handleLinkClick = () => setOpen(false);

    return (
        <nav className="flex items-center text text-primary-dull justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-transparent relative z-50">

    {/* Desktop Menu (now on the left) */}
    <div className="hidden sm:flex items-center gap-8">

        {/* Sign in Button */}
        <button className="cursor-pointer px-8 py-3 bg-white hover:bg-secondary transition text-black font-bold rounded-full text-sm">
            Sign in
        </button>


        <NavLink to='/' className="hover:text-orange-500">Home</NavLink>
        <NavLink to='/onlineMenu' className="hover:text-orange-500">Online Menu</NavLink>
        <NavLink to='/catering' className="hover:text-orange-500">Catering</NavLink>
        <NavLink to='/cakes' className="hover:text-orange-500">Cakes</NavLink>
        <NavLink to='/aboutUs' className="hover:text-orange-500">About Us</NavLink>
        <NavLink to='/contact' className="hover:text-orange-500">Contact</NavLink>

        {/* Search Input */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Items" />
            <svg width="16" height="16" fill="none" stroke="#7A7B7D" viewBox="0 0 16 16">
                <path d="M10.836 10.615 15 14.695" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        {/* Cart */}
        <div className="relative cursor-pointer">
            <MdShoppingCart />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
        </div>

    </div>

    {/* Logo */}
    <NavLink to='/' onClick={handleLinkClick}>
        <img className="h-20" src={assets.logo1} alt="logo" />
    </NavLink>

    {/* Mobile Menu Button */}
<button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden z-50">
    <svg width="21" height="15" fill="none" viewBox="0 0 21 15">
        <rect width="21" height="1.5" rx=".75" fill="#426287" />
        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
    </svg>
</button>

{/* Mobile Menu */}
<div className={`${open ? 'flex' : 'hidden'} sm:hidden flex-col absolute top-full left-0 w-full bg-white text-black shadow-lg py-6 px-6 gap-4 text-sm z-40`}>
    <NavLink to='/' onClick={handleLinkClick}>Home</NavLink>
    <NavLink to='/onlineMenu' onClick={handleLinkClick}>Online Menu</NavLink>
    <NavLink to='/catering' onClick={handleLinkClick}>Catering</NavLink>
    <NavLink to='/cakes' onClick={handleLinkClick}>Cakes</NavLink>
    <NavLink to='/aboutUs' onClick={handleLinkClick}>About Us</NavLink>
    <NavLink to='/contact' onClick={handleLinkClick}>Contact</NavLink>
    <button className="cursor-pointer px-6 py-2 mt-2 bg-secondary hover:bg-primary transition text-black rounded-full text-sm w-full">
        Login
    </button>
</div>

</nav>

    )
}

export default Navbar;
