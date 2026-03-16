import React, { useState } from 'react'
import styles from './Gallery.module.css'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&auto=format&fit=crop',
    alt: 'Healthy red apple ready for harvest',
    caption: 'Malus domestica — the primary commercial target threatened by fire blight outbreaks',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop',
    alt: 'Diseased and damaged apple tree branch',
    caption: 'Classic fire blight infection — scorched appearance caused by E. amylovora',
  },
  {
    src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop',
    alt: 'Pear blossom — primary infection site',
    caption: 'Flower stigmata are primary entry points for E. amylovora during bloom season',
  },
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop',
    alt: 'Pear fruit on tree',
    caption: 'Characteristic fire blight infection — the scorched appearance that gives the disease its name',
  },
  {
    src: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=800&auto=format&fit=crop',
    alt: 'Raspberries on bush',
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