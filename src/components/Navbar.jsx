import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate()

    // Close mobile menu on nav click
    const handleLinkClick = () => setOpen(false);

    return (
        <nav className="flex items-center text text-primary-dull justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-2 bg-transparent relative z-50">
            {/* Desktop Menu (now on the left) */}
            <div className="hidden sm:flex items-center gap-8">
                {/* Sign in Button */}
                <button onClick={() => navigate('/login')} className="cursor-pointer px-8 py-3 bg-white hover:bg-secondary transition text-black font-bold rounded-full text-sm">
                    Sign in
                </button>

                {/* Updated NavLinks with active state */}
                <NavLink 
                    to='/' 
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/onlineMenu' 
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Online Menu
                </NavLink>
                <NavLink 
                    to='/catering' 
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Catering
                </NavLink>
                <NavLink 
                    to='/cakes' 
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Cakes
                </NavLink>
                <NavLink 
                    to='/aboutUs' 
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    About Us
                </NavLink>
                <NavLink 
                    to='/contact' 
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Contact
                </NavLink>

                {/* Cart */}
                <div onClick={()=> navigate('/cart')} className="relative cursor-pointer">
                    <MdShoppingCart />
                    <button onClick={()=> navigate('/cart')} className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
                </div>
            </div>

            {/* Logo */}
            <NavLink to='/' onClick={handleLinkClick}>
                <img 
                    src={assets.logo1} 
                    alt="Stage Cafe Logo" 
                    className="h-20 mb-4 transition duration-300 dark:invert dark:brightness-200" 
                />
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
                {/* Mobile NavLinks with active state */}
                <NavLink 
                    to='/' 
                    onClick={handleLinkClick}
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/onlineMenu' 
                    onClick={handleLinkClick}
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Online Menu
                </NavLink>
                <NavLink 
                    to='/catering' 
                    onClick={handleLinkClick}
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Catering
                </NavLink>
                <NavLink 
                    to='/cakes' 
                    onClick={handleLinkClick}
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Cakes
                </NavLink>
                <NavLink 
                    to='/aboutUs' 
                    onClick={handleLinkClick}
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    About Us
                </NavLink>
                <NavLink 
                    to='/contact' 
                    onClick={handleLinkClick}
                    className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`}
                >
                    Contact
                </NavLink>
                <button 
                    className="cursor-pointer px-6 py-2 mt-2 bg-secondary hover:bg-primary transition text-black rounded-full text-sm w-full"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Navbar;