
import React from 'react';
import { NAV_LINKS } from '../constants.js';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark-900 border-t border-brand-dark-700/50">
            <div className="container px-6 py-16 mx-auto lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <a href="#home" className="flex items-center space-x-3">
                            <i className="fas fa-crown text-4xl text-gold-500"></i>
                            <div className="flex flex-col leading-tight">
                                <span className="font-playfair font-bold text-2xl text-white">Crown Shisha</span>
                                <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">Catering</span>
                            </div>
                        </a>
                        <p className="mt-4 text-gray-400 max-w-md">
                            Professional shisha catering for corporate events, weddings, and private functions across the Greater Toronto Area.
                        </p>
                        <div className="flex mt-6 space-x-3">
                            <a href="#" aria-label="Instagram" className="social-link"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="Facebook" className="social-link"><i className="fab fa-facebook"></i></a>
                            <a href="#" aria-label="LinkedIn" className="social-link"><i className="fab fa-linkedin"></i></a>
                            <a href="#" aria-label="WhatsApp" className="social-link"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 grid grid-cols-2 gap-8 md:grid-cols-3">
                         <div>
                            <h4 className="font-bold text-white uppercase tracking-wider">Services</h4>
                            <ul className="mt-4 space-y-3">
                                <li><a href="#services" className="footer-link">Corporate Events</a></li>
                                <li><a href="#services" className="footer-link">Wedding Catering</a></li>
                                <li><a href="#services" className="footer-link">Private Parties</a></li>
                                <li><a href="#packages" className="footer-link">Service Packages</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase tracking-wider">Company</h4>
                            <ul className="mt-4 space-y-3">
                               {NAV_LINKS.map(link => (
                                   <li key={link.href}><a href={link.href} className="footer-link">{link.label}</a></li>
                               ))}
                            </ul>
                        </div>
                        <div>
                             <h4 className="font-bold text-white uppercase tracking-wider">Contact Info</h4>
                             <ul className="mt-4 space-y-3 text-gray-400">
                                <li className="flex items-start"><i className="fas fa-phone-alt w-4 mt-1 mr-3 text-gold-500"></i><a href="tel:+16479069995" className="footer-link">+1 (647) 906-9995</a></li>
                                <li className="flex items-start"><i className="fas fa-envelope w-4 mt-1 mr-3 text-gold-500"></i><a href="mailto:book@crownshisha.ca" className="footer-link">book@crownshisha.ca</a></li>
                                <li className="flex items-start"><i className="fas fa-map-marker-alt w-4 mt-1 mr-3 text-gold-500"></i>Toronto GTA</li>
                             </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 mt-16 text-sm text-center text-gray-500 border-t border-brand-dark-700/50">
                    &copy; {new Date().getFullYear()} Crown Shisha Catering. All Rights Reserved. Licensed & Insured.
                </div>
            </div>
        </footer>
    );
};

export default Footer;