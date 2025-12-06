import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: TestimonialData[] = [
  { 
    id: 1, 
    name: "Sarah Mitchell", 
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    text: "The garden setting is absolutely magical, especially at night with the fairy lights. The food is consistently delicious and the ambiance is unmatched in Nairobi.",
    rating: 5
  },
  { 
    id: 2, 
    name: "David Kimani", 
    role: "Local Guide",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    text: "Best brunch spot in Westlands. The eggs benedict is to die for, and the service is always impeccable. A true hidden gem.",
    rating: 5
  },
  { 
    id: 3, 
    name: "Priya Patel", 
    role: "Regular Diner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    text: "A hidden oasis. Perfect for a romantic dinner or a quiet business lunch. The Pepper Steak is highly recommended!",
    rating: 4
  },
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };
  
  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="bg-[#1f1f1f] py-24 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-thyme-green/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-thyme-gold/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-4">
             <div className="h-[1px] w-8 bg-thyme-gold"></div>
             <span className="text-thyme-gold font-bold uppercase tracking-widest text-xs">Testimonials</span>
             <div className="h-[1px] w-8 bg-thyme-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl">Voices of Our Guests</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Buttons positioned outside on large screens */}
            <button 
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-thyme-gold transition-all duration-300 text-white group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 group-hover:text-thyme-gold transition-colors" />
            </button>
            <button 
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-thyme-gold transition-all duration-300 text-white group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 group-hover:text-thyme-gold transition-colors" />
            </button>

            {/* Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
              <Quote className="absolute top-8 left-8 h-16 w-16 text-thyme-gold/10 rotate-180" />
              <Quote className="absolute bottom-8 right-8 h-16 w-16 text-thyme-gold/10" />
              
              <div 
                className="flex flex-col items-center text-center transition-all duration-500 ease-in-out"
                key={current} // Key change triggers animation
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-thyme-gold to-transparent shadow-lg">
                    <img 
                      src={TESTIMONIALS[current].image} 
                      alt={TESTIMONIALS[current].name} 
                      className="w-full h-full rounded-full object-cover border-2 border-[#1f1f1f]"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 bg-[#1f1f1f] px-3 py-1 rounded-full border border-white/10">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < TESTIMONIALS[current].rating ? 'text-thyme-gold fill-thyme-gold' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                </div>

                <p className="font-serif text-2xl md:text-3xl italic leading-relaxed mb-8 text-gray-100 max-w-2xl animate-fade-in">
                  "{TESTIMONIALS[current].text}"
                </p>

                <div className="flex flex-col items-center animate-fade-in-up">
                  <h4 className="font-bold text-lg tracking-wide">{TESTIMONIALS[current].name}</h4>
                  <p className="text-thyme-gold text-xs uppercase tracking-widest font-medium mt-1">{TESTIMONIALS[current].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-10">
              {TESTIMONIALS.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => { setIsAutoPlaying(false); setCurrent(idx); }}
                  className={`h-1 transition-all duration-300 rounded-full ${idx === current ? 'bg-thyme-gold w-12' : 'bg-white/20 w-4 hover:bg-white/40'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};