import { z } from 'zod'

// Schema validation for testimonials
export const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatarUrl: z.string().optional(),
  initials: z.string().optional(),
  rating: z.number().min(1).max(5),
  content: z.string(),
  // date: z.string(),
  color: z.string().optional(),
})

export type Testimonial = z.infer<typeof TestimonialSchema>

// Mock data - in a real app, this would come from an API or CMS
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'NICOLEZ PHUA',
    initials: 'NP',
    rating: 2,
    content:
      'I actively participated in the 2-week sprint cohort, and although this was a free "test" of the exercise, it was short on content and information. The importance of having a mentor.',
    color: 'bg-orange-500',
  },
  {
    id: '2',
    name: 'MIKAEL',
    initials: 'M',
    rating: 5,
    content:
      "Mo's mini course was very informative, guiding me in structuring and narrowing it down to more specific projects. The course also mentions weekly accountability check-ins as well which was a nice tip.",
    color: 'bg-purple-500',
  },
  {
    id: '3',
    name: 'DAVID K. WHITLOCK',
    initials: 'DW',
    rating: 5,
    content:
      "Your suggestions of what exactly to look for in finding a machine learning expert to help me with my project was invaluable. I've talked to a number of experts since our call, and I'm now much closer to finding someone who can help me.",
    color: 'bg-blue-500',
  },
  {
    id: '4',
    name: 'CAROLINA',
    initials: 'C',
    rating: 5,
    content:
      "Hi, I'm so glad to find you, Mo. I didn't have a clear idea about my next step, but you provided amazing clarity. I really appreciate that you shared your experience with me, and the resources you recommended have been incredibly helpful.",
    color: 'bg-teal-500',
  },
  {
    id: '5',
    name: 'JAMES PETERSON',
    initials: 'JP',
    rating: 4,
    content:
      "The workshop exceeded my expectations. The practical exercises were particularly valuable, and I've already implemented several of the techniques we learned into my daily workflow.",
    color: 'bg-red-500',
  },
  {
    id: '6',
    name: 'SARAH THOMPSON',
    initials: 'ST',
    rating: 5,
    content:
      'Working with this team has transformed our approach to project management. The custom framework they developed for us has increased our efficiency by at least 30%.',
    color: 'bg-green-500',
  },
  {
    id: '7',
    name: 'MICHAEL CHEN',
    initials: 'MC',
    rating: 5,
    content:
      'The technical mentorship program was exactly what I needed to level up my development skills. The personalized feedback on my code was invaluable.',
    color: 'bg-indigo-500',
  },
  {
    id: '8',
    name: 'EMMA RODRIGUEZ',
    initials: 'ER',
    rating: 4,
    content:
      "The UI/UX workshop series helped me understand design principles from a developer's perspective. I'm now much more confident in creating user-friendly interfaces.",
    color: 'bg-pink-500',
  },
  {
    id: '9',
    name: 'ALEX KUMAR',
    initials: 'AK',
    rating: 5,
    content:
      'The cloud architecture consultation saved us months of trial and error. The solutions proposed were both cost-effective and scalable.',
    color: 'bg-yellow-500',
  },
  {
    id: '10',
    name: 'LISA WONG',
    initials: 'LW',
    rating: 4,
    content:
      "The agile development bootcamp was intensive but incredibly rewarding. I've successfully implemented these practices in my team.",
    color: 'bg-cyan-500',
  },
  {
    id: '11',
    name: 'THOMAS ANDERSON',
    initials: 'TA',
    rating: 5,
    content:
      'The DevOps pipeline optimization service dramatically improved our deployment efficiency. Our release cycle is now 60% faster.',
    color: 'bg-rose-500',
  },
  {
    id: '12',
    name: 'PRIYA PATEL',
    initials: 'PP',
    rating: 5,
    content:
      'The mobile app development workshop was comprehensive and practical. I appreciated the focus on cross-platform development strategies.',
    color: 'bg-emerald-500',
  },
  {
    id: '13',
    name: 'RYAN MITCHELL',
    initials: 'RM',
    rating: 4,
    content:
      'The security audit and consultation helped us identify and fix critical vulnerabilities. The documentation provided was thorough and actionable.',
    color: 'bg-violet-500',
  },
  {
    id: '14',
    name: 'SOPHIA LEE',
    initials: 'SL',
    rating: 5,
    content:
      'The API design workshop changed how I think about building scalable backends. The best practices shared are now my go-to reference.',
    color: 'bg-amber-500',
  },
  {
    id: '15',
    name: 'MARCUS JOHNSON',
    initials: 'MJ',
    rating: 5,
    content:
      "The performance optimization consultation helped us reduce our application's load time by 40%. The ROI was immediate and significant.",
    color: 'bg-lime-500',
  },
]

// app/page.tsx - Example usage with SSR
// import { Suspense } from 'react';
// import TestimonialCarousel from '@/components/TestimonialCarousel';
// import { testimonials } from '@/lib/testimonialData';

// export default function HomePage() {
//   return (
//     <main>
//       {/* Other content */}

//       <Suspense fallback={<div className="h-96 bg-blue-100 animate-pulse" />}>
//         <TestimonialCarousel testimonials={testimonials} />
//       </Suspense>

//       {/* Other content */}
//     </main>
//   );
// }

// For Server-Side Data Fetching (example):
// app/page.tsx with data fetching
// import { Suspense } from 'react';
// import TestimonialCarousel from '@/components/TestimonialCarousel';
// import { TestimonialSchema } from '@/lib/testimonialData';

// async function getTestimonials() {
//   // Real implementation would fetch from API or database
//   const res = await fetch('https://api.example.com/testimonials', {
//     next: { revalidate: 3600 } // Revalidate every hour
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch testimonials');
//   }

//   const data = await res.json();

//   // Validate data matches our schema
//   return data.map((item: unknown) => {
//     try {
//       return TestimonialSchema.parse(item);
//     } catch (error) {
//       console.error('Invalid testimonial data:', error);
//       return null;
//     }
//   }).filter(Boolean);
// }

// export default async function HomePageWithSSR() {
//   const testimonials = await getTestimonials();

//   return (
//     <main>
//       {/* Other content */}

//       <Suspense fallback={<div className="h-96 bg-blue-100 animate-pulse" />}>
//         <TestimonialCarousel testimonials={testimonials} />
//       </Suspense>

//       {/* Other content */}
//     </main>
//   );
// }
