export interface Testimonial {
  id: string;
  name: string;
  avatarUrl?: string;
  initials?: string;
  rating: number;
  content: string;
  // date: string;
  color?: string;
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplaySpeed?: number; // in ms
  pauseOnHover?: boolean;
}
