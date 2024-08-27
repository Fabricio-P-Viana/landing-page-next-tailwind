import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent bg-white bg-opacity-40 p-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Next | Tailwind</div>
                <div className="hidden md:flex space-x-4">
                    <a href="#home" className="text-white text-lg font-bold hover:text-cyan-500">Home</a>
                    <a href="#sobre" className="text-white text-lg font-bold hover:text-cyan-500">Sobre</a>
                    <a href="#comousar" className="text-white text-lg font-bold hover:text-cyan-500">Como Usar</a>
                    <a href="#exemplos" className="text-white text-lg font-bold hover:text-cyan-500">Exemplos</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-lg font-bold hover:text-cyan-500 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <a href="#home" className="block text-white text-lg font-bold hover:text-cyan-500 p-2">Home</a>
                    <a href="#sobre" className="block text-white text-lg font-bold hover:text-cyan-500 p-2">Sobre</a>
                    <a href="#comousar" className="block text-white text-lg font-bold hover:text-cyan-500 p-2">Como Usar</a>
                    <a href="#exemplos" className="block text-white text-lg font-bold hover:text-cyan-500 p-2">Exemplos</a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;