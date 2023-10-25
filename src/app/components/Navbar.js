import React from "react";
import Logo from "../../../public/images/demezvous.png"
import Image from "next/image";

export default function Navbar(){
    return(
        <>
        
     
<nav class="fixed w-full bg-black dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 
  <div class="flex md:order-2 ml-auto">
      <button type="button" class="text-white bg-red-500 hover:bg-gray-900 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Réservez une Date</button>        
  </div>
  
  </div>
  
</nav>


        
<div className="mt-9 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex ">
        <Image
            src={Logo}
            width={255}
            height={125}
            alt="DemezVouz Logo"  />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">De chez vous à VOUS!</span>
        </a>
        <div className="flex items-center">
        <a href="tel:+32 2 123 45 67" className="mr-6 text-xl text-black font-extrabold dark:text-white hover:underline border-solid border-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg">+32 2 123 45 67</a>
        </div>
    </div>
<nav className="bg-black border-gray-200 dark:bg-gray-900 dark:border-gray-700">

  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4  md:p-0 " aria-current="page">Accueil</a>
        </li>
        
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 md:w-auto ">Services<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
           { /* Dropdown menu */}
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-red-500 text-white">Dashboard</a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
                    <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:text-red-500 text-white">Overview</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:text-red-500 text-white">My downloads</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:text-red-500 text-white">Billing</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:text-red-500 text-white">Rewards</a>
                          </li>
                        </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-red-500 text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
        
        <li>
          <a href="prix" className="block py-2 pl-3 pr-4 text-white rounded hover:text-red-500  md:border-0 md:hover:text-red-500 md:p-0 ">Prix</a>
        </li>
        <li>
          <a href="contact" className="block py-2 pl-3 pr-4 text-white rounded hover:text-red-500  md:border-0 md:hover:text-red-500 md:p-0 ">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>

    );
}
