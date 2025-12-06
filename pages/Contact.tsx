import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users, Utensils, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { cn } from '../lib/utils';

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reservation' | 'message'>('reservation');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Reservation State
  const [reservation, setReservation] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    requests: ''
  });

  // Message State
  const [message, setMessage] = useState({
    name: '',
    email: '',
    phone: '',
    text: ''
  });

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reservation.date || !reservation.time || !reservation.name || !reservation.email || !reservation.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Date validation
    const selectedDateStr = reservation.date + 'T' + reservation.time;
    const selectedDate = new Date(selectedDateStr);
    const now = new Date();
    
    // Create a date object for the selected day at midnight for simpler date comparison
    const selectedDay = new Date(reservation.date);
    const today = new Date();
    today.setHours(0,0,0,0);
    
    if (selectedDay < today) {
      alert("Please select a future date.");
      return;
    }

    // If selected date is today, check time
    if (selectedDay.getTime() === today.getTime()) {
      if (selectedDate < now) {
         alert("Please select a time in the future.");
         return;
      }
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setReservation({ date: '', time: '', guests: '2', name: '', email: '', phone: '', requests: '' });
    }, 2000);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.name || !message.email || !message.text) {
      alert("Please fill in all required fields.");
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setMessage({ name: '', email: '', phone: '', text: '' });
    }, 2000);
  };

  // Set min date to today
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="animate-fade-in bg-[#faf9f6] min-h-screen">
      <PageHero 
        title="Contact & Reservations"
        subtitle="We'd Love to Hear From You"
        backgroundImage="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12 animate-slide-in-left">
            <div>
              <span className="text-thyme-gold font-bold uppercase tracking-widest text-sm">Get In Touch</span>
              <h2 className="font-serif text-4xl text-thyme-charcoal mt-2 mb-8">Visit Us Today</h2>
              
              <div className="grid gap-6">
                {/* Location Card */}
                <div className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-thyme-green/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-thyme-green/10 transition-colors"></div>
                  <div className="flex items-start">
                    <div className="bg-thyme-beige p-4 rounded-full mr-5 group-hover:bg-thyme-green group-hover:text-white transition-colors duration-300 text-thyme-charcoal">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-xl text-thyme-charcoal mb-2">Location</h4>
                      <p className="text-gray-600 leading-relaxed text-sm mb-4">Eldama Ravine Road, Westlands<br/>Nairobi, Kenya</p>
                      <a 
                        href="https://maps.google.com/?q=About+Thyme+Restaurant" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-thyme-gold hover:text-thyme-green transition-colors"
                      >
                        Get Directions <ArrowUpRight className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-thyme-green/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-thyme-green/10 transition-colors"></div>
                  <div className="flex items-start">
                    <div className="bg-thyme-beige p-4 rounded-full mr-5 group-hover:bg-thyme-green group-hover:text-white transition-colors duration-300 text-thyme-charcoal">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-xl text-thyme-charcoal mb-2">Phone</h4>
                      <p className="text-gray-600 text-sm mb-1">0721 850026</p>
                      <p className="text-xs text-thyme-gold font-bold uppercase tracking-wider mb-4">Reservations Recommended</p>
                      <a 
                        href="tel:+254721850026"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-thyme-gold hover:text-thyme-green transition-colors"
                      >
                        Call Now <ArrowUpRight className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-thyme-green/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-thyme-green/10 transition-colors"></div>
                  <div className="flex items-start">
                    <div className="bg-thyme-beige p-4 rounded-full mr-5 group-hover:bg-thyme-green group-hover:text-white transition-colors duration-300 text-thyme-charcoal">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-xl text-thyme-charcoal mb-2">Email</h4>
                      <p className="text-gray-600 text-sm mb-4">hello@about-thyme.com</p>
                      <a 
                        href="mailto:hello@about-thyme.com"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-thyme-gold hover:text-thyme-green transition-colors"
                      >
                        Send Email <ArrowUpRight className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-thyme-charcoal text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
               {/* Decorative circles */}
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
               <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-thyme-gold/10 rounded-full blur-2xl"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center mb-6">
                   <Clock className="h-7 w-7 text-thyme-gold mr-3" />
                   <h4 className="font-serif text-2xl font-bold">Opening Hours</h4>
                 </div>
                 <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
                   <span className="font-medium text-gray-300 text-lg">Monday - Sunday</span>
                   <span className="font-bold text-2xl tracking-tight text-white">8:00 AM – 11:00 PM</span>
                 </div>
                 <p className="text-sm text-gray-400 italic flex items-center">
                   <AlertCircle className="w-4 h-4 mr-2" />
                   Kitchen closes at 10:00 PM
                 </p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-fit transform hover:translate-y-[-5px] transition-transform duration-500">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => { setActiveTab('reservation'); setStatus('idle'); }}
                className={cn(
                  "flex-1 py-6 text-center font-serif font-bold text-lg transition-all relative outline-none",
                  activeTab === 'reservation' 
                    ? "text-thyme-green bg-white" 
                    : "text-gray-400 bg-gray-50 hover:bg-gray-100 hover:text-gray-600"
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  <Utensils className={cn("w-5 h-5", activeTab === 'reservation' ? "text-thyme-gold" : "")} />
                  Book a Table
                </span>
                {activeTab === 'reservation' && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-thyme-gold"></div>
                )}
              </button>
              <button
                onClick={() => { setActiveTab('message'); setStatus('idle'); }}
                className={cn(
                  "flex-1 py-6 text-center font-serif font-bold text-lg transition-all relative outline-none",
                  activeTab === 'message' 
                    ? "text-thyme-green bg-white" 
                    : "text-gray-400 bg-gray-50 hover:bg-gray-100 hover:text-gray-600"
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className={cn("w-5 h-5", activeTab === 'message' ? "text-thyme-gold" : "")} />
                  Send Message
                </span>
                {activeTab === 'message' && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-thyme-gold"></div>
                )}
              </button>
            </div>

            <div className="p-8 md:p-10 flex-grow relative min-h-[500px]">
              {status === 'success' ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20 p-8 text-center animate-fade-in">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_ease-out]">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-thyme-charcoal mb-4">
                    {activeTab === 'reservation' ? 'Request Received!' : 'Message Sent!'}
                  </h3>
                  <p className="text-gray-600 max-w-xs text-lg mb-8 leading-relaxed">
                    {activeTab === 'reservation' 
                      ? 'We have received your reservation request. We will confirm via email or phone shortly.' 
                      : 'Thank you for contacting us. We will get back to you as soon as possible.'}
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-thyme-green font-bold uppercase tracking-widest text-sm hover:text-thyme-charcoal border-b-2 border-thyme-green pb-1 hover:border-thyme-charcoal transition-all"
                  >
                    Back to Form
                  </button>
                </div>
              ) : null}

              {activeTab === 'reservation' ? (
                <form onSubmit={handleReservationSubmit} className={cn("space-y-6 transition-opacity duration-300", status === 'loading' ? 'opacity-50 pointer-events-none' : 'opacity-100')}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Date *</label>
                      <div className="relative">
                        {/* Custom Icon */}
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-thyme-gold transition-colors pointer-events-none z-10" />
                        <input 
                          type="date" 
                          required
                          min={todayStr}
                          value={reservation.date}
                          onChange={e => setReservation({...reservation, date: e.target.value})}
                          onClick={(e) => {
                             // Fallback for click (though CSS handles the trigger area mostly)
                             try {
                               if (typeof (e.target as any).showPicker === 'function') {
                                 (e.target as any).showPicker();
                               }
                             } catch (error) {
                               console.log("Picker not supported");
                             }
                          }}
                          // CSS explanation: 
                          // - [&::-webkit-calendar-picker-indicator]:opacity-0  -> Hides the browser's default calendar icon visually
                          // - ...:absolute ...:w-full ...:h-full -> Stretches the hidden browser icon trigger to cover the entire input
                          // This ensures clicking anywhere on the input (including over our custom icon) triggers the native picker.
                          className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium text-gray-700 cursor-pointer relative z-0 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:left-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Time *</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-thyme-gold transition-colors pointer-events-none z-10" />
                        <input 
                          type="time" 
                          required
                          value={reservation.time}
                          onChange={e => setReservation({...reservation, time: e.target.value})}
                          onClick={(e) => {
                             try {
                               if (typeof (e.target as any).showPicker === 'function') {
                                 (e.target as any).showPicker();
                               }
                             } catch (error) {
                               console.log("Picker not supported");
                             }
                          }}
                          className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium text-gray-700 cursor-pointer relative z-0 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:left-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Number of Guests *</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-thyme-gold transition-colors pointer-events-none" />
                      <select
                        value={reservation.guests}
                        onChange={e => setReservation({...reservation, guests: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium text-gray-700 appearance-none cursor-pointer hover:bg-gray-100"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "11+", "20+"].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={reservation.name}
                        onChange={e => setReservation({...reservation, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Phone *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+254..."
                        value={reservation.phone}
                        onChange={e => setReservation({...reservation, phone: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      value={reservation.email}
                      onChange={e => setReservation({...reservation, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Special Requests</label>
                    <textarea 
                      rows={3}
                      placeholder="Allergies, high chair, birthday, anniversary..."
                      value={reservation.requests}
                      onChange={e => setReservation({...reservation, requests: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-thyme-charcoal text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-thyme-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5 mr-2" />
                        Processing...
                      </>
                    ) : 'Request Reservation'}
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    Booking for more than 10 people? Please call us directly at <strong>0721 850026</strong>.
                  </p>
                </form>
              ) : (
                <form onSubmit={handleMessageSubmit} className={cn("space-y-6 transition-opacity duration-300", status === 'loading' ? 'opacity-50 pointer-events-none' : 'opacity-100')}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Name *</label>
                      <input 
                        type="text" 
                        required
                        value={message.name}
                        onChange={e => setMessage({...message, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Phone</label>
                      <input 
                        type="tel" 
                        value={message.phone}
                        onChange={e => setMessage({...message, phone: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium"
                        placeholder="Your Number"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Email *</label>
                    <input 
                      type="email" 
                      required
                      value={message.email}
                      onChange={e => setMessage({...message, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2 group-focus-within:text-thyme-green transition-colors">Message *</label>
                    <textarea 
                      rows={5}
                      required
                      value={message.text}
                      onChange={e => setMessage({...message, text: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-thyme-green focus:ring-1 focus:ring-thyme-green/20 focus:bg-white transition-all text-sm font-medium resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-thyme-charcoal text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-thyme-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center"
                  >
                     {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5 mr-2" />
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-96 bg-gray-200 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.835467475143!2d36.806653314754!3d-1.272183999071597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17376c669141%3A0xc48750849319808a!2sAbout%20Thyme%20Restaurant!5e0!3m2!1sen!2ske!4v1628173429111!5m2!1sen!2ske" 
             width="100%" 
             height="100%" 
             style={{border:0, filter: 'grayscale(100%) invert(0%)'}} 
             allowFullScreen 
             loading="lazy"
           ></iframe>
           <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md font-bold text-thyme-charcoal text-sm pointer-events-none">
             Find us on Google Maps
           </div>
        </div>
      </div>
    </div>
  );
};