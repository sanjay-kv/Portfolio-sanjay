'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import NavLink from './NavLink'

// Move routes outside component to prevent recreation on each render
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

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  // Optimize scroll handler with debounce pattern
  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer)

      scrollTimer = setTimeout(() => {
        setScrolled(window.scrollY > 20)
      }, 10) // Small timeout for debounce
    }

    // Add passive true for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial check on mount
    setScrolled(window.scrollY > 20)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer) clearTimeout(scrollTimer)
    }
  }, [])

  // Memoized toggle function
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  // Memoized route click handler
  const handleRouteClick = useCallback(() => {
    if (isMenuOpen) setIsMenuOpen((prev) => !prev)
  }, [isMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    // Only manipulate the body if we're in a browser context
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    }

    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = ''
      }
    }
  }, [isMenuOpen])

  // Memoize the navLinks to prevent unnecessary re-renders
  const navLinks = useMemo(
    () =>
      routes.map((route) => (
        <NavLink
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
          onClick={handleRouteClick}
        />
      )),
    [pathname, handleRouteClick]
  )

  return (
    <nav
      role='navigation'
      aria-label='Main navigation'
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 py-2 px-4 sm:px-8 md:px-16 bg-header',
        scrolled ? 'bg-transparent backdrop-blur-sm shadow-md' : ''
      )}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='font-bold text-foreground'>
          <Link
            href='/'
            className='text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm'
          >
            Sanjay Viswanathan
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-6'>{navLinks}</div>

        {/* Mobile Menu Button */}
        {isMenuOpen ? (
          <button
            onClick={toggleMenu}
            aria-label='Close menu'
            className='fixed top-4 right-4 z-50 lg:hidden p-2 text-foreground bg-background rounded-md shadow-md hover:bg-secondary/20 transition'
          >
            <X size={28} />
          </button>
        ) : (
          <button
            onClick={toggleMenu}
            aria-label='Open menu'
            aria-controls='mobile-menu'
            aria-expanded={false}
            className='lg:hidden p-2 text-foreground rounded-md hover:bg-secondary/20 transition-colors'
          >
            <Menu size={24} />
          </button>
        )}
      </div>

      {/* Mobile Navigation Overlay - Improved with animation and styling */}
      <div
        id='mobile-menu'
        aria-hidden={!isMenuOpen}
        className={cn(
          'fixed inset-0 bg-background/95 z-40 lg:hidden flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className='flex flex-col items-center space-y-8 py-8 w-full px-6'>
          {routes.map((route) => (
            <NavLink
              key={`mobile-${route.href}`}
              href={route.href}
              label={route.label}
              isActive={pathname === route.href}
              onClick={handleRouteClick}
              isMobile
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
