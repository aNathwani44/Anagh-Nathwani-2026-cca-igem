import React from 'react'
import styles from './Footer.module.css'

const projectLinks = ['The Problem', 'Our Solution', 'Molecular Science', 'Comparisons']
const scienceLinks = ['Darobactin', 'Plasmid Design', 'Biosafety', 'Lab Notebook']
const teamLinks    = ['Members', 'Advisors', 'Attributions', 'iGEM Registry']

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>
        <div className={styles.brand}>
          <h3 className={styles.brandName}>🌿 Blight Busters</h3>
          <p className={styles.brandDesc}>
            An iGEM synthetic biology project developing an engineered bacterial solution to fire
            blight disease in Rosaceae orchards worldwide. Building a safer, targeted future for
            orchard health.
          </p>
          <div className={styles.socials}>
            <a href="#contact" className={styles.socialLink} aria-label="iGEM wiki">iGEM Wiki</a>
            <a href="#contact" className={styles.socialLink} aria-label="GitHub">GitHub</a>
            <a href="#contact" className={styles.socialLink} aria-label="Contact">Email</a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Project</h4>
          <ul className={styles.colList}>
            {projectLinks.map((l) => <li key={l}><a href="#problem">{l}</a></li>)}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Science</h4>
          <ul className={styles.colList}>
            {scienceLinks.map((l) => <li key={l}><a href="#science">{l}</a></li>)}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Team</h4>
          <ul className={styles.colList}>
            {teamLinks.map((l) => <li key={l}><a href="#contact">{l}</a></li>)}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Blight Busters iGEM Team. Built for the iGEM Foundation Competition.</p>
        <span className={styles.badge}>iGEM 2026</span>
      </div>
    </footer>
  )
}
