import './styles/globals.scss'
import styles from './styles/Home.module.scss'

// export const revalidate = 86400

export default function Home() {
  return (
    <div className='mx-auto'>
     
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Chad</span>
        </span>
      </p>
      <a href="#">Link one</a>
      <a href="#">Link two</a>

      <br />

      <button className={styles.button}>Click me</button>
    
    </div>
  )
}
