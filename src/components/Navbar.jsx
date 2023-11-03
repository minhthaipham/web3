import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from '../context';
import { search, suben } from '../assets';

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);
const Navbar = () => {
  const { connect, address, disconnect } = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(isDropdownOpen);
  const openDropdown = () => {
    setIsDropdownOpen(true);
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  }



  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4"

    >
      <Link to="/">
        <div className='md:mr-8'>
          <img src={suben} alt="logo" className=" cursor-pointer rounded-full w-16" />
        </div>
      </Link>
      <div className="lg:flex-1 flex flex-row max-w-[300px] py-2 pl-4 pr-2 h-[52px] bg-gray-200 rounded-[100px]">
        <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] bg-transparent outline-none" />
        <div className="w-[72px] h-full rounded-[20px]  flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain " />
        </div>
      </div>
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* <img src={suben} alt="logo" className="w-5 cursor-pointer" /> */}
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        {
          address ? (
            <div className="relative">

              <li className="" onClick={
                openDropdown
              }>
                <img src="https://i.pinimg.com/564x/21/57/d6/2157d676fd3d3be4ab97466d6b2d9e70.jpg" alt="user"
                  className='rounded-full w-10 h-10 object-cover cursor-pointer'
                />
              </li>
              {isDropdownOpen && (
                <div className='absolute top-0 right-0'
                >
                  <ul className='bg-white rounded-md shadow-lg text-black'>
                    <Link to='/profile'
                      onClick={closeDropdown}
                    >
                      <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Profile</li>
                    </Link>
                    <li
                      className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                      onClick={() => {
                        disconnect();
                        closeDropdown();
                      }}
                    >Disconnect</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <li
              onClick={() => connect()}
              className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
              Connect Wallet
            </li>
          )
        }
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar