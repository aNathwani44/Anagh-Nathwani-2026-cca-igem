import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Problem',    href: '#problem'    },
  { label: 'Solution',   href: '#solution'   },
  { label: 'Science',    href: '#science'    },
  { label: 'Gallery',    href: '#gallery'    },
  { label: 'Treatments', href: '#treatments' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoEmoji}>🌿</span>
        Blight Busters
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className={styles.link} onClick={(e) => scrollTo(e, href)}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className={`${styles.link} ${styles.cta}`} onClick={(e) => scrollTo(e, '#contact')}>
            Contact
          </a>
        </li>
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
      </button>
    </nav>
  )
}