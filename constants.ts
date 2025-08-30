
import type { Service, Package, Testimonial } from './types.js';

export const NAV_LINKS = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#packages', label: 'Packages' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
];

export const TRUST_DATA = [
    { number: '500+', label: 'Events Catered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+S', label: 'Years Experience' },
    { number: '24/7', label: 'Customer Support' },
];

export const SERVICES_DATA: Service[] = [
    {
        icon: 'fas fa-building',
        category: 'Business Events',
        title: 'Corporate Catering',
        description: 'Professional shisha catering for corporate events, product launches, networking functions, and company celebrations with discrete, upscale service.',
        features: ['Executive event planning', 'Professional uniformed staff', 'Premium equipment setup', 'Flexible service packages'],
    },
    {
        icon: 'fas fa-heart',
        category: 'Wedding Events',
        title: 'Wedding Catering',
        description: 'Create unforgettable memories with our elegant wedding shisha service. We provide sophisticated setups that complement your special day perfectly.',
        features: ['Elegant presentation setups', 'Customized flavor selections', 'Bridal party packages', 'Photography-friendly designs'],
    },
    {
        icon: 'fas fa-birthday-cake',
        category: 'Celebrations',
        title: 'Private Parties',
        description: 'Transform birthdays, anniversaries, and milestone celebrations into luxurious experiences with our premium private party catering services.',
        features: ['Customized party themes', 'Extended service hours', 'Party planning consultation', 'Guest capacity management'],
    },
    {
        icon: 'fas fa-calendar-alt',
        category: 'Special Events',
        title: 'Custom Events',
        description: 'Whatever your occasion, our custom event services ensure your gathering is memorable with tailored solutions and exceptional service quality.',
        features: ['Bespoke service design', 'Event coordination support', 'Venue setup assistance', 'Post-event cleanup'],
    }
];

export const PACKAGES_DATA: Package[] = [
    {
        name: 'Essential',
        subtitle: 'Perfect for intimate gatherings',
        features: ['Best suited for cozy events', '10 professional shishas', 'Premium flavor selection', '4-hour service', 'Professional attendant', 'Setup & cleanup included'],
        isFeatured: false,
    },
    {
        name: 'Premium',
        subtitle: 'Ideal for special celebrations',
        features: ['Tailored for milestone occasions', '15 premium shishas', 'Extended flavor menu', '6-hour service', '2 professional attendants', 'Decorative setup themes', 'Event coordination support'],
        isFeatured: true,
    },
    {
        name: 'Executive',
        subtitle: 'For large-scale events',
        features: ['Designed for large-scale service', '20 premium shishas', 'Exclusive flavor collection', 'Full-day service', 'Dedicated event manager', 'Custom branding options', 'VIP service areas', 'Photography coordination'],
        isFeatured: false,
    }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "Crown Shisha Catering exceeded our expectations for our corporate event. The service was impeccable, staff professional, and the setup was absolutely stunning. Our clients were thoroughly impressed.",
        author: 'Sarah Mitchell',
        role: 'Event Director, Tech Solutions Inc.',
        rating: 5,
    },
    {
        quote: "Our wedding was made even more special by Crown Shisha's elegant service. The attention to detail and professional presentation complemented our celebration perfectly. Highly recommended!",
        author: 'Michael & Jessica Rodriguez',
        role: 'Wedding Clients',
        rating: 5,
    },
    {
        quote: "Professional, reliable, and exceptional quality. Crown Shisha Catering has been our go-to for multiple events. Their team consistently delivers outstanding service that our guests always remember.",
        author: 'David Chen',
        role: 'Private Event Host',
        rating: 5,
    }
];

export const CONTACT_INFO = [
    { icon: 'fas fa-phone-alt', title: 'Business Phone', lines: ['+1 (647) 906-9995', 'Available 24/7 for bookings'] },
    { icon: 'fas fa-envelope', title: 'Email Inquiries', lines: ['book@crownshisha.ca', 'Response within 2 hours'] },
    { icon: 'fas fa-map-marker-alt', title: 'Service Coverage', lines: ['Greater Toronto Area (GTA)', '& surrounding regions'] },
    { icon: 'fas fa-clock', title: 'Consultation Hours', lines: ['Mon - Sun: 9 AM - 11 PM', 'Emergency bookings available'] }
];