'use client';

import { motion } from 'framer-motion';
import SocialIcon from '@/components/common/Icons';
import { GITHUB, LINKEDIN, MAIL } from '@/constants/links';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sanjay@recodehive.com');
      toast.success('Email copied to clipboard!', {
        duration: 2000,
        position: 'top-right',
      });
    } catch {
      toast.error('Failed to copy email', {
        duration: 2000,
        position: 'top-right',
      });
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full max-w-7xl mx-auto rounded-xl bg-primary text-foreground overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Blue card with gradient */}
      <div className="p-8 sm:p-10">
        {/* Main content container with proper spacing */}
        <div className="max-w-6xl mx-auto">
          {/* Heading section */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2
                id="contact-heading"
                className="text-2xl md:text-3xl font-semibold text-blue-100 mb-2"
              >
                Ready to work together?
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                I&apos;m only one click away!
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-background text-foreground px-6 py-3 rounded-md font-medium hover:bg-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition-colors"
              aria-label="Send me a message to discuss working together"
            >
              Send Me A Message
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-blue-400/50 my-6"></div>

          {/* Footer with contact info and social links */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            {/* Connect/Email section */}
            <div className="flex items-center space-x-4">
              <span className="font-medium text-blue-100">Connect</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center w-6 h-6 text-foreground cursor-pointer hover:text-blue-200 transition-colors"
                  aria-label="Copy email address"
                >
                  <Copy className='text-gray-200' />
                </button>
                <Link
                  href={MAIL}
                  className="inline-flex items-center hover:underline group"
                  aria-label="Email me at sanjay@recodehive.com"
                >
                  <span className="text-foreground group-hover:text-blue-200 transition-colors">
                    sanjay@recodehive.com
                  </span>
                </Link>
              </div>
            </div>

            {/* Explore more section with social icons */}
            <div className="flex items-center">
              <span className="font-medium text-blue-100 mr-4">Explore More</span>
              <div className="flex gap-4">
                {[
                  { href: LINKEDIN, name: 'linkedin-outline', label: 'Visit my LinkedIn profile' },
                  { href: GITHUB, name: 'github-outline', label: 'Visit my GitHub profile' },
                  { href: '/resume.pdf', name: 'document-outline', label: 'View my resume' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex items-center justify-center text-foreground hover:text-blue-200 hover:scale-110 transition-all"
                  >
                    <SocialIcon name={item.name} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
