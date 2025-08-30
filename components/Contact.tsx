
import React, { useState } from 'react';
import SectionHeader from './ui/SectionHeader.js';
import Button from './ui/Button.js';
import { CONTACT_INFO } from '../constants.js';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

const Contact: React.FC = () => {
    useScrollAnimation();
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        eventType: '', eventDate: '', guestCount: '', message: ''
    });
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const { firstName, lastName, email, phone, eventType, message } = formData;
        
        if (!firstName || !lastName || !email || !phone || !eventType || !message) {
            setNotification({ message: "Please fill out all required fields.", type: 'error'});
            setTimeout(() => setNotification(null), 5000);
            return;
        }

        const subject = `Consultation Request - ${eventType} - ${firstName} ${lastName}`;
        const body = `
            CLIENT INFORMATION:
            Name: ${formData.firstName} ${formData.lastName}
            Email: ${formData.email}
            Phone: ${formData.phone}

            EVENT DETAILS:
            Event Type: ${formData.eventType}
            Preferred Date: ${formData.eventDate || 'Not specified'}
            Expected Guests: ${formData.guestCount || 'Not specified'}

            MESSAGE:
            ${formData.message}
        `;
        
        window.location.href = `mailto:book@crownshisha.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        setNotification({ message: "Redirecting to your email client. Thank you!", type: 'success'});
        setTimeout(() => setNotification(null), 5000);
        setFormData({
            firstName: '', lastName: '', email: '', phone: '', eventType: '', eventDate: '', guestCount: '', message: ''
        });
    };

    return (
        <section id="contact" className="py-24 bg-brand-dark-800/50 sm:py-32">
             {notification && (
                <div className={`fixed top-24 right-6 z-[100] p-4 rounded-lg shadow-lg text-white backdrop-blur-md border ${notification.type === 'success' ? 'bg-green-500/30 border-green-500/50' : 'bg-red-500/30 border-red-500/50'}`}>
                    <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2`}></i>
                    {notification.message}
                </div>
            )}
            <div className="container px-6 mx-auto lg:px-8">
                <div className="fade-in">
                    <SectionHeader
                        badge="Get In Touch"
                        title="Request Professional Consultation"
                        subtitle="Ready to elevate your event? Contact our professional team for a customized quote and expert event planning consultation."
                    />
                </div>
                <div className="grid grid-cols-1 gap-16 mt-20 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                        {CONTACT_INFO.map((item, index) => (
                             <div key={index} className="fade-in flex items-start p-6 bg-brand-dark-800/50 border border-brand-dark-700 rounded-xl transition-all duration-300 hover:border-gold-500/50 hover:shadow-lg" style={{ transitionDelay: `${index * 100}ms`}}>
                                <i className={`${item.icon} text-2xl text-gold-400 w-8 mt-1`}></i>
                                <div className="ml-4">
                                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                    {item.lines.map((line, i) => (
                                        <p key={i} className="text-gray-400">{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="lg:col-span-3 fade-in" style={{ transitionDelay: `500ms`}}>
                        <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-brand-dark-800/50 border border-brand-dark-700 rounded-2xl">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className="form-input" aria-label="First Name" />
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className="form-input" aria-label="Last Name" />
                            </div>
                             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="form-input" aria-label="Email Address" />
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="form-input" aria-label="Phone Number" />
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <select name="eventType" value={formData.eventType} onChange={handleChange} required className="form-input" aria-label="Event Type">
                                    <option value="">Select Event Type</option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Private Party">Private Party</option>
                                    <option value="Other">Other</option>
                                </select>
                                <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="form-input" min={new Date().toISOString().split('T')[0]} aria-label="Preferred Date"/>
                            </div>
                            <input type="number" name="guestCount" value={formData.guestCount} onChange={handleChange} placeholder="Expected Guest Count" className="form-input" aria-label="Expected Guest Count" />
                            <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Event Details & Special Requirements" required className="form-input" aria-label="Event Details & Special Requirements"></textarea>
                            <Button type="submit" variant="primary" className="w-full">
                                Request Professional Consultation
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;