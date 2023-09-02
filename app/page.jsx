import './styles/globals.scss'
import styles from './styles/Home.module.scss'
import Image from 'next/image'

const dogBgImage = '/images/dog-licking-face.jpg'

// export const revalidate = 86400

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <section className={styles.hero}>
        <div className={styles.box}>
          <div className={styles.introTitle}>
          <p>Meet Your Furever Companion</p>
          </div>
          <div className={styles.introParagraph} id='intro-paragraph'>
            <p>Find the perfect pet for your lifestyle with our AI-powered matching system. Tell us a little about you, and we'll help you find a furry friend that you'll love for life.</p>
          </div>
          <div className={styles.buttonBox}>
            <button className={styles.button}>Tell Us About You</button>
            <button className={styles.button}>Search Without AI</button>
          </div>
          
        </div>
      </section>
      <section className={styles.aboutUs}>
        <h2>About Us</h2>
      </section>
      <section className={styles.misison}>
        <h2>Mission</h2>
      </section>
      <section className={styles.animalCommitment}>
        <h2>Commitment to Animal Welfare</h2>
      </section>
      
    
    </div>
  )
}
