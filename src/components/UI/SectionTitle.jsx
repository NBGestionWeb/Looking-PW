import React from 'react';

const SectionTitle = ({ title, subtitle, isVip }) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white leading-none">
                {title}
            </h2>
            {subtitle && (
                <span className={`font-bold tracking-widest uppercase text-sm transition-colors duration-500 ${
                    isVip ? 'text-yellow-600' : 'text-red-600'
                }`}>
                    {subtitle}
                </span>
            )}
            
            {/* Línea decorativa con color dinámico */}
            <div className={`w-20 h-1 mx-auto mt-4 transition-colors duration-500 ${
                isVip ? 'bg-yellow-600' : 'bg-red-600'
            }`}></div>
        </div>
    );
};

export default SectionTitle;