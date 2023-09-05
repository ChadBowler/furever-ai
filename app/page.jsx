import './styles/globals.scss'
import styles from './styles/Home.module.scss'
import Image from 'next/image'
import run from '../lib/mongodb'
import Link from 'next/link'
import Button from './components/Button'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'

const twoDogsImage = '/images/two-dogs-1k-width.jpg'
const pawsIcon = '/images/icons/paws-black.png'
const catImage = '/images/cat-on-blanket.jpg'
const turtleImage = '/images/turtle-in-grass.jpg'
const personalityProfile = '/personality-profile'

const sectionHeignt = {
  'height': '50%'
}

export const getServerSideProps = async () => {
    try {
      await run
      // `await clientPromise` will use the default database passed in the MONGODB_URI
      // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
      //
      // `const client = await clientPromise`
      // `const db = client.db("myDatabase")`
      //
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
  
      return {
        props,
      }
    } catch (e) {
      console.log('ERROR HERE!!!');
      console.error(e)
      return {
        props,
      }
    }
  }

// export const revalidate = 86400

export default function Home(InferGetServerSidePropsType) {
  return (
    <div className={styles.mainDiv}>
      <section className={styles.hero}>
        <div className={` text-black dark:text-white font-light-font dark:font-dark-font-primary opacity-80 text-center ${styles.box}`}>
         
            <div className={`${styles.introTitle} text-3xl lg:text-5xl 2xl:text-6xl bg-primary-light dark:bg-primary-dark`}>
              <p>Meet Your Furever Companion</p>
            </div>
            <div className={`${styles.introParagraph} bg-primary-light dark:bg-primary-dark`} id='intro-paragraph'>
              <p>Find the perfect pet for your lifestyle with our AI-powered matching system. Tell us a little about you, and we'll help you find a furry friend that you'll love for life.</p>
            </div>
            <div className={styles.buttonBox}>
              <Link href={personalityProfile}>
                <Button buttonName={'Tell Us About You'}></Button>
              </Link>
              <Link href='#'>
                <Button buttonName={'Search Without AI'}></Button>
              </Link>
            </div>
          
        </div>
      </section>
      <div className={`dark:bg-primary-dark bg-primary-light`} style={sectionHeignt}>
        <section className={`${styles.aboutUs}`}>
          <h2 className='dark:text-white text-black dark:font-dark-font-secondary p-5 text-3xl lg:text-6xl'>About Us</h2>
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
                <div className={`dark:bg-secondary-dark bg-secondary-light ${styles.pictureBackground}`}></div>
                <img src={twoDogsImage} alt={'two dogs on a carpet'} className={`${styles.dogPicture}`} />
               

              </div>
              <div className={`dark:bg-secondary-dark bg-secondary-light dark:text-white text-black ${styles.aboutUsText}`}>
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
      </div>
     <div className={`dark:bg-primary-dark bg-primary-light`} style={sectionHeignt}>
      <section className={`${styles.misison}`}>
          <h2 className='dark:text-white text-black dark:font-dark-font-secondary p-5 text-3xl lg:text-6xl'>Mission</h2>
          <div className={styles.pictureContainer}>
              <div className={styles.pictureBackground}></div>
              <Image
              src={catImage}
              width={365}
              height={435}
              alt={'cat on a blanket'} 
              ></Image>

            </div>

          <p className={`dark:bg-secondary-dark bg-secondary-light dark:text-white text-black ${styles.missionText}`}>Furever AI is committed to helping every pet find their furever home. We believe that every pet deserves a loving and happy life, and we are passionate about using technology to make that happen.</p>
        </section>
     </div>
      <div className={`dark:bg-primary-dark bg-primary-light`} style={sectionHeignt}>
        <section className={styles.animalCommitment}>
          <h2 className='dark:text-white text-black dark:font-dark-font-secondary p-5 text-3xl lg:text-6xl'>Commitment to Animal Welfare</h2>
          <div className={styles.pictureContainer}>
              <div className={styles.pictureBackground}></div>
              <Image
              src={turtleImage}
              width={300}
              height={200}
              alt={'two dogs on a carpet'} 
              ></Image>
            </div>
          <p className={`dark:bg-secondary-dark bg-secondary-light dark:text-white text-black ${styles.commitmentText}`}>Furever AI is committed to the highest standards of animal welfare. We work with carefully vetted rescue organizations and shelters to ensure that all of the pets in our database are healthy, happy, and ready for adoption. We also offer a variety of resources to help new pet parents, including training tips, behavior advice, and emergency support.</p>
        </section>
      </div> 
      
          {/* {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )} */}
    </div>
  )
}
