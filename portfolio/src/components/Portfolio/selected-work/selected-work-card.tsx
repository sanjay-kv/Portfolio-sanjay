'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TechBadge from './tech-badges';
import { fadeIn } from '@/lib/animation';
import { PortfolioWorkProps } from '../types';
import { memo, useMemo } from 'react';

const PortfolioCard: React.FC<PortfolioWorkProps> = ({ work, index }) => {
  const { id, title, description, image, technologies } = work;

  const animationVariants = useMemo(
    () => fadeIn({ direction: 'up', type: 'spring', delay: index * 0.15, duration: 0.75 }),
    [index]
  );

  return (
    <motion.article
      variants={animationVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="border border-gray-800 rounded-lg overflow-hidden shadow-xl bg-gray-900/60 hover:bg-gray-900/80 transition-colors"
      id={`work-${id}`}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="p-6 lg:p-8 lg:w-1/2 flex flex-col justify-start gap-y-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4" id={`work-title-${id}`}>
              {title}
            </h2>
            <p className="text-gray-300 mb-3" id={`work-desc-${id}`}>
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label={`Technologies used in ${title}`}>
            {technologies.map((tech) => (
              <TechBadge key={`${id}-${tech}`} name={tech} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="aspect-video relative overflow-hidden lg:h-full">
            <Image
              src={image}
              alt={`Screenshot of ${title} work`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={index < 2}
              loading={index < 2 ? "eager" : "lazy"}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default memo(PortfolioCard);
