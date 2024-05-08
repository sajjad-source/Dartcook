import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

// Button component taken from material-tailwind

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navData = [
    { title: 'Home', link: '/' },
    { title: 'New Post', link: '/posts/new' },
  ];

  return (
    <div className="text-black">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <a href="/" className="flex-shrink-0">
          <img src="/dartmeet.png" alt="Dartmeet" className="w-28 h-28 rounded-full" />
        </a>
        <div className="hidden md:flex gap-8">
          {navData.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className="hover:text-blue-300 text-lg"
              onClick={() => setToggleMenu(false)}
            >
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#E6E6E6] text-slate-600 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                {item.title}
              </button>
            </NavLink>
          ))}
        </div>
        <button type="button" className="md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-full bg-slate-900 z-50 flex flex-col items-center justify-center">
            {navData.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className="text-white text-xl py-2"
                onClick={() => setToggleMenu(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
