import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    href?: string;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', href, children, className = '', ...props }) => {
    const baseClasses = "group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold tracking-wider uppercase rounded-lg transition-transform duration-300 ease-in-out transform-gpu focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark-900 focus-visible:ring-gold-500 overflow-hidden";
    
    const variantClasses = {
        primary: "text-black bg-gold-500 hover:scale-105",
        secondary: "text-white bg-transparent border-2 border-gold-500 hover:bg-gold-500/10 hover:scale-105"
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    const commonContent = (
      <>
        <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-gold-400 to-gold-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${variant === 'secondary' ? 'hidden' : ''}`}></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out bg-gold-500/20 group-hover:bg-transparent"></span>
        <span className="relative">{children}</span>
      </>
    );

    if (href) {
        return (
            <a href={href} className={combinedClasses}>
                {commonContent}
            </a>
        );
    }
    
    return (
        <button className={combinedClasses} {...props}>
            {commonContent}
        </button>
    );
};

export default Button;