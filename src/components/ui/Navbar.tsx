import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../../utils/cn";

const NAV_LINKS = [
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md transition-all",
        className,
      )}
    >
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24'>
        {/* Brand Logo */}
        <a
          href='#'
          className='text-xl font-bold tracking-tighter text-slate-100 flex items-center gap-2'
        >
          <span className='bg-brand-primary w-2 h-2 rounded-full animate-pulse'></span>
          Islander Tech
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          <ul className='flex items-center gap-6 text-sm font-medium text-slate-300'>
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className='hover:text-brand-primary transition-colors'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden text-slate-300 hover:text-white'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className='md:hidden border-t border-slate-800 bg-slate-950 px-6 py-4'>
          <ul className='flex flex-col gap-4 text-sm font-medium text-slate-300 mb-4'>
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className='block hover:text-brand-primary transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant='primary' className='w-full'>
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
}
