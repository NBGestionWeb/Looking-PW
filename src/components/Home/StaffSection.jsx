import React from 'react'; // <--- Importación vital para corregir el ReferenceError
import StaffCard from './StaffCard';
import SectionTitle from '../UI/SectionTitle';
import { barberos } from '../../data/barberos';

const StaffSection = () => {
    return (
        <section id="staff" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <SectionTitle 
                    title="Los Artistas" 
                    subtitle="Manos expertas a tu servicio" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {barberos.map(barbero => (
                        <StaffCard key={barbero.id} barbero={barbero} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StaffSection;