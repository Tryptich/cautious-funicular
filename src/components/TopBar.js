
import React from 'react';

class TopBar extends React.Component {

    render() {
        return (
            <div>
                <div class="flex items-left justify-start pt-3 pl-3">
                    <span class="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                    <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                    <span class="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                </div>
                <div class="flex">
                    <div class="pr-4">
                        <div class="flex items-center justify-center">
                            <div class="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                                <svg class="w-10 h-10 mr-1 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                                </svg>
                            UPSHELL
                        </div>
                        </div>
                    </div>
                    <div class=" pr-2">
                        <div class="box-wrapper">
                            <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                                <button class="outline-none focus:outline-none"><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                <input type="search" name="" id="" placeholder="search for images" x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                            <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                                Product
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                            <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                                Community
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </a>
                            <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                                Plans
                </a>
                        </div>
                        <div class="hidden md:flex items-center justify-center">
                            <a href="#" class="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out">Login</a>
                            <button class="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TopBar;