import { Link, NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
   return (
      <div className="navbar text-black sticky z-[1000] top-0  bg-white shadow">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white p-3 rounded-box z-[1] mt-3 w-52 shadow">
                  <NavLink className="mt-2 px-3" to={'/'}><li className="md:mx-7 text-lg">Home</li></NavLink>
                  <NavLink className="mt-2 px-3" to={'/listed_books'}><li className="md:mx-7 text-lg">Listed Books</li></NavLink>
                  <NavLink className="mt-2 px-3" to={'/pages_to_read'}><li className="md:mx-7 text-lg">Pages to Read</li></NavLink>
               </ul>
            </div>
            <Link to={'/'}><button className="btn btn-ghost text-lg md:text-2xl md:font-bold">Book Vibe</button></Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               <NavLink className='md:mx-5' to={'/'}><li className="md:mx-3 p-1 text-lg">Home</li></NavLink>
               <NavLink className='md:mx-5' to={'/listed_books'}><li className="md:mx-3 p-1 text-lg">Listed Books</li></NavLink>
               <NavLink className='md:mx-5' to={'/pages_to_read'}><li className="md:mx-3 p-1 text-lg">Pages to Read</li></NavLink>
            </ul>
         </div>
         <div className="navbar-end text-xs md:text-base">
            <button className="bg-green-400 hover:bg-gray-300 hover:text-black transition-colors me-3 p-2 px-3 text-white rounded">Sign In</button>
            <button className="bg-purple-500 hover:bg-gray-300 hover:text-black transition-colors p-2 px-3 text-white rounded">Sign UP</button>
         </div>
      </div>
   );
};

export default Navbar;