import React from 'react'
import styles from './Solution.module.css'

const cards = [
  {
    icon: '🧫',
    title: 'Non-Pathogenic Chassis',
    body: 'Pantoea agglomerans is an existing plant symbiont — safe, well-characterized, and naturally present in the Rosaceae environment, making it an ideal delivery vehicle.',
  },
  {
    icon: '⚗️',
    title: 'Darobactin Production',
    body: 'Our engineered strain carries the pNB03-darA-E plasmid backbone from the Kim Lewis Lab at Northeastern University, enabling darobactin biosynthesis via the darA–E gene cluster.',
  },
  {
    icon: '🎯',
    title: 'Vascular Inoculation',
    body: 'Direct inoculation into the plant vascular system ensures optimal targeting of E. amylovora where it colonizes, maximizing efficacy while minimizing off-target effects.',
  },
]

const mechSteps = [
  { icon: '🌱', label: 'Fire blight infection detected' },
  { icon: '🔬', label: 'Inducible promoter activates' },
  { icon: '💊', label: 'darA–E produces darobactin' },
  { icon: '🎯', label: 'Targets bamA in E. amylovora' },
  { icon: '✅', label: 'Pathogen eliminated; chassis self-destructs' },
]

export default function Solution() {
  return (
    <section className={styles.section} id="solution">
      <div className={styles.sectionLabel}>Our Approach</div>
      <h2 className={styles.heading}>
        A Targeted Biological<br />Defense System
      </h2>
      <p className={styles.intro}>
        Rather than broad-spectrum antibiotics or GMO crops, we engineered a non-pathogenic
        bacterial chassis to deliver a precise antibiotic compound directly within the plant
        vascular system — where it matters most.
      </p>

      <div className={styles.cards}>
        {cards.map((c) => (
          <div key={c.title} className={styles.card}>
            <div className={styles.cardIcon}>{c.icon}</div>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardBody}>{c.body}</p>
          </div>
        ))}
      </div>

      <div className={styles.mechanism}>
        <h3 className={styles.mechHeading}>How Darobactin Eliminates the Pathogen</h3>
        <div className={styles.mechFlow}>
          {mechSteps.map((s, i) => (
            <React.Fragment key={s.label}>
              <div className={styles.mechStep}>
                <div className={styles.mechCircle}>{s.icon}</div>
                <span className={styles.mechLabel}>{s.label}</span>
              </div>
              {i < mechSteps.length - 1 && (
                <span className={styles.mechArrow} aria-hidden="true">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
