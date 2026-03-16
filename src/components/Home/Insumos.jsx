import React from 'react';
import SectionTitle from '../UI/SectionTitle';

const Insumos = () => {
    const productos = [
        {
            id: 1,
            nombre: "Shampoo 2 en 1 para el crecimiento",
            uso: "Sensación refrescante, Fragancia Romero, una experiencia refrescante que revitaliza tus sentidos mientras cuida tu cabello.",
        },
        {
            id: 2,
            nombre: "DesertStyle. Pomada efecto mate",
            uso: "Fragancia Mango, Pepino, Pomelo, Tabaco y Praliné. Exótica e irresistible.",
        },
        {
            id: 3,
            nombre: "After Shave",
            uso: "Fragancia Azafrán Picante, Pomelo Rosa y Madera: Una composición audaz que combina la intensidad del azafrán con la frescura cítrica del pomelo rosa, sobre una base seductora de maderas nobles.",
        }
    ];

    return (
        <section id="insumos" className="py-24 bg-[#111111] relative overflow-hidden">
            {/* Decoración de fondo sutil */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <SectionTitle title="Esenciales" subtitle="Productos de Culto" />

                <div className="flex flex-col lg:flex-row items-center gap-12 bg-black/40 p-8 md:p-12 border border-white/5 rounded-2xl">
                
                    {/* Lado Izquierdo: Branding Mr. Blonde */}
                    <div className="lg:w-2/5 text-center lg:text-left">
                        {/* Contenedor de la imagen ajustado */}
                        <div className="bg-[#1a1a1a] p-2 rounded-lg rotate-[-2deg] shadow-2xl inline-block mb-6 border border-white/10 overflow-hidden">
                            <img 
                                src="/assets/MrBlonde.png" 
                                alt="Mr Blonde Branding" 
                                className="w-64 md:w-80"
                            />
                        </div>
                        <h3 className="text-3xl font-black italic uppercase text-white mb-4">
                            Styling for Guapos
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed font-medium">
                            En <span className="text-white font-bold">Looking</span> no solo cuidamos tu corte, cuidamos tu salud capilar. 
                            Por eso elegimos a los mejores: <span className="text-red-500 font-bold">Mr. Blonde</span>. 
                            Insumos diseñados para el hombre que no se conforma con lo básico.
                        </p>
                    </div>

                    {/* Lado Derecho: Grid de Productos */}
                    <div className="lg:w-3/5 grid sm:grid-cols-2 gap-4 w-full">
                        {productos.map((prod) => (
                            <div 
                                key={prod.id} 
                                className="group p-6 bg-neutral-900/50 border border-white/10 rounded-xl hover:border-red-600 transition-colors"
                            >
                                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                                    <span className="text-red-600 group-hover:text-white font-bold">#0{prod.id}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{prod.nombre}</h4>
                                <p className="text-gray-500 text-sm font-medium">{prod.uso}</p>
                            </div>
                        ))}
                        
                        {/* Card de Call to Action */}
                        <div className="p-6 border-2 border-dashed border-neutral-800 rounded-xl flex items-center justify-center text-center">
                            <p className="text-neutral-500 text-sm italic font-medium">
                                Consultá por el kit completo <br/> de mantenimiento en casa.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Insumos;