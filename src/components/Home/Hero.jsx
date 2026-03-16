import React from 'react';
import Button from '../UI/Button';

const Hero = () => {
    return (
        /* Cambiamos h-screen por min-h-screen o un aspect-ratio en móviles 
           para que la imagen no se estire de más. 
        */
        <section className="relative w-full h-[60vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
            <div 
                className="absolute inset-0 z-0 transition-all duration-500"
                style={{
                    backgroundImage: "url('/assets/LookingBannerHome.png')",
                    // En móviles usamos 'contain' para verla entera, en PC 'cover'
                    backgroundSize: window.innerWidth < 768 ? 'contain' : 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Overlay muy sutil */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Si vas a agregar texto o botones sobre el Hero, irían aquí */}
            <div className="relative z-10 text-center px-4">
                {/* Ejemplo de contenido opcional:
                <h1 className="text-white text-5xl font-black italic uppercase tracking-tighter mb-6">
                    Looking
                </h1>
                <Button variant="primary">Ver Servicios</Button> 
                */}
            </div>
        </section>
    );
};

export default Hero;