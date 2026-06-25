import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, ShieldAlert, Sparkles, X, Check, Copy } from 'lucide-react';
import { SEATING_ZONES_INFO, AVAILABLE_HOURS } from '../data';
import { Reservation, SeatingZone } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ReservationProps {
  onReservationSuccess?: () => void;
}

export default function ReservationComponent({ onReservationSuccess }: ReservationProps) {
  // Booking Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [selectedZone, setSelectedZone] = useState<SeatingZone>('Grand Velvet Salon');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [specialOccasion, setSpecialOccasion] = useState<Reservation['specialOccasion']>('None');

  // Success state & My Bookings state
  const [allReservations, setAllReservations] = useState<Reservation[]>([]);
  const [newlyBookedId, setNewlyBookedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [validationError, setValidationError] = useState('');

  // Load existing reservations from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('leclipse_reservations');
    if (saved) {
      try {
        setAllReservations(JSON.parse(saved));
      } catch (e) {
        console.error("Could not parse saved bookings", e);
      }
    }
  }, []);

  // Save reservations to localStorage helper
  const saveReservations = (updated: Reservation[]) => {
    setAllReservations(updated);
    localStorage.setItem('leclipse_reservations', JSON.stringify(updated));
  };

  // Handle new reservation submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Form validations
    if (!name || !email || !phone || !date || !time) {
      setValidationError('Please complete all primary fields (Name, Email, Phone, Date, and Time).');
      return;
    }

    // Check if date is in the past
    const selectedDate = new Date(date + 'T00:00:00');
    const today = new Date();
    today.setHours(0,0,0,0);
    if (selectedDate < today) {
      setValidationError('Please choose a date in the future.');
      return;
    }

    // Generate luxurious reservation structure
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newBooking: Reservation = {
      id: `ECL-${randomCode}`,
      name,
      email,
      phone,
      date,
      time,
      partySize,
      zone: selectedZone,
      dietaryNotes: dietaryNotes.trim() || undefined,
      specialOccasion,
      status: selectedZone === 'The Obsidian Cellar' || selectedZone === 'Chefs Counter' ? 'Pending Verification' : 'Confirmed'
    };

    const updated = [newBooking, ...allReservations];
    saveReservations(updated);
    setNewlyBookedId(newBooking.id);

    // Reset Form Fields
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setPartySize(2);
    setSelectedZone('Grand Velvet Salon');
    setDietaryNotes('');
    setSpecialOccasion('None');

    if (onReservationSuccess) {
      onReservationSuccess();
    }
  };

  // Cancel an existing reservation
  const handleCancelBooking = (id: string) => {
    const updated = allReservations.filter(res => res.id !== id);
    saveReservations(updated);
    if (newlyBookedId === id) {
      setNewlyBookedId(null);
    }
  };

  // Copy Ticket Code to clipboard
  const handleCopyCode = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="reservation"
      className="py-24 bg-coal border-t border-b border-white/5 relative overflow-hidden"
    >
      {/* Visual glowing light leaks */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-crimson/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-velvet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-gold uppercase tracking-[0.3em] block">
            Table Commissions & VIP Access
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
            The Reservation Portal
          </h2>
          <div className="w-12 h-[2px] bg-crimson mx-auto mt-4" />
          <p className="text-neutral-400 text-sm font-light tracking-wide max-w-lg mx-auto">
            Bookings are open 30 days in advance. Select from our themed seating zones to customize your culinary theatre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: The Interactive Reservation Form (Cols: 1-7) */}
          <div className="lg:col-span-7 bg-onyx border border-white/5 p-6 sm:p-10 relative">
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-crimson/40" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-crimson/40" />

            <h3 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <span>Design Your Dining Experience</span>
            </h3>

            {validationError && (
              <div className="bg-red-950/40 border border-crimson text-red-300 text-xs py-3 px-4 mb-6 font-mono flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Party Size & Date inputs in parallel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Stepper Guest count */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-gold" />
                    <span>Guests (Party Size)</span>
                  </label>
                  <div className="flex border border-white/10 bg-coal select-none">
                    <button
                      type="button"
                      onClick={() => setPartySize(Math.max(1, partySize - 1))}
                      className="px-4 py-3 text-neutral-400 hover:text-white hover:bg-black/40 transition-colors w-12 font-mono"
                    >
                      -
                    </button>
                    <div className="flex-1 flex items-center justify-center font-mono font-bold text-white text-sm">
                      {partySize} {partySize === 1 ? 'Guest' : 'Guests'}
                    </div>
                    <button
                      type="button"
                      onClick={() => setPartySize(Math.min(10, partySize + 1))}
                      className="px-4 py-3 text-neutral-400 hover:text-white hover:bg-black/40 transition-colors w-12 font-mono"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Calendar Date picker */}
                <div className="space-y-2">
                  <label htmlFor="res-date" className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>Selected Date</span>
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-coal border border-white/10 px-4 py-3 text-sm text-white focus:border-crimson focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Seating Zones Custom Selector Cards */}
              <div className="space-y-3">
                <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block">
                  Select Seating Sanctuary
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SEATING_ZONES_INFO.map((zone) => {
                    const isSelected = selectedZone === zone.name;
                    return (
                      <div
                        key={zone.id}
                        onClick={() => setSelectedZone(zone.name)}
                        className={`border p-4 cursor-pointer text-left transition-all duration-300 relative ${
                          isSelected
                            ? 'border-crimson bg-gradient-to-br from-velvet/45 to-coal'
                            : 'border-white/5 bg-coal/50 hover:bg-coal hover:border-white/10'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-4 h-4 bg-crimson rounded-full flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                        <h4 className="font-serif text-sm font-medium text-white tracking-wide">
                          {zone.name}
                        </h4>
                        <p className="text-[11px] text-neutral-400 font-light leading-tight mt-1 mb-2">
                          {zone.description}
                        </p>
                        <div className="flex justify-between items-center text-[9px] font-mono border-t border-white/5 pt-1.5 text-neutral-500">
                          <span>Max: {zone.capacity}</span>
                          <span className={zone.premiumCharge !== 'No additional fee' ? 'text-gold' : ''}>
                            {zone.premiumCharge}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Selection Grid */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>Available Seating Times</span>
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {AVAILABLE_HOURS.map((hour) => {
                    const isSelected = time === hour;
                    return (
                      <button
                        key={hour}
                        type="button"
                        onClick={() => setTime(hour)}
                        className={`py-2 text-xs font-mono text-center transition-all ${
                          isSelected
                            ? 'bg-crimson text-white font-bold border border-crimson shadow-md shadow-crimson/15'
                            : 'bg-coal text-neutral-400 hover:text-white border border-white/5 hover:border-white/10'
                        }`}
                      >
                        {hour}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 pt-2">
                <div className="h-[1px] bg-white/5" />
                <span className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block">
                  VIP Contact Credentials
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-coal border border-white/10 px-3 py-2.5 text-xs text-white focus:border-crimson focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-coal border border-white/10 px-3 py-2.5 text-xs text-white focus:border-crimson focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-coal border border-white/10 px-3 py-2.5 text-xs text-white focus:border-crimson focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Extras: Dietary restrictions & Special occasions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="occasions" className="font-mono text-[9px] uppercase text-neutral-500 tracking-wider">
                    Special Occasion
                  </label>
                  <select
                    id="occasions"
                    value={specialOccasion}
                    onChange={(e) => setSpecialOccasion(e.target.value as Reservation['specialOccasion'])}
                    className="w-full bg-coal border border-white/10 px-3 py-2 text-xs text-neutral-300 focus:border-crimson focus:outline-none"
                  >
                    <option value="None">None</option>
                    <option value="Anniversary">Anniversary Celebration</option>
                    <option value="Birthday">Birthday Gathering</option>
                    <option value="Business Dinner">Business Dinner</option>
                    <option value="Date Night">Romantic Date Night</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="dietary-requirements" className="font-mono text-[9px] uppercase text-neutral-500 tracking-wider">
                    Dietary Requirements / Allergies
                  </label>
                  <input
                    id="dietary-requirements"
                    type="text"
                    placeholder="e.g. Nut Allergy, Gluten-Free options"
                    value={dietaryNotes}
                    onChange={(e) => setDietaryNotes(e.target.value)}
                    className="w-full bg-coal border border-white/10 px-3 py-2 text-xs text-neutral-300 focus:border-crimson focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                id="submit-booking-btn"
                type="submit"
                className="w-full bg-gradient-to-r from-velvet to-crimson hover:from-crimson hover:to-scarlet border border-crimson/20 hover:border-crimson/40 text-white text-xs uppercase tracking-[0.25em] py-4 transition-all shadow-lg shadow-crimson/20 hover:scale-[1.01]"
              >
                Seal Reservation Ticket
              </button>
            </form>
          </div>

          {/* RIGHT PANEL: Reservation status and dynamic VIP Ticket view (Cols: 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Newly Booked Ticket Showcase */}
            <AnimatePresence mode="wait">
              {newlyBookedId && (
                <motion.div
                  key="booked-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-gradient-to-b from-velvet to-black border-2 border-crimson/40 p-6 relative overflow-hidden"
                >
                  {/* Decorative Ticket Punch marks */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-coal rounded-full border border-crimson/30" />
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-coal rounded-full border border-crimson/30" />

                  {/* Header */}
                  <div className="border-b border-dashed border-crimson/30 pb-4 text-center">
                    <span className="text-[10px] text-gold uppercase tracking-[0.3em] font-mono">Commission Confirmed</span>
                    <h4 className="font-serif text-2xl text-white tracking-[0.1em] mt-1">L'ÉCLIPSE TICKET</h4>
                    <span className="text-[8px] text-neutral-400 font-mono tracking-widest uppercase">Gastronomie d'Exception</span>
                  </div>

                  {/* Booking code badge */}
                  <div className="py-6 flex flex-col items-center justify-center text-center">
                    <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Access Ticket Code</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-3xl font-bold text-white tracking-widest">{newlyBookedId}</span>
                      <button
                        onClick={() => handleCopyCode(newlyBookedId)}
                        className="p-1 hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"
                        title="Copy Ticket Code"
                      >
                        {copiedId === newlyBookedId ? (
                          <span className="text-[9px] font-mono text-emerald-500 font-semibold">COPIED</span>
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Details */}
                  {(() => {
                    const currentBooking = allReservations.find(r => r.id === newlyBookedId);
                    if (!currentBooking) return null;
                    return (
                      <div className="space-y-4 font-mono text-xs text-neutral-300 border-t border-b border-dashed border-gold/30 py-4 mb-4">
                        <div className="flex justify-between">
                          <span className="text-neutral-500">GUEST:</span>
                          <span className="text-white truncate font-sans font-light max-w-[150px]">{currentBooking.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">DATE:</span>
                          <span className="text-white">{currentBooking.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">SEATING:</span>
                          <span className="text-white">{currentBooking.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">COVERS:</span>
                          <span className="text-white">{currentBooking.partySize} Seated</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500">SANCTUARY:</span>
                          <span className="text-gold">{currentBooking.zone}</span>
                        </div>
                        {currentBooking.specialOccasion !== 'None' && (
                          <div className="flex justify-between text-[11px] text-crimson">
                            <span>CELEBRATING:</span>
                            <span>{currentBooking.specialOccasion}</span>
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {/* Ticket footer note */}
                  <div className="text-center">
                    <p className="text-[9px] text-neutral-400 leading-tight">
                      *Please show this digital ticket upon arrival. Smart casual dress code applies.
                    </p>
                    <button
                      onClick={() => setNewlyBookedId(null)}
                      className="text-[10px] text-gold uppercase tracking-[0.2em] font-mono mt-4 hover:text-white underline transition-colors"
                    >
                      Book Another Seating
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* My Active Bookings Panel (Client side persistency) */}
            <div className="bg-coal border border-white/5 p-6 relative">
              <h4 className="font-serif text-lg text-white font-light tracking-wide mb-4 border-b border-white/5 pb-2">
                Your Commissions ({allReservations.length})
              </h4>

              {allReservations.length === 0 ? (
                <div className="text-center py-8 text-neutral-500 font-mono text-xs">
                  <span>No active reservations found in this browser cache.</span>
                </div>
              ) : (
                <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
                  {allReservations.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-black/60 border border-white/5 p-4 flex justify-between items-start group relative hover:border-crimson/25 transition-all"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-sm text-white">{booking.id}</span>
                          <span className={`text-[8px] font-mono uppercase px-2 py-0.5 rounded-none ${
                            booking.status === 'Confirmed' ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/30' : 'bg-amber-950/40 text-amber-400 border border-amber-800/30'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 font-mono">
                          {booking.date} @ {booking.time} • {booking.partySize} Guests
                        </p>
                        <p className="text-[10px] text-gold-dark font-serif italic">
                          {booking.zone}
                        </p>
                      </div>

                      {/* Cancel Booking Action */}
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="p-1 hover:bg-crimson/10 text-neutral-500 hover:text-crimson transition-all border border-transparent hover:border-crimson/20"
                        title="Cancel Reservation"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Important Notes info box */}
            <div className="border border-white/5 bg-coal/40 p-5 space-y-3">
              <h5 className="font-mono text-[10px] text-gold uppercase tracking-widest font-semibold flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-crimson" />
                <span>Smart Guidelines</span>
              </h5>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                <strong>Dress Code:</strong> Our guests are requested to wear elegant smart-casual attire. Athletics, caps, and beachwear are not permitted.
              </p>
              <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                <strong>Grace Period:</strong> Tables are held for up to 15 minutes past the reserved seating time. Please notify us if you are delayed.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
