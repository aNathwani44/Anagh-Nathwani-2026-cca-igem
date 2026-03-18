import React from 'react'
import styles from './Problem.module.css'

const steps = [
  {
    num: '01',
    title: 'Entry Points',
    body: 'Bacteria reach susceptible tissues — flower stigmata, stomata, and insect punctures — via insects, rain, and contaminated tools.',
  },
  {
    num: '02',
    title: 'Vascular Spread',
    body: 'Once inside, the pathogen travels through the plant\'s vascular system, spreading infection rapidly throughout the tree.',
  },
  {
    num: '03',
    title: 'Tissue Death',
    body: 'Cambial tissue is killed and nutrient vessels are damaged, cutting off the rest of the plant from essential resources.',
  },
]

export default function Problem() {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.sectionLabel}>The Challenge</div>
      <h2 className={styles.heading}>
        Fire Blight is Devastating<br />Our Orchards
      </h2>

      <div className={styles.grid}>
        <div className={styles.textCol}>
          <p>
            Fire blight, caused by the gram-negative bacterium <em>Erwinia amylovora</em>, is one
            of the most destructive diseases threatening apple and pear trees worldwide. The
            pathogen spreads aggressively through insects, rain, and infected tools before
            colonizing the plant&apos;s vascular system.
          </p>
          <p style={{ marginTop: '16px' }}>
            Once inside, <em>E. amylovora</em> kills cambial tissue, damages vesicles, and
            restricts nutrients — effectively starving the rest of the plant. Affected species span
            the entire Rosaceae family: apples, pears, quince, loquat, raspberry, and more. In 2023
            alone, US apple growers suffered an estimated <strong>$100 million</strong> in losses.
          </p>

          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.num} className={styles.step}>
                <span className={styles.stepNum}>{s.num}</span>
                <span className={styles.stepText}>
                  <strong>{s.title}:</strong> {s.body}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <img
              src="/Anagh-Nathwani-2026-cca-igem/appler.jpg"
              alt="Fire blight infection on apple tree showing scorched branches"
            />
            <div className={styles.imageCaption}>
              Characteristic fire blight infection — the scorched appearance that gives the disease its name
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
