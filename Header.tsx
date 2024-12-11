'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, Compass } from 'lucide-react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Compass className="mr-2" />
            Wanderlust
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/destinations" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Destinations</Link>
            <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/destinations" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Destinations</Link>
            <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

