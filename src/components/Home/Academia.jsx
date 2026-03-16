import React, { useState } from 'react';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Academia = () => {
    const cursos = [
        { 
            nombre: "Barbería Inicial", 
            duracion: "4 Meses", 
            nivel: "Principiante",
            imagenFija: "/assets/CursoBarberiaInicial.png",
            galeria: [
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png"
            ],
            descripcion: "Aprendé desde cero las técnicas de corte clásico, fade y manejo de herramientas profesionales."
        },
        { 
            nombre: "Barba & Navaja", 
            duracion: "4 Meses", 
            nivel: "Intermedio",
            imagenFija: "/assets/CursoBarba.png",
            galeria: [
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png"
            ],
            descripcion: "Especializate en el arte del afeitado tradicional, perfilado de barba y rituales de toalla caliente."
        },
        { 
            nombre: "Colorimetria", 
            duracion: "4 Meses", 
            nivel: "Intermedio",
            imagenFija: "/assets/CursoColorimetria.png",
            galeria: [
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png",
                "/assets/LookingEnConstruccion.png"
            ],
            descripcion: "Dominá la teoría del color, decoloración y tendencias de color fantasía en barbería."
        }
    ];

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        curso: cursos[0].nombre
    });

    // Estados para el Modal/Carrusel
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const cursoActual = cursos.find(c => c.nombre === formData.curso);

    const openModal = (index) => {
        setCurrentPhotoIndex(index);
        setIsModalOpen(true);
    };

    const nextPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev === cursoActual.galeria.length - 1 ? 0 : prev + 1));
    };

    const prevPhoto = () => {
        setCurrentPhotoIndex((prev) => (prev === 0 ? cursoActual.galeria.length - 1 : prev - 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mensaje = `Hola Looking! Me interesa el curso de ${formData.curso}. Mi nombre es ${formData.nombre}.`;
        window.open(`https://wa.me/1144945730?text=${encodeURIComponent(mensaje)}`, '_blank');
    };

    return (
        <section id="academia" className="pt-6 pb-20 -mt-16 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <SectionTitle title="Academia Looking" subtitle="Formate con los mejores" />
                
                {/* SELECTOR DE CURSOS */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {cursos.map((curso) => (
                        <button
                            key={curso.nombre}
                            onClick={() => setFormData({ ...formData, curso: curso.nombre })}
                            className={`px-6 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                                formData.curso === curso.nombre 
                                ? 'bg-red-600 border-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]' 
                                : 'bg-transparent border-white/10 text-white/40 hover:border-white/30'
                            }`}
                        >
                            {curso.nombre}
                        </button>
                    ))}
                </div>
                
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    
                    {/* PARTE IZQUIERDA: Detalle Fijo + Galería Clickable */}
                    <div className="lg:w-7/12 w-full">
                        <div className="border border-white/10 rounded-sm bg-neutral-900/50 overflow-hidden shadow-2xl h-full flex flex-col">
                            
                            {/* IMAGEN FIJA DEL CURSO */}
                            <div className="w-full h-[300px] md:h-[400px] bg-black overflow-hidden relative">
                                <img 
                                    src={cursoActual.imagenFija} 
                                    alt={cursoActual.nombre} 
                                    className="w-full h-full object-cover object-center opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>
                            </div>

                            <div className="p-6 md:p-8 flex-grow border-t border-white/5">
                                <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                                    <h3 className="text-3xl font-black uppercase italic text-white tracking-tighter">
                                        {cursoActual.nombre}
                                    </h3>
                                    <span className="bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest">
                                        {cursoActual.nivel}
                                    </span>
                                </div>
                                
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                                    {cursoActual.descripcion}
                                </p>

                                {/* GALERÍA DE MINIATURAS (Abren el carrusel grande) */}
                                <div className="mb-8">
                                    <p className="text-[10px] uppercase text-neutral-500 tracking-[0.2em] mb-3 font-bold">Galería del curso</p>
                                    <div className="grid grid-cols-5 gap-2">
                                        {cursoActual.galeria.map((foto, idx) => (
                                            <button 
                                                key={idx}
                                                onClick={() => openModal(idx)}
                                                className="aspect-square overflow-hidden border border-white/5 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
                                            >
                                                <img src={foto} className="w-full h-full object-cover" alt="miniatura" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase text-neutral-500 tracking-widest mb-1">Duración</span>
                                        <span className="text-white font-bold">{cursoActual.duracion}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase text-neutral-500 tracking-widest mb-1">Certificación</span>
                                        <span className="text-white font-bold">Oficial Looking</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PARTE DERECHA: Formulario */}
                    <div className="lg:w-5/12 w-full">
                        <div className="bg-neutral-900 p-6 md:p-10 md:pt-0 rounded-sm border-b-4 border-red-600 shadow-2xl h-full flex flex-col justify-start">
                            <h3 className="text-2xl font-black uppercase italic text-white mb-2 tracking-tighter mt-8">Inscribite Ahora</h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input required type="text" placeholder="Nombre completo" className="w-full bg-black border border-neutral-800 p-4 text-white outline-none focus:border-red-600" onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
                                <select value={formData.curso} className="w-full bg-black border border-neutral-800 p-4 text-white outline-none" onChange={(e) => setFormData({...formData, curso: e.target.value})}>
                                    {cursos.map((c, i) => <option key={i} value={c.nombre}>{c.nombre}</option>)}
                                </select>
                                <Button variant="primary" className="w-full py-4">Consultar por WhatsApp</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL DE CARRUSEL (LIGHTBOX) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in">
                    <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-white text-3xl hover:text-red-600 transition-colors">
                        <FaTimes />
                    </button>
                    
                    <button onClick={prevPhoto} className="absolute left-4 md:left-10 text-white text-4xl hover:text-red-600 transition-all">
                        <FaChevronLeft />
                    </button>

                    <div className="max-w-5xl w-full h-[70vh] flex flex-col items-center">
                        <img 
                            src={cursoActual.galeria[currentPhotoIndex]} 
                            className="w-full h-full object-contain animate-fade-in" 
                            alt="Foto ampliada"
                        />
                        <p className="text-white/50 mt-6 uppercase tracking-[0.5em] text-xs">
                            Foto {currentPhotoIndex + 1} de {cursoActual.galeria.length}
                        </p>
                    </div>

                    <button onClick={nextPhoto} className="absolute right-4 md:right-10 text-white text-4xl hover:text-red-600 transition-all">
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Academia;