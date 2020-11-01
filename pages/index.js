import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic routes in NEXTJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Blog> 
        </Blog>
      </main>
    </div>
  )
}
