import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}> Welcome to Next!!!!! </h1>
      <p className={styles.description}> Get started by editing <code className={styles.code}> pages/index.js </code> </p>
      <div className={styles.grid}> test </div>
    </main>
  )
}
