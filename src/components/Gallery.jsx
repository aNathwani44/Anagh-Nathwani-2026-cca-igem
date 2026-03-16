import React, { useState } from 'react'
import styles from './Gallery.module.css'

const images = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1280px-Red_Apple.jpg',
    alt: 'Healthy red apple ready for harvest',
    caption: 'Malus domestica — the primary commercial target threatened by fire blight outbreaks',
    span: 'tall',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/FireBlight1.jpg/1280px-FireBlight1.jpg',
    alt: 'Fire blight infection on apple tree',
    caption: 'Classic fire blight infection — scorched appearance caused by E. amylovora',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pear_and_blossom.jpg/640px-Pear_and_blossom.jpg',
    alt: 'Pear blossom — primary infection site',
    caption: 'Flower stigmata are primary entry points for E. amylovora during bloom season',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Quince_JPG01.jpg/640px-Quince_JPG01.jpg',
    alt: 'Quince fruit on tree',
    caption: 'Quince (Cydonia oblonga) — one of many Rosaceae species susceptible to fire blight',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Raspberry_pi_1_model_b_2.jpg/1280px-Raspberry_pi_1_model_b_2.jpg',
    alt: 'Raspberry plant — also susceptible to fire blight',
    caption: 'Rubus idaeus (raspberry) — fire blight can devastate entire Rosaceae plantations',
  },
]

export default function Gallery() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className={styles.section} id="gallery">
      <div className={styles.sectionLabel}>Media &amp; Research</div>
      <h2 className={styles.heading}>
        From Lab Bench<br />to Orchard
      </h2>
      <p className={styles.intro}>
        Fire blight affects an entire family of commercially vital crops. Understanding the scale
        of the threat underscores the urgency of our biocontrol approach.
      </p>

      <div className={styles.grid}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`${styles.item} ${img.span === 'tall' ? styles.tall : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className={`${styles.overlay} ${hovered === i ? styles.overlayVisible : ''}`}>
              <p>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
