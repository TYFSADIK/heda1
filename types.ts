
export interface Service {
    icon: string;
    category: string;
    title: string;
    description: string;
    features: string[];
}

export interface Package {
    name: string;
    subtitle: string;
    features: string[];
    isFeatured: boolean;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    rating: number;
}
