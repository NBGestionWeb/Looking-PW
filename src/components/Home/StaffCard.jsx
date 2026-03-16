import React from 'react'; // <--- Esto soluciona el ReferenceError

const StaffCard = ({ barbero }) => {
    return (
        <div className="group relative overflow-hidden bg-neutral-900 border border-white/5">
        {/* Contenedor de Imagen */}
        <div className="relative h-[450px] overflow-hidden">
            <img 
            src={barbero.foto} 
            alt={barbero.nombre}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
            
            {/* Overlay gradiente para legibilidad del nombre */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Info del Barbero */}
        <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-red-600 font-black tracking-widest text-xs uppercase">
            {barbero.especialidad}
            </span>
            <h3 className="text-3xl font-black uppercase italic text-white mb-2">
            {barbero.nombre}
            </h3>
            
            {/* RRSS del Barbero (aparecen en hover) */}
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <a 
                href={`https://instagram.com/${barbero.instagram}`} 
                target="_blank" 
                className="text-white hover:text-red-600 text-sm font-bold flex items-center gap-2"
            >
                <span className="w-6 h-[1px] bg-red-600"></span>
                @{barbero.instagram}
            </a>
            </div>
        </div>

        {/* Sello de "Looking Crew" sutil */}
        <div className="absolute top-4 right-4 border border-white/20 px-2 py-1 text-[10px] text-white/40 uppercase tracking-tighter vertical-lr">
            Looking Crew
        </div>
        </div>
    );
};

export default StaffCard;