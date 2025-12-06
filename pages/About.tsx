import React from 'react';
import { PageHero } from '../components/PageHero';
import { Quote, Sprout, ChefHat, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in bg-[#faf9f6]">
      <PageHero 
        title="Our Story"
        subtitle="Where Passion Meets Palate"
        backgroundImage="https://images.unsplash.com/photo-1466978913421-dad938667252?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Section 1: The Narrative */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Composition */}
          <div className="relative group order-2 lg:order-1">
             <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-2 border-thyme-gold/30 rounded-tl-[3rem] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
             <div className="relative overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000" 
                  alt="About Thyme Garden" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-xl border-l-4 border-thyme-gold animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <span className="block text-4xl font-serif font-bold text-thyme-green">10+</span>
                <span className="text-gray-500 text-sm uppercase tracking-widest font-semibold">Years of Excellence</span>
             </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 text-thyme-gold font-bold uppercase tracking-widest text-sm">
                <span className="w-8 h-[1px] bg-thyme-gold"></span>
                <span>Since 2013</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-thyme-charcoal leading-[1.15]">
              A Hidden Gem in the <br/>
              <span className="text-thyme-green">Heart of Westlands</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                About Thyme started with a simple vision: to create a culinary escape that feels like home, yet offers the excitement of global travel through taste. Nestled on Eldama Ravine Road, we transformed a classic residence into a multi-sensory dining experience.
              </p>
              <p>
                Our leafy garden provides a tranquil backdrop for lunch or brunch, while our candle-lit indoor spaces offer intimacy for evening dining. We believe food should be an experience, not just a meal.
              </p>
            </div>
            
            <div className="pt-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Decorative signature-like element using a handwriting font simulation or image */}
               <span className="font-serif italic text-3xl text-thyme-charcoal">Sarah & The Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Founder's Message */}
      <section className="bg-thyme-charcoal text-white py-24 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-thyme-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Quote className="w-12 h-12 text-thyme-gold mx-auto mb-6 opacity-80" />
            <h2 className="font-serif text-4xl md:text-5xl mb-4">A Note from the Founder</h2>
            <div className="w-24 h-1 bg-thyme-gold mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 flex-shrink-0 relative">
               <div className="absolute inset-0 border-2 border-thyme-gold rounded-full transform rotate-6 scale-105 opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                 alt="Founder" 
                 className="w-full h-full object-cover rounded-full shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
               />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-gray-200 mb-8">
                "We wanted to build more than just a restaurant. We wanted to build a sanctuary. A place where the noise of the city fades away, replaced by the rustle of leaves and the clinking of glasses. Every dish on our menu tells a story of our travels, and every guest who walks through our doors becomes part of our family."
              </p>
              <div>
                <h4 className="font-bold text-xl text-white tracking-wide">Sarah Jenkins</h4>
                <p className="text-thyme-gold uppercase tracking-widest text-sm mt-1 font-medium">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Ethos */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-thyme-green/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-thyme-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-thyme-green font-bold uppercase tracking-widest text-sm">Why We Do It</span>
              <h2 className="font-serif text-4xl md:text-5xl text-thyme-charcoal mt-3 mb-6">Our Ethos</h2>
              <p className="text-gray-600 text-lg font-light">Guided by a passion for excellence and a deep respect for our ingredients.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: Sprout,
                  title: "Rooted in Nature",
                  desc: "We prioritize local farmers and organic produce, ensuring every plate celebrates the earth's natural bounty while supporting our community."
                },
                {
                  icon: ChefHat,
                  title: "Culinary Artistry",
                  desc: "Our kitchen is a canvas driven by passion. We take no shortcuts, crafting honest, innovative dishes with meticulous attention to detail."
                },
                {
                  icon: HeartHandshake,
                  title: "Soulful Hospitality",
                  desc: "More than just service, we offer connection. We are a gathering place where friends and family find comfort, warmth, and belonging."
                }
              ].map((item, idx) => (
                <div key={idx} className="group bg-[#faf9f6] p-10 rounded-[2.5rem] hover:bg-white hover:shadow-[0_20px_50px_rgba(123,44,191,0.5)] hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-[#7B2CBF]/30 text-center relative overflow-hidden flex flex-col items-center">
                   {/* Gradient Background on Hover */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-thyme-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   
                   <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg text-thyme-green mb-8 group-hover:scale-110 group-hover:bg-thyme-green group-hover:text-white transition-all duration-500 z-10">
                     <item.icon className="w-10 h-10 stroke-[1.5]" />
                   </div>
                   
                   <h3 className="relative z-10 font-serif text-2xl font-bold text-thyme-charcoal mb-4 group-hover:text-thyme-green transition-colors duration-300">{item.title}</h3>
                   <p className="relative z-10 text-gray-600 leading-relaxed font-light group-hover:text-gray-900 transition-colors duration-300">
                     {item.desc}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Section 4: The Team Grid */}
      <section className="py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                 <h2 className="font-serif text-4xl md:text-5xl text-thyme-charcoal mb-4">Meet the Maestros</h2>
                 <p className="text-gray-600 text-lg">The dedicated hands and minds behind your dining experience.</p>
              </div>
              <button className="hidden md:inline-flex items-center text-thyme-green font-bold uppercase tracking-widest text-sm hover:text-thyme-gold transition-colors mt-6 md:mt-0">
                 Join Our Team <span className="ml-2 text-xl">→</span>
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Michael Omondi", role: "Head Chef", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800" },
                { name: "Lisa Kamau", role: "General Manager", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800" },
                { name: "David Mwangi", role: "Sommelier", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800" },
                { name: "Sarah Jenkins", role: "Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
              ].map((member, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl h-[400px] shadow-lg cursor-pointer">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                   <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-serif text-xl font-bold">{member.name}</h3>
                      <p className="text-thyme-gold text-xs uppercase tracking-widest font-bold mt-1">{member.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};