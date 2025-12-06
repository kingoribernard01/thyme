import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect - md:bg-fixed handles mobile issues */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed z-0 transform scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 animate-fade-in-up max-w-5xl mx-auto mt-10">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 font-bold tracking-tight drop-shadow-2xl">
          {title}
        </h1>
        {subtitle && (
          <div className="flex items-center justify-center space-x-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="h-px w-12 bg-thyme-gold shadow-[0_0_10px_rgba(202,170,91,0.5)]"></div>
             <p className="font-sans text-lg md:text-xl tracking-[0.2em] uppercase text-thyme-gold font-semibold drop-shadow-md">
               {subtitle}
             </p>
             <div className="h-px w-12 bg-thyme-gold shadow-[0_0_10px_rgba(202,170,91,0.5)]"></div>
          </div>
        )}
      </div>
    </div>
  );
};