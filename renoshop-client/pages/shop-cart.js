import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'

export default function ShopCart() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        ShopCart page

        <Link href="/">
          <a>Back to home</a>
        </Link>

      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
