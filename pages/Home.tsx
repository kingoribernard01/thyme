import React from 'react';
import { HeroSection } from '../components/ui/hero-section-dark';
import { Page } from '../types';
import { ArrowRight, Utensils, GlassWater, Leaf, Flame, Star } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section Integration */}
      <HeroSection
        title="Welcome to About Thyme"
        subtitle={{
          regular: "A Culinary Escape ",
          gradient: "in a Leafy Garden",
        }}
        description="Nairobi’s hidden gem for global flavours. Experience an intimate dining atmosphere with fresh, seasonal ingredients and world-class service."
        ctaText="View Menu"
        ctaHref="#"
        onCtaClick={(e) => { e.preventDefault(); onNavigate('menu'); }}
        backgroundImage="https://images.unsplash.com/photo-1550966871-3ed3c4752ce2?q=80&w=2070&auto=format&fit=crop"
        gridOptions={{
          angle: 65,
          opacity: 0.1, 
          cellSize: 50,
          lightLineColor: "#ffffff",
          darkLineColor: "#2a2a2a",
        }}
      />

      {/* About Preview - Modernized */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-thyme-beige/20 -skew-x-12 translate-x-20 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-thyme-gold/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative h-[600px] w-full overflow-hidden rounded-[2rem] shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?q=80&w=2000&auto=format&fit=crop" 
                  alt="Cozy interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* Floating Decorative Card */}
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border-l-4 border-thyme-gold animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <p className="font-serif text-lg italic text-thyme-charcoal">"A hidden gem in the city."</p>
                <div className="flex text-thyme-gold mt-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8 pl-0 lg:pl-10">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-thyme-beige/50 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-thyme-green animate-pulse" />
                  <span className="text-thyme-charcoal font-bold uppercase tracking-widest text-xs">Our Story</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl text-thyme-charcoal leading-[1.1]">
                Dining Reimagined in <span className="text-thyme-green italic relative">
                  Nature's Lap
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-thyme-gold opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Nestled in the heart of Westlands, About Thyme offers a sanctuary away from the city bustle. 
                </p>
                <p>
                  Whether you choose a sunny spot in our lush garden or a cozy corner by the indoor fireplace, our eclectic menu promises a journey around the world.
                </p>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => onNavigate('about')}
                  className="group relative px-8 py-4 bg-thyme-charcoal text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="absolute inset-0 w-full h-full bg-thyme-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center font-bold uppercase tracking-widest text-xs">
                    Learn More
                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-thyme-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Garden Dining",
                description: "Al fresco seating amidst lush greenery."
              },
              {
                icon: Flame,
                title: "Indoor Fireplace",
                description: "Cozy evenings by the warm fire."
              },
              {
                icon: Utensils,
                title: "Global Cuisine",
                description: "Dishes inspired by world flavours."
              },
              {
                icon: GlassWater,
                title: "Fine Wines",
                description: "Curated selection of wines & cocktails."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-thyme-green to-thyme-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="mb-6 bg-thyme-green/5 p-5 rounded-2xl text-thyme-green group-hover:bg-thyme-green group-hover:text-white transition-colors duration-500 ring-1 ring-thyme-green/10 group-hover:ring-thyme-green">
                  <feature.icon className="h-8 w-8" />
                </div>
                
                <h3 className="font-serif font-bold text-xl text-thyme-charcoal mb-3 group-hover:text-thyme-green transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sneak Peak */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-thyme-gold font-bold uppercase tracking-widest text-sm">Taste The World</span>
          <h2 className="font-serif text-4xl text-thyme-charcoal mt-2 mb-6">Signature Dishes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From our famous Pepper Steak to the zesty Lemon Cheesecake, every dish is prepared with passion and the freshest ingredients.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop', 
              title: 'Poke Bowl', 
              desc: 'Fresh salmon, avocado, edamame',
              price: 'KSH 1800'
            },
            { 
              img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop', 
              title: 'Filet Mignon', 
              desc: 'Grass-fed beef, peppercorn sauce',
              price: 'KSH 2200'
            },
            { 
              img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop', 
              title: 'Lemon Cheesecake', 
              desc: 'Zesty lemon curd, berry compote',
              price: 'KSH 850'
            },
          ].map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-96" onClick={() => onNavigate('menu')}>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-serif text-2xl mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.desc}</p>
                  <span className="text-thyme-gold font-bold">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
           <button 
             onClick={() => onNavigate('menu')}
             className="bg-thyme-green text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg hover:bg-thyme-charcoal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center mx-auto group"
           >
             View Full Menu
             <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};