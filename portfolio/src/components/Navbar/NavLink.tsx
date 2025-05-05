import { cn } from '@/lib/utils'
import Link from 'next/link'
import { memo } from 'react'

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  onClick: () => void
  isMobile?: boolean
}

const NavLink = memo(
  ({ href, label, isActive, onClick, isMobile = false }: NavLinkProps) => (
    <Link
      href={href}
      className={cn(
        'font-medium transition-all duration-200 relative',
        isMobile
          ? 'text-lg py-2 px-4 w-full text-center hover:bg-secondary/20 rounded-md'
          : 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300',
        isActive && !isMobile && 'text-active after:w-full',
        isActive && isMobile && 'text-active bg-secondary/10 font-semibold',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm'
      )}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  ),
  // Custom equality function to optimize re-rendering
  (prevProps, nextProps) => {
    return (
      prevProps.href === nextProps.href &&
      prevProps.label === nextProps.label &&
      prevProps.isActive === nextProps.isActive &&
      prevProps.isMobile === nextProps.isMobile
    )
  }
)

NavLink.displayName = 'NavLink'
export default NavLink
