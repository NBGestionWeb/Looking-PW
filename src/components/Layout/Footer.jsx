import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = {
        instagram: "https://www.instagram.com/lookingpeluquerias?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        whatsapp: "https://wa.me/1124085844"
    };

    // URL de inserción con el marcador rojo en las coordenadas exactas
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3278.435!2d-58.360545!3d-34.762314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ1JzQ0LjMiUyA1OMKwMjEnMzguMCJX!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar&q=-34.762314,-58.360545";

    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    
                    {/* Columna 1: Branding & Slogan */}
                    <div>
                        <h3 className="text-3xl font-black italic mb-4 text-white">
                            LOOKING<span className="text-red-600">.</span>
                        </h3>
                        <p className="text-neutral-500 max-w-xs leading-relaxed font-medium">
                            Elevando el estándar de la barbería tradicional. Estilo, actitud y cuidado personal en un solo lugar.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a 
                                href={socialLinks.instagram} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-full hover:bg-pink-600 transition-colors"
                            >
                                <FaInstagram />
                            </a>
                            <a 
                                href={socialLinks.whatsapp} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-full hover:bg-green-600 transition-colors"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Información de Contacto */}
                    <div className="space-y-4">
                        <h4 className="font-bold uppercase tracking-widest text-sm text-red-600 mb-6">Ubicación y Horarios</h4>
                        <div className="flex items-start gap-3 text-neutral-400">
                            <FaMapMarkerAlt className="mt-1 text-red-600 shrink-0" />
                            <p className="font-medium">La Calandria 3023, <br /> Temperley, Buenos Aires</p>
                        </div>
                        <div className="flex items-start gap-3 text-neutral-400">
                            <FaClock className="mt-1 text-red-600 shrink-0" />
                            <p className="font-medium">Lun a Sáb: 9:00 - 20:30 <br /> Dom: 10:00 - 14:00</p>
                        </div>
                    </div>

                    {/* Columna 3: Links Rápidos */}
                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm text-red-600 mb-6">Navegación</h4>
                        <ul className="space-y-2 text-neutral-400 font-medium">
                            <li><a href="#servicios" className="hover:text-white transition-colors">Nuestros Servicios</a></li>
                            <li><a href="#insumos" className="hover:text-white transition-colors">Insumos</a></li>
                            <li><a href="#staff" className="hover:text-white transition-colors">El Equipo</a></li>
                            <li><a href="#academia" className="hover:text-white transition-colors">Inscripción Academia</a></li>
                        </ul>
                    </div>
                </div>

                {/* MAPA CON PUNTO ROJO Y HOVER A COLOR */}
                <div className="group relative w-full h-80 bg-neutral-900 rounded-2xl mb-12 overflow-hidden border border-white/5">
                    <iframe 
                        src={mapEmbedUrl} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale filter transition-all duration-700 ease-in-out group-hover:grayscale-0 pointer-events-auto"
                    ></iframe>
                </div>

                {/* Bottom Bar: Sello NB GESTIÓN */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-600 text-[10px] uppercase tracking-widest font-bold italic">
                        © {new Date().getFullYear()} Looking Imagen Masculina. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-neutral-600 text-[10px] uppercase tracking-widest font-bold">Powered by</span>
                        <a 
                            href="#" 
                            className="text-white font-black italic text-sm hover:text-red-600 transition-colors tracking-tighter"
                        >
                            NB GESTIÓN
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;