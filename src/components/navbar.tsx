'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    // Mobile menu toggle state
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const router = useRouter();
    
    
    // State to track if the header should be fixed on scroll
    const [isScrolled, setIsScrolled] = useState(false);

    // State to control the visibility of the scroll-to-top arrow
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (window.scrollY > 300) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };




    return (
        <header className={`w-full  transition-transform duration-700 ${isScrolled ? 'fixed top-0 z-50 bg-slate-900' : 'relative'}`}>
            <div className="relative overflow-hidden p-4 ">
                {/* Background gradient */}


                <div className="container mx-auto px-3 lg:px-7 flex items-center justify-between  ">
                    <div className="flex gap-3 items-center z-10">
                        <Image
                            src="/icons/android-chrome-512x512.png"
                            alt="Arif Logo"
                            className=""
                            width={50}
                            height={50}
                            priority
                        />
                        <Link href="/">
                            <div className="text-white font-bold text-xl ">Arif Islam</div>
                        </Link>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#009dff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.007 8.27C22.194 9.125 23 10.45 23 12c0 1.55-.806 2.876-1.993 3.73.24 1.442-.134 2.958-1.227 4.05-1.095 1.095-2.61 1.459-4.046 1.225C14.883 22.196 13.546 23 12 23c-1.55 0-2.878-.807-3.731-1.996-1.438.235-2.954-.128-4.05-1.224-1.095-1.095-1.459-2.611-1.217-4.05C1.816 14.877 1 13.551 1 12s.816-2.878 2.002-3.73c-.242-1.439.122-2.955 1.218-4.05 1.093-1.094 2.61-1.467 4.057-1.227C9.125 1.804 10.453 1 12 1c1.545 0 2.88.803 3.732 1.993 1.442-.24 2.956.135 4.048 1.227 1.093 1.092 1.468 2.608 1.227 4.05Zm-4.426-.084a1 1 0 0 1 .233 1.395l-5 7a1 1 0 0 1-1.521.126l-3-3a1 1 0 0 1 1.414-1.414l2.165 2.165 4.314-6.04a1 1 0 0 1 1.395-.232Z" fill="#009dff" /></svg>

                    </div>

                    <nav className="max-lg:hidden  z-10">
                        <ul className="flex items-center justify-center  lg:gap-2   text-white" >
                            <li title='Visit Home Page' className='hover:underline cursor- '><Link href="/" className="px-2 py-3">Home</Link></li>
                            <li title='Visit Service Page' className='hover:underline cursor-pointer'><Link href="/services" className="px-2 py-3">Services</Link></li>
                            <li title='My Skills' className='hover:underline cursor-pointer'><Link href="/skills" className="px-2 py-3">Skills</Link></li>
                            <li title='Blogs' className='hover:underline cursor-pointer'><Link href="/blogs" className="px-2 py-3">Blogs</Link></li>
                            <li title='Contact' className='hover:underline cursor-pointer'><Link href="/contact" className="px-2 py-3">Contact</Link></li>
                            <li title='About' className='hover:underline cursor-pointer'><Link href="/about" className="px-2 py-3">About</Link></li>
                        </ul>
                    </nav>

                    {/* <div className="hidden  md:hidden-flex items-center space-x-6 my-2 pr-2 z-10">
                    <form action="https://tailwindflex.com/search" className="relative w-[350px] bg-slate-900 rounded border  border-gray-700 ">
                    <input
                        className="relative w-full pr-10 rounded  bg-transparent text-white py-2 pl-3  focus:outline-none
                                focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                        type="search"
                        name="search"
                        placeholder="Search..."
                    />
                    <button
                        type="submit"
                        className="absolute top-0 right-0 mt-3 mr-4 text-gray-400 dark:text-gray-200"
                    >
                        <span className="sr-only">Search</span>
                        <svg
                            className="w-4 h-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 56.966 56.966"
                            xmlSpace="preserve"
                        >
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                        </svg>
                    </button>
                </form>

                
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="#0000">
                        <path d="M12 14.2857C13.4229 14.2857 14.5714 13.1371 14.5714 11.7143V6.57143C14.5714 5.14857 13.4229 4 12 4C10.5771 4 9.42857 5.14857 9.42857 6.57143V11.7143C9.42857 13.1371 10.5771 14.2857 12 14.2857Z" fill="#ffff" />
                        <path d="M16.5429 11.7143H18C18 14.6371 15.6686 17.0543 12.8571 17.4743V20.2857H11.1429V17.4743C8.33143 17.0543 6 14.6371 6 11.7143H7.45714C7.45714 14.2857 9.63429 16.0857 12 16.0857C14.3657 16.0857 16.5429 14.2857 16.5429 11.7143Z" fill="#ffff" />
                    </svg>
                </button>
            </div> */}

                    <div className='hidden md:flex gap-4 z-10 '>
                        <Link href='/visit-my-store' title='Visit my store' className="text-white text-center  py-2 px-4 rounded border  border-gray-700">Visit Store </Link>


                        <Link className=" inline-flex items-center justify-center rounded border  border-gray-700 py-2 px-4 font-dm text-base font-medium text-white shadow-xl  transition-transform duration-100 ease-in-out hover:scale-[1.1]"
                            href="/my-projects">
                            My Projects
                        </Link>

                        <button title='Change Theme' type='button' className="text-white text-center  py-2 px-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                                <path d="M12 0C11.4477 0 11 0.447715 11 1V3C11 3.55228 11.4477 4 12 4C12.5523 4 13 3.55228 13 3V1C13 0.447715 12.5523 0 12 0Z" fill="#ffff" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM9.21518 14.7848C8.50248 14.0721 8.06167 13.0875 8.06167 12C8.06167 9.82492 9.82492 8.06167 12 8.06167C13.0875 8.06167 14.0721 8.50248 14.7848 9.21518L9.21518 14.7848Z" fill="#ffff" />
                                <path d="M19.0711 3.51472C19.4616 3.12419 20.0947 3.12419 20.4853 3.51472C20.8758 3.90524 20.8758 4.53841 20.4853 4.92893L19.0711 6.34315C18.6805 6.73367 18.0474 6.73367 17.6568 6.34315C17.2663 5.95262 17.2663 5.31946 17.6568 4.92893L19.0711 3.51472Z" fill="#ffff" />
                                <path d="M0 12C0 12.5523 0.447715 13 1 13H3C3.55228 13 4 12.5523 4 12C4 11.4477 3.55228 11 3 11H1C0.447715 11 0 11.4477 0 12Z" fill="#ffff" />
                                <path d="M3.51472 4.92893C3.1242 4.53841 3.1242 3.90524 3.51472 3.51472C3.90525 3.12419 4.53841 3.12419 4.92894 3.51472L6.34315 4.92893C6.73368 5.31946 6.73368 5.95262 6.34315 6.34314C5.95263 6.73367 5.31946 6.73367 4.92894 6.34314L3.51472 4.92893Z" fill="#ffff" />
                                <path d="M12 20C11.4477 20 11 20.4477 11 21V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V21C13 20.4477 12.5523 20 12 20Z" fill="#ffff" />
                                <path d="M4.92894 17.6569C5.31946 17.2663 5.95263 17.2663 6.34315 17.6569C6.73368 18.0474 6.73368 18.6805 6.34315 19.0711L4.92894 20.4853C4.53842 20.8758 3.90525 20.8758 3.51473 20.4853C3.1242 20.0948 3.1242 19.4616 3.51473 19.0711L4.92894 17.6569Z" fill="#ffff" />
                                <path d="M20 12C20 12.5523 20.4477 13 21 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H21C20.4477 11 20 11.4477 20 12Z" fill="#ffff" />
                                <path d="M17.6568 19.0711C17.2663 18.6805 17.2663 18.0474 17.6568 17.6569C18.0474 17.2663 18.6805 17.2663 19.0711 17.6569L20.4853 19.0711C20.8758 19.4616 20.8758 20.0948 20.4853 20.4853C20.0947 20.8758 19.4616 20.8758 19.0711 20.4853L17.6568 19.0711Z" fill="#ffff" />
                            </svg>
                        </button>
                        <Link href='/login' className="text-white text-center bg-green-600  py-2 px-4 rounded border  border-gray-700">Login</Link>
                    </div>

                    {/* Menu button for Mobile devices */}
                    <div className="lg:hidden z-10">
                        <button onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                )}
                            </svg>
                        </button>
                    </div>
                    {/* ------------------------------------ */}
                </div>
            </div >



            {/* Mobile nav start */}
            {/* Navbar Responsiveness for mobile devices */}
            <nav className={`lg:hidden absolute top-20 l-0 bg-slate-900 w-screen h-screen p-5 scroll-none flex flex-col space-y-5  items-start z-20 ${isOpen ? 'block' : 'hidden'}`}>
                {/* For Backgroud Colour */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-black to-blue-900 opacity-90"></div>
                {/* For Backgroud Colour */}

                <div className="relative w-full  flex flex-row justify-between items-center ">
                    <form action="https://tailwindflex.com/search" className="relative  w-5/6 z-10">
                        <input
                            className="relative w-full pr-10  bg-transparent text-white bg-slate-900 border-gray-700 py-2 pl-3 border rounded focus:outline-none
                            focus:ring-1 focus:ring-blue-500 focus:border-transparent z-20"
                            type="search"
                            name="search"
                            placeholder="Search..."
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 mt-3 mr-4 text-gray-400 dark:text-gray-200"
                        >
                            <span className="sr-only">Search</span>
                            <svg
                                className="w-4 h-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 56.966 56.966"
                                xmlSpace="preserve"
                            >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                            </svg>
                        </button>
                    </form>
                    <button type="button" className='pr-3 z-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="#0000">
                            <path d="M12 14.2857C13.4229 14.2857 14.5714 13.1371 14.5714 11.7143V6.57143C14.5714 5.14857 13.4229 4 12 4C10.5771 4 9.42857 5.14857 9.42857 6.57143V11.7143C9.42857 13.1371 10.5771 14.2857 12 14.2857Z" fill="#ffff" />
                            <path d="M16.5429 11.7143H18C18 14.6371 15.6686 17.0543 12.8571 17.4743V20.2857H11.1429V17.4743C8.33143 17.0543 6 14.6371 6 11.7143H7.45714C7.45714 14.2857 9.63429 16.0857 12 16.0857C14.3657 16.0857 16.5429 14.2857 16.5429 11.7143Z" fill="#ffff" />
                        </svg>
                    </button>
                </div>

                <nav className="relative z-10">
                    <ul className="flex flex-col items-start justify-start gap-4 max  text-white" >
                        <li title='Visit Home Page' className='hover:underline '>
                            <a href="/" className="px-2 py-3">Home</a>
                            </li>
                        <li title='Visit Service Page' className='hover:underline cursor-pointer'>
                            <a href="/services" onClick={()=>router.push('/services')} className="px-2 py-3">Services</a>
                            </li>
                        <li title='My Skills' className='hover:underline cursor-pointer'>
                            <a href="/skills"  className="px-2 py-3">Skills</a>
                        </li>
                        <li title='Blogs' className='hover:underline cursor-pointer'>
                            <a href="/blogs" className="px-2 py-3">Blogs</a>
                            </li>
                        <li title='Contact' className='hover:underline cursor-pointer'>
                            <a href="/contact" className="px-2 py-3">Contact</a>
                            </li>
                        <li title='About' className='hover:underline cursor-pointer'>
                            <a href="/about" className="px-2 py-3">About</a>
                            </li>
                    </ul>
                </nav>
                <a href='/visit-my-store' className="text-white text-center  py-2 px-4 rounded border  border-gray-700 z-10">Visit Store</a>
                <button className="text-white text-center  py-2 px-4 rounded border  border-gray-700 flex flex-row items-center gap-2 z-10">



                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                        <path d="M12 0C11.4477 0 11 0.447715 11 1V3C11 3.55228 11.4477 4 12 4C12.5523 4 13 3.55228 13 3V1C13 0.447715 12.5523 0 12 0Z" fill="#ffff" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM9.21518 14.7848C8.50248 14.0721 8.06167 13.0875 8.06167 12C8.06167 9.82492 9.82492 8.06167 12 8.06167C13.0875 8.06167 14.0721 8.50248 14.7848 9.21518L9.21518 14.7848Z" fill="#ffff" />
                        <path d="M19.0711 3.51472C19.4616 3.12419 20.0947 3.12419 20.4853 3.51472C20.8758 3.90524 20.8758 4.53841 20.4853 4.92893L19.0711 6.34315C18.6805 6.73367 18.0474 6.73367 17.6568 6.34315C17.2663 5.95262 17.2663 5.31946 17.6568 4.92893L19.0711 3.51472Z" fill="#ffff" />
                        <path d="M0 12C0 12.5523 0.447715 13 1 13H3C3.55228 13 4 12.5523 4 12C4 11.4477 3.55228 11 3 11H1C0.447715 11 0 11.4477 0 12Z" fill="#ffff" />
                        <path d="M3.51472 4.92893C3.1242 4.53841 3.1242 3.90524 3.51472 3.51472C3.90525 3.12419 4.53841 3.12419 4.92894 3.51472L6.34315 4.92893C6.73368 5.31946 6.73368 5.95262 6.34315 6.34314C5.95263 6.73367 5.31946 6.73367 4.92894 6.34314L3.51472 4.92893Z" fill="#ffff" />
                        <path d="M12 20C11.4477 20 11 20.4477 11 21V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V21C13 20.4477 12.5523 20 12 20Z" fill="#ffff" />
                        <path d="M4.92894 17.6569C5.31946 17.2663 5.95263 17.2663 6.34315 17.6569C6.73368 18.0474 6.73368 18.6805 6.34315 19.0711L4.92894 20.4853C4.53842 20.8758 3.90525 20.8758 3.51473 20.4853C3.1242 20.0948 3.1242 19.4616 3.51473 19.0711L4.92894 17.6569Z" fill="#ffff" />
                        <path d="M20 12C20 12.5523 20.4477 13 21 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H21C20.4477 11 20 11.4477 20 12Z" fill="#ffff" />
                        <path d="M17.6568 19.0711C17.2663 18.6805 17.2663 18.0474 17.6568 17.6569C18.0474 17.2663 18.6805 17.2663 19.0711 17.6569L20.4853 19.0711C20.8758 19.4616 20.8758 20.0948 20.4853 20.4853C20.0947 20.8758 19.4616 20.8758 19.0711 20.4853L17.6568 19.0711Z" fill="#ffff" />
                    </svg>
                    <span>Theme</span>






                </button>
                <a className=" inline-flex items-center justify-center rounded border border-gray-700 bg-purple-600 py-2 px-4 font-dm text-base font-medium text-white shadow-xl shadow-gray-700/50 transition-transform duration-100 ease-in-out hover:scale-[1.1] z-10"
                    href="/my-projects">
                    My Projects
                </a>
                <Link href='/login' className="text-white absolute right-5 top-96 text-center bg-green-600  py-2 px-4 rounded border  border-gray-700 z-10">Login</Link>

            </nav>

            {/* Start 'Go to top' element */}
            {showArrow && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 p-4 bg-yellow-500 text-white text- font-extrabold rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transform transition-transform duration-300 ease-in-out moveUpDown"
                //  style={{
                //    animation: 'moveUpDown 2s infinite alternate ease-in-out',
                //  }}
                >
                    ↑
                </button>
            )}

        </header >




    );
};

export default Navbar;
