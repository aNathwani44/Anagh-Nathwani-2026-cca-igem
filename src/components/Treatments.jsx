import React from 'react'
import styles from './Treatments.module.css'

const treatments = [
  {
    icon: '💊',
    title: 'Streptomycin',
    subtitle: 'Antibiotic Treatment',
    pros: ['Widely available and established', 'Direct antibiotic action against E. amylovora'],
    cons: [
      'Not always effective against resistant strains',
      'Promotes antibiotic resistance in environment',
      'Broad-spectrum — kills beneficial microbiota',
    ],
    ours: false,
  },
  {
    icon: '🧪',
    title: 'Copper Compounds',
    subtitle: 'Chemical Control',
    pros: ['Broad protective coverage on application', 'Long history of agricultural use'],
    cons: [
      'Can damage plant tissue at higher doses',
      'Environmental accumulation over time',
      'Reduced efficacy if misapplied or washed off',
    ],
    ours: false,
  },
  {
    icon: '🧬',
    title: 'Blight Busters',
    subtitle: 'Engineered Biocontrol',
    pros: [
      'Targeted vascular delivery — hits the source',
      'Novel darobactin — no existing resistance',
      'Self-eliminating chassis: built-in biosafety',
      'Non-GMO host plant — no regulatory barriers',
      'Environmentally contained mechanism',
    ],
    cons: [],
    ours: true,
  },
]

export default function Treatments() {
  return (
    <section className={styles.section} id="treatments">
      <div className={styles.sectionLabel}>Comparative Analysis</div>
      <h2 className={styles.heading}>
        Why Existing Treatments<br />Fall Short
      </h2>
      <p className={styles.intro}>
        Current approaches each carry significant drawbacks — whether resistance concerns,
        plant toxicity, or regulatory restrictions. Our solution addresses all three.
      </p>

      <div className={styles.grid}>
        {treatments.map((t) => (
          <div key={t.title} className={`${styles.card} ${t.ours ? styles.ours : ''}`}>
            {t.ours && <span className={styles.oursBadge}>Our Approach</span>}
            <div className={styles.icon}>{t.icon}</div>
            <h3 className={styles.cardTitle}>{t.title}</h3>
            <h4 className={styles.cardSubtitle}>{t.subtitle}</h4>

            <ul className={styles.list}>
              {t.pros.map((p) => (
                <li key={p} className={styles.pro}>
                  <span className={styles.marker}>+</span>
                  {p}
                </li>
              ))}
              {t.cons.map((c) => (
                <li key={c} className={styles.con}>
                  <span className={styles.marker}>−</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <strong>Note on GMO Resistance Genes:</strong> While resistance genes have been
        successfully inserted into plants, public concerns and regulatory restrictions on GMO
        crops present significant adoption barriers — particularly in European markets. Our
        approach modifies only the bacterial symbiont, not the plant itself.
      </div>
    </section>
  )
}
