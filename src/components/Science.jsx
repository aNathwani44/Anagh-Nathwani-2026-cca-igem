import React from 'react'
import styles from './Science.module.css'

const genes = [
  { color: '#e76f51', name: 'darA', desc: 'Core biosynthesis' },
  { color: '#f4a261', name: 'darB', desc: 'Peptide modification' },
  { color: '#40916c', name: 'darC', desc: 'Cyclization' },
  { color: '#74c69d', name: 'darD', desc: 'Export machinery' },
  { color: '#2d6a4f', name: 'darE', desc: 'Secretion' },
  { color: '#b7e4c7', name: 'bamA* (mutant)', desc: 'Resistance gene' },
]

export default function Science() {
  return (
    <section className={styles.section} id="science">
      <div className={styles.sectionLabel}>Molecular Biology</div>
      <h2 className={styles.heading}>
        Engineering Darobactin<br />Production
      </h2>

      <div className={styles.split}>
        {/* Plasmid Visual */}
        <div className={styles.plasmidWrap}>
          <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.plasmidSvg}>
            {/* Outer ring */}
            <circle cx="150" cy="150" r="120" stroke="#40916c" strokeWidth="12" />
            {/* Rotating dashes */}
            <circle cx="150" cy="150" r="120" stroke="#74c69d" strokeWidth="3" strokeDasharray="8 6">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 150 150"
                to="360 150 150"
                dur="18s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Gene arcs */}
            <path d="M150 30 A120 120 0 0 1 256 90"  stroke="#e76f51" strokeWidth="14" strokeLinecap="round" />
            <path d="M256 90 A120 120 0 0 1 256 210" stroke="#f4a261" strokeWidth="14" strokeLinecap="round" />
            <path d="M256 210 A120 120 0 0 1 150 270" stroke="#40916c" strokeWidth="14" strokeLinecap="round" />
            <path d="M150 270 A120 120 0 0 1 44 210"  stroke="#74c69d" strokeWidth="14" strokeLinecap="round" />
            <path d="M44 210 A120 120 0 0 1 44 90"   stroke="#2d6a4f" strokeWidth="14" strokeLinecap="round" />
            <path d="M44 90 A120 120 0 0 1 150 30"   stroke="#b7e4c7" strokeWidth="14" strokeLinecap="round" />
            {/* Gene labels */}
            <text x="215" y="62"  fill="#e76f51" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600">darA</text>
            <text x="268" y="158" fill="#f4a261" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600">darB</text>
            <text x="215" y="250" fill="#40916c" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600">darC</text>
            <text x="42"  y="250" fill="#74c69d" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600">darD</text>
            <text x="8"   y="158" fill="#2d6a4f" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600">darE</text>
            <text x="50"  y="62"  fill="#b7e4c7" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600">bamA*</text>
            {/* Center */}
            <text x="150" y="144" textAnchor="middle" fill="#1b4332" fontFamily="Playfair Display, serif" fontSize="14" fontWeight="700">pNB03</text>
            <text x="150" y="164" textAnchor="middle" fill="#2d6a4f" fontFamily="DM Sans, sans-serif" fontSize="10">darA-E</text>
          </svg>
        </div>

        {/* Text + gene list */}
        <div className={styles.textCol}>
          <p>
            We built off the <strong>pNB03-darA-E plasmid</strong> designed by the Kim Lewis Lab
            at Northeastern University. This backbone houses the darA–E gene cluster that
            biosynthesizes darobactin — a natural antibiotic that targets the essential outer
            membrane protein bamA, which is present in all gram-negative bacteria.
          </p>

          <div className={styles.geneList}>
            {genes.map((g) => (
              <div key={g.name} className={styles.geneItem}>
                <span className={styles.geneDot} style={{ background: g.color }} />
                <span className={styles.geneName}>{g.name}</span>
                <span className={styles.geneDesc}>{g.desc}</span>
              </div>
            ))}
          </div>

          <div className={styles.biosafety}>
            <h4 className={styles.biosafetyTitle}>🛡 Biosafety by Design</h4>
            <p>
              Darobactin targets bamA — present in <em>all</em> gram-negative bacteria, including
              our chassis. Our mutant bamA* resistance gene uses the <strong>same inducible
              promoter</strong> as darA–E. When the promoter is off, resistance ceases and residual
              darobactin eliminates the engineered organism from the environment — a built-in
              kill-switch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
