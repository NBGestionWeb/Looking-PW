import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import PriceSwitcher from './components/Home/PriceSwitcher';
import Insumos from './components/Home/Insumos';
import StaffSection from './components/Home/StaffSection';
import Academia from './components/Home/Academia';
import Footer from './components/Layout/Footer';

function App() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen font-barlow text-white">
        {/* Navegación Fija: 
            Asegurate de que los href en Navbar.jsx coincidan con los ID de abajo 
        */}
        <Navbar />

        <main>
            {/* Hero: Impacto inicial con logo y botones */}
            <Hero />
            
            {/* Sección de Precios con Toggle Classic/VIP */}
            <section id="servicios">
            <PriceSwitcher />
            </section>

            {/* Sección de Productos Mr. Blonde */}
            <section id="insumos">
            <Insumos />
            </section>

            {/* Sección de Barberos con efecto de color en hover */}
            <section id="staff">
            <StaffSection />
            </section>

            {/* Formulario de Inscripción y lista de cursos */}
            <section id="academia">
            <Academia />
            </section>
        </main>

        {/* Pie de página con contacto y firma NB Gestión */}
        <Footer />
        </div>
    );
}

export default App;