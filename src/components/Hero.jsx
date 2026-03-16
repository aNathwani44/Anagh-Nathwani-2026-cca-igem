import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBg} aria-hidden="true" />

      {/* Decorative DNA SVG */}
      <svg className={styles.dnaBg} viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.6" strokeDasharray="4 6" />
        <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="0.4" />
        <path d="M100 10 Q160 55 100 100 Q40 145 100 190" stroke="white" strokeWidth="1.2" fill="none" />
        <path d="M100 10 Q40 55 100 100 Q160 145 100 190" stroke="white" strokeWidth="1.2" fill="none" />
        <circle cx="100" cy="10"  r="4" fill="white" />
        <circle cx="100" cy="100" r="4" fill="white" />
        <circle cx="100" cy="190" r="4" fill="white" />
        <circle cx="130" cy="55"  r="2.5" fill="white" />
        <circle cx="70"  cy="55"  r="2.5" fill="white" />
        <circle cx="130" cy="145" r="2.5" fill="white" />
        <circle cx="70"  cy="145" r="2.5" fill="white" />
      </svg>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          iGEM 2026 Project
        </div>

        <h1 className={styles.title}>
          <em>Blight</em>
          <br />
          Busters
        </h1>

        <p className={styles.sub}>
          Engineering <em>Pantoea agglomerans</em> to produce the antibiotic darobactin,
          combating Fire Blight in apple and pear orchards through targeted vascular delivery.
        </p>

        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('#solution')}>
            Explore the Science
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('#problem')}>
            Learn the Problem
          </button>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>$100M</span>
          <span className={styles.statLabel}>US losses in 2023</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>darA–E</span>
          <span className={styles.statLabel}>Gene cluster used</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>100%</span>
          <span className={styles.statLabel}>Biosafe design</span>
        </div>
      </div>
    </section>
  )
}
