import React from 'react'; // <--- Importación vital para corregir el ReferenceError

const Button = ({ children, variant = 'primary', onClick }) => {
    const styles = {
        primary: "bg-red-700 hover:bg-red-800 text-white border-b-4 border-red-900",
        outline: "border border-white/30 hover:bg-white hover:text-black text-white"
    };

    return (
        <button 
            onClick={onClick}
            className={`${styles[variant]} px-8 py-3 font-black uppercase tracking-widest transition-all active:translate-y-1`}
        >
            {children}
        </button>
    );
};

export default Button;