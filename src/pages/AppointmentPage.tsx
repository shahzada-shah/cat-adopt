/**
 * AppointmentPage Component
 *
 * A comprehensive appointment booking form for scheduling visits to the cat adoption center.
 * Features include form validation, focused field highlighting, and success confirmation.
 *
 * KEY FEATURES:
 * - Multi-field form with validation
 * - Dynamic field focus states (icons change color)
 * - Date picker (prevents past dates)
 * - Time slot selector
 * - Service type dropdown
 * - Success state after submission
 * - Auto-reset after 3 seconds
 *
 * @component
 */

import { Send, Calendar, User, Phone, MessageSquare, CheckCircle2, Clock, MapPin, Mail } from 'lucide-react';
import { useState } from 'react';

export const AppointmentPage = () => {
  /**
   * FORM STATE MANAGEMENT
   *
   * We use three separate state variables to manage the form:
   * 1. formData - Stores all input values
   * 2. focusedField - Tracks which field is currently active
   * 3. isSubmitted - Controls success message display
   */

  /**
   * formData: Object containing all form field values
   *
   * WHY AN OBJECT?
   * - Keeps related data together
   * - Easy to reset all fields at once
   * - Simple to pass to API calls later
   * - Mirrors the structure of what we'll send to backend
   *
   * INITIAL VALUES:
   * All fields start empty (empty strings)
   * This is better than null because:
   * - Prevents "uncontrolled to controlled" warnings
   * - Works seamlessly with input value props
   * - Empty string is falsy, so easy to check if filled
   */
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });

  /**
   * focusedField: Tracks which input is currently focused
   *
   * WHY WE NEED THIS:
   * - Changes icon color when user clicks in a field
   * - Provides visual feedback that field is active
   * - Creates a more polished, interactive feel
   *
   * TYPE: string | null
   * - string: The name of the focused field (e.g., "name", "email")
   * - null: No field is focused (user clicked outside form)
   */
  const [focusedField, setFocusedField] = useState<string | null>(null);

  /**
   * isSubmitted: Controls the success message display
   *
   * FLOW:
   * - false: Shows the form
   * - true: Shows success message
   * - After 3s: Resets to false and clears form
   *
   * This creates a "submit -> confirm -> reset" cycle
   */
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handle Form Submission
   *
   * This function runs when user clicks "Book Appointment" button.
   *
   * PROCESS:
   * 1. Prevent default form submission (would reload page)
   * 2. Show success message
   * 3. After 3 seconds, reset form and hide success message
   *
   * @param e - Form event object from React
   *
   * WHY e.preventDefault()?
   * By default, HTML forms reload the page when submitted.
   * We prevent this because:
   * - We're handling submission with JavaScript
   * - We want to stay on the same page
   * - We'll send data via API call (not implemented yet)
   *
   * NOTE FOR FUTURE:
   * This is where you'd add API call to actually book the appointment:
   * await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(formData) })
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', date: '', time: '', service: '', message: '' });
    }, 3000);
  };

  /**
   * Handle Input Changes
   *
   * This function updates formData whenever user types in any field.
   * It's used by all form inputs (text, email, date, select, textarea).
   *
   * @param e - Change event from input/textarea/select element
   *
   * HOW IT WORKS:
   * 1. Get the name and value from the input that changed
   * 2. Update formData while keeping all other fields unchanged
   *
   * THE SPREAD OPERATOR (...):
   * ...prev copies all existing formData properties
   * Then [e.target.name]: e.target.value overwrites just the changed field
   *
   * EXAMPLE:
   * If formData is { name: 'John', email: '', phone: '' }
   * And user types in email field:
   * 1. ...prev copies: { name: 'John', email: '', phone: '' }
   * 2. [e.target.name]: 'john@email.com' updates email
   * 3. Result: { name: 'John', email: 'john@email.com', phone: '' }
   *
   * BRACKET NOTATION: [e.target.name]
   * This is "computed property name" syntax
   * - e.target.name is the input's name attribute (e.g., "email")
   * - Brackets make it dynamic, so it updates the right field
   * - Without brackets, it would literally create a field called "e.target.name"
   *
   * TYPE UNION:
   * HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
   * This means the event can come from any of these three element types.
   * TypeScript checks that we're accessing properties that exist on all three.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  const services = [
    'Meet & Greet with Cats',
    'Adoption Consultation',
    'Foster-to-Adopt Info',
    'Cat Care Education',
    'Home Assessment',
    'General Inquiry',
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm mb-6">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                Book Your Visit
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Schedule a Visit</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Book a time to meet our cats and find your perfect companion. Our adoption counselors will be ready to guide you through the process.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visiting Hours</h3>
            <p className="text-gray-600 mb-4">
              Monday - Friday: 10:00 - 18:00<br />
              Saturday: 10:00 - 16:00<br />
              Sunday: 12:00 - 16:00
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">
              123 Pet Care Street<br />
              Kyiv, Ukraine<br />
              02000
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Contact</h3>
            <p className="text-gray-600 mb-4">
              +380 97 241 6729<br />
              info@catadopt.com<br />
              24/7 Emergency Line
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Book Online?</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Instant Confirmation</h3>
                  <p className="text-sm text-gray-600">
                    Receive immediate confirmation of your appointment time via email and SMS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Flexible Scheduling</h3>
                  <p className="text-sm text-gray-600">
                    Choose from available time slots that fit your schedule perfectly
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">No Wait Time</h3>
                  <p className="text-sm text-gray-600">
                    Skip the phone queue and book your appointment in seconds
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Easy Management</h3>
                  <p className="text-sm text-gray-600">
                    Reschedule or cancel appointments online with just a few clicks
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Before Your Visit</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                  <span>Bring your cat's medical records if available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                  <span>Use a secure carrier for transport</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                  <span>Arrive 10 minutes early for check-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
                  <span>Prepare a list of questions or concerns</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 sticky top-24">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto animate-bounce">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Appointment Requested!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for booking with us. We'll contact you shortly to confirm your appointment time.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Appointment</h3>

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'name' ? 'text-gray-900' : 'text-gray-400'}`}>
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your full name"
                        required
                        autoComplete="off"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Phone *
                    </label>
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'phone' ? 'text-gray-900' : 'text-gray-400'}`}>
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+380 XX XXX XX XX"
                        required
                        autoComplete="off"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Email
                    </label>
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'email' ? 'text-gray-900' : 'text-gray-400'}`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="your@email.com"
                        autoComplete="off"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'date' ? 'text-gray-900' : 'text-gray-400'}`}>
                          <Calendar className="w-5 h-5" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('date')}
                          onBlur={() => setFocusedField(null)}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="time" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Time *
                      </label>
                      <div className="relative">
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'time' ? 'text-gray-900' : 'text-gray-400'}`}>
                          <Clock className="w-5 h-5" />
                        </div>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('time')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none appearance-none"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Additional Notes
                    </label>
                    <div className="relative">
                      <div className={`absolute left-4 top-4 transition-colors duration-300 ${focusedField === 'message' ? 'text-gray-900' : 'text-gray-400'}`}>
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell us about your cat and reason for visit..."
                        rows={4}
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white transition-all duration-300 outline-none resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-bold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
                  >
                    <span>Book Appointment</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By submitting this form, you agree to our privacy policy and terms of service
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
