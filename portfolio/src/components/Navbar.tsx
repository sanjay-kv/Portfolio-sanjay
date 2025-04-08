'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback, memo } from 'react'
import { Menu, X } from 'lucide-react'

const routes = [
  {
    href: `/`,
    label: 'Home',
  },
  {
    href: `/data-guide`,
    label: 'Data Guide',
  },
  {
    href: `/my-story`,
    label: 'My Story',
  },
  {
    href: `/portfolio`,
    label: 'Portfolio',
  },
  {
    href: `/contact`,
    label: 'Contact Me',
  },
]

// Memoized NavLink component to prevent unnecessary re-renders
interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  onClick: () => void
}

const NavLink = memo(({ href, label, isActive, onClick }: NavLinkProps) => (
  <Link
    href={href}
    className={cn(
      'font-medium transition-colors duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300',
      isActive && 'text-primary after:w-full'
    )}
    onClick={onClick}
  >
    {label}
  </Link>
))

NavLink.displayName = 'NavLink'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect with throttling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    // Add passive true for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Memoized toggle function
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  // Memoized route click handler
  const handleRouteClick = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 md:px-16 bg-background',
        scrolled ? 'backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='font-bold text-foreground'>
          <Link href='/'>Sanjay Viswanathan</Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-6'>
          {routes.map((route) => (
            <NavLink
              key={route.href}
              href={route.href}
              label={route.label}
              isActive={pathname === route.href}
              onClick={handleRouteClick}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden flex items-center text-foreground'
          onClick={toggleMenu}
          aria-label='Toggle menu'
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-background/95 z-40 lg:hidden flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center space-y-6 py-8'>
            {routes.map((route) => (
              <NavLink
                key={route.href}
                href={route.href}
                label={route.label}
                isActive={pathname === route.href}
                onClick={handleRouteClick}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
