import './styles/globals.scss'
import styles from './styles/Home.module.scss'
import Image from 'next/image'

const twoDogsImage = '/images/two-dogs-1k-width.jpg'
const pawsIcon = '/images/icons/paws-black.png'
const catImage = '/images/cat-on-blanket.jpg'
const turtleImage = '/images/turtle-in-grass.jpg'

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
      <section className={`${styles.aboutUs}`}>
        <h2>About Us</h2>
        <div className="">
          <div className={`${styles.aboutUsContent}`}>
            <Image
              src={pawsIcon}
              width={123}
              height={100}
              alt={'dog paws icon'}
              className={styles.pawsIcon}
            ></Image>
            <div className={styles.pictureContainer}>
              <div className={styles.pictureBackground}></div>
              <Image
              src={twoDogsImage}
              width={500}
              height={565}
              alt={'two dogs on a carpet'} 
              ></Image>

            </div>
            <div className={styles.aboutUsText}>
              <p>
                Furever AI is an AI-powered pet adoption platform that matches you with the perfect pet for your lifestyle. We use a variety of factors to make our matches, including your home environment, lifestyle, and personality. We also take into account the specific needs of each pet, such as their age, breed, and energy level.
              </p>
              <p>
                Our goal is to help you find your furever companion, and we believe that AI is the best way to do that. With Furever AI, you can be confident that you're bringing home a pet that is a greatmatch for you and your family.
              </p>
            </div>
          </div>
        </div>

      </section>
      <section className={`${styles.misison}`}>
        <h2>Mission</h2>
        <div className={styles.pictureContainer}>
            <div className={styles.pictureBackground}></div>
            <Image
            src={catImage}
            width={365}
            height={435}
            alt={'cat on a blanket'} 
            ></Image>

          </div>

        <p className={styles.missionText}>Furever AI is committed to helping every pet find their furever home. We believe that every pet deserves a loving and happy life, and we are passionate about using technology to make that happen.</p>
      </section>
      <section className={styles.animalCommitment}>
        <h2>Commitment to Animal Welfare</h2>
        <div className={styles.pictureContainer}>
            <div className={styles.pictureBackground}></div>
            <Image
            src={turtleImage}
            width={300}
            height={200}
            alt={'two dogs on a carpet'} 
            ></Image>

          </div>

        <p>Furever AI is committed to the highest standards of animal welfare. We work with carefully vetted rescue organizations and shelters to ensure that all of the pets in our database are healthy, happy, and ready for adoption. We also offer a variety of resources to help new pet parents, including training tips, behavior advice, and emergency support.</p>
      </section>
      
    
    </div>
  )
}
