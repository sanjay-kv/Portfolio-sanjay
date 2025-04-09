import Link from 'next/link';
import SocialIcon from './Icons';

const socialLinks = [
  { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com/', color: 'hover:bg-red-600' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/', color: 'hover:bg-blue-700' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/', color: 'hover:bg-gray-800' },
  { name: 'Mail', icon: 'mail', url: 'mailto:contact@example.com', color: 'hover:bg-blue-500' },
  { name: 'Pinterest', icon: 'pinterest', url: 'https://pinterest.com/', color: 'hover:bg-red-700' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/', color: 'hover:bg-blue-400' },
  { name: 'WordPress', icon: 'wordpress', url: 'https://wordpress.org/', color: 'hover:bg-blue-600' },
  { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/', color: 'hover:bg-pink-600' },
];

export default function Footer() {
  return (
    <footer className="bg-background py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialLinks.map((social) => (
            <Link
              href={social.url}
              key={social.name}
              aria-label={`Visit our ${social.name} page`}
              className={`
                transition-all duration-300 ease-in-out
                flex items-center justify-center
                w-10 h-10 sm:w-12 sm:h-12
                rounded-full bg-background text-foreground
                ${social.color} hover:scale-110
              `}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon name={social.icon} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
