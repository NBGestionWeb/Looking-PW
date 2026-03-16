import React, { useState } from 'react';
import SectionTitle from '../UI/SectionTitle';
import { servicios } from '../../data/servicios';
import { FaWhatsapp } from 'react-icons/fa';

const PriceSwitcher = () => {
    const [isVip, setIsVip] = useState(false);

    const handleReserva = () => {
        const telefono = "1124085844";
        const tipoServicio = isVip ? "Experiencia VIP" : "Servicios Classic";
        const mensaje = `Hola Looking! Me gustaría reservar un turno para los ${tipoServicio}.`;
        window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
    };

    return (
        <section id="servicios" className="py-24 bg-[#080808]">
            <div className="container mx-auto px-4">
                
                <SectionTitle 
                    title={isVip ? "Experiencia VIP" : "Servicios Classic"} 
                    subtitle="Elegí tu nivel de estilo" 
                    isVip={isVip} 
                />

                {/* Switch Toggle */}
                <div className="flex justify-center items-center mb-16">
                    <span className={`text-sm font-black tracking-widest ${!isVip ? 'text-white' : 'text-neutral-600'}`}>
                        CLASSIC
                    </span>
                    <button 
                        onClick={() => setIsVip(!isVip)}
                        className="mx-6 w-20 h-10 bg-neutral-900 border border-neutral-700 rounded-full relative p-1 focus:outline-none"
                    >
                        <div className={`w-8 h-8 rounded-full transition-all duration-300 transform ${
                            isVip ? 'translate-x-10 bg-yellow-600' : 'translate-x-0 bg-red-600'
                        }`}>
                        </div>
                    </button>
                    <span className={`text-sm font-black tracking-widest ${
                        isVip ? 'text-yellow-600' : 'text-neutral-600'
                    }`}>
                        VIP
                    </span>
                </div>

                {/* Grilla de Precios */}
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
                    {(isVip ? servicios.vip : servicios.classic).map((item) => (
                        <div 
                            key={item.id}
                            className={`group relative p-8 bg-black border transition-colors duration-300 ${
                                isVip ? 'border-yellow-900/30 hover:border-yellow-600' : 'border-neutral-800 hover:border-red-600'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-black uppercase italic text-white">
                                    {item.name}
                                </h3>
                                <span className={`text-2xl font-black ${isVip ? 'text-yellow-600' : 'text-red-600'}`}>
                                    {item.price}
                                </span>
                            </div>

                            {item.detail && (
                                <p className="text-neutral-500 text-sm font-medium border-t border-neutral-900 pt-4">
                                    {item.detail}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* BOTÓN DE RESERVA SIN BRILLO NI DIFUMINADO */}
                <div className="flex flex-col items-center">
                    <button 
                        onClick={handleReserva}
                        className={`flex items-center gap-4 px-10 py-5 text-lg font-black uppercase italic tracking-tighter transition-transform active:scale-95 ${
                            isVip 
                            ? 'bg-yellow-600 text-black hover:bg-yellow-500' 
                            : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                    >
                        <FaWhatsapp className="text-2xl" />
                        Reservar Turno {isVip ? "VIP" : "Classic"}
                    </button>
                    <p className="mt-4 text-neutral-500 text-[10px] uppercase tracking-[0.3em]">
                        Atención inmediata vía WhatsApp
                    </p>
                </div>

            </div>
        </section>
    );
};

export default PriceSwitcher;