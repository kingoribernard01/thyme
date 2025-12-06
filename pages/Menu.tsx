import React, { useState } from 'react';
import { MenuItem } from '../types';
import { PageHero } from '../components/PageHero';

const MENU_ITEMS: MenuItem[] = [
  // Starters
  { 
    id: '1', 
    name: "Crispy Calamari", 
    description: "Tender calamari rings, lightly dusted and fried, served with garlic aioli and lemon wedges.", 
    price: "KSH 950", 
    category: "Starters",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800"
  },
  { 
    id: '2', 
    name: "Butternut Soup", 
    description: "Creamy roasted butternut squash soup garnished with toasted pumpkin seeds and herb croutons.", 
    price: "KSH 750", 
    category: "Starters", 
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1547592166-23acbe34071b?q=80&w=800"
  },
  { 
    id: '3', 
    name: "Chicken Liver Paté", 
    description: "Smooth homemade chicken liver paté served with a sweet red onion marmalade and melba toast.", 
    price: "KSH 850", 
    category: "Starters",
    image: "https://images.unsplash.com/photo-1518110925418-f6820c78479e?q=80&w=800"
  },
  {
    id: '3b',
    name: "Caprese Salad",
    description: "Fresh buffalo mozzarella, vine ripened tomatoes, basil pesto and balsamic glaze.",
    price: "KSH 1100",
    category: "Starters",
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=800"
  },
  
  // Mains
  { 
    id: '4', 
    name: "Pepper Steak", 
    description: "Aged beef fillet grilled to your liking, smothered in a creamy cracked black pepper sauce, served with rustic fries.", 
    price: "KSH 2200", 
    category: "Mains",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800"
  },
  { 
    id: '5', 
    name: "Thai Green Curry", 
    description: "Aromatic coconut based curry with bamboo shoots, snap peas, fresh basil and jasmine rice.", 
    price: "KSH 1800", 
    category: "Mains",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800"
  },
  { 
    id: '6', 
    name: "Mushroom Risotto", 
    description: "Creamy Arborio rice cooked with a variety of wild mushrooms, finished with parmesan and truffle oil.", 
    price: "KSH 1650", 
    category: "Mains", 
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800"
  },
  { 
    id: '7', 
    name: "Grilled Red Snapper", 
    description: "Fresh ocean catch served with a zesty lemon butter sauce, crushed baby potatoes and seasonal vegetables.", 
    price: "KSH 1950", 
    category: "Mains",
    image: "https://images.unsplash.com/photo-1535007813616-6718a2644265?q=80&w=800"
  },
  {
    id: '7b',
    name: "Lamb Chops",
    description: "Grilled marinated lamb chops with mint chimichurri, mashed potatoes and sauteed spinach.",
    price: "KSH 2400",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?q=80&w=800"
  },

  // Desserts
  { 
    id: '8', 
    name: "Sticky Toffee Pudding", 
    description: "Warm, classic sponge cake drenched in rich toffee sauce, served with vanilla bean ice cream.", 
    price: "KSH 850", 
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800"
  },
  { 
    id: '9', 
    name: "Chocolate Fondant", 
    description: "Decadent molten chocolate cake served with a tart berry coulis and cream.", 
    price: "KSH 900", 
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1617305855068-09756b32b38f?q=80&w=800"
  },
  {
    id: '9b',
    name: "Lemon Cheesecake",
    description: "Zesty lemon curd cheesecake on a biscuit base, topped with fresh berries.",
    price: "KSH 850",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800"
  },

  // Drinks
  { 
    id: '10', 
    name: "Thyme Mojito", 
    description: "Our signature cocktail with rum, fresh lime, garden mint, thyme syrup and soda water.", 
    price: "KSH 850", 
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=800"
  },
  { 
    id: '11', 
    name: "Espresso Martini", 
    description: "A sophisticated blend of Vodka, coffee liqueur and a shot of fresh espresso.", 
    price: "KSH 950", 
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1632808466885-3e284a1a681d?q=80&w=800"
  },
  {
    id: '12',
    name: "House Red Wine",
    description: "Cabernet Sauvignon (Glass)",
    price: "KSH 750",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800"
  }
];

export const Menu: React.FC = () => {
  const categories = ["Starters", "Mains", "Desserts", "Drinks"];
  const [activeCategory, setActiveCategory] = useState("Mains");

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="animate-fade-in bg-[#faf9f6] min-h-screen">
       <PageHero 
         title="Our Menu" 
         subtitle="Globally Inspired, Locally Sourced"
         backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
       />

       <div className="max-w-7xl mx-auto px-4 py-16">
         {/* Tabs */}
         <div className="flex flex-wrap justify-center gap-6 mb-16">
           {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                 activeCategory === cat 
                   ? 'bg-thyme-green text-white shadow-lg transform scale-105' 
                   : 'bg-white text-gray-500 hover:bg-thyme-green/10 hover:text-thyme-green border border-gray-200'
               }`}
             >
               {cat}
             </button>
           ))}
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredItems.map(item => (
             <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
               <div className="h-56 overflow-hidden relative">
                 <img 
                   src={item.image} 
                   alt={item.name} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 {item.isVegetarian && (
                   <span className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                     Veg
                   </span>
                 )}
               </div>
               <div className="p-6">
                 <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-bold text-thyme-charcoal group-hover:text-thyme-green transition-colors">{item.name}</h3>
                    <span className="text-thyme-gold font-bold font-sans">{item.price}</span>
                 </div>
                 <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                 <button className="text-xs font-bold uppercase tracking-widest text-thyme-green hover:text-thyme-charcoal transition-colors">
                   Order Now
                 </button>
               </div>
             </div>
           ))}
         </div>
         
         <div className="mt-20 text-center max-w-2xl mx-auto p-8 bg-white border border-thyme-beige rounded-lg shadow-sm">
           <h4 className="font-serif text-xl text-thyme-charcoal mb-3">Dietary Requirements?</h4>
           <p className="text-gray-600">Our chefs are happy to accommodate allergies and dietary restrictions. Please inform your server when placing your order.</p>
         </div>
       </div>
    </div>
  );
};