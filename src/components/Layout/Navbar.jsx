import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Insumos', href: '#insumos' },
        { name: 'Barberos', href: '#staff' },
        { name: 'Academia', href: '#academia' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 bg-black ${
            scrolled ? 'py-2 shadow-xl' : 'py-4'
        }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-black italic tracking-tighter text-white">
                    LOOKING
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-red-600 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Button */}
                <button 
                    className="md:hidden text-white text-2xl z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
                isOpen ? 'translate-y-0' : '-translate-y-full'
            } md:hidden`}>
                {navLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-black uppercase italic text-white hover:text-red-600 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;