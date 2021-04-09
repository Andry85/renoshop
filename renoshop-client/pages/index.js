import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'





export default function Index() {
  return (
    <Layout home={true}>
      <div className={styles.container}>
        <Head>
          <title>Index Page</title>
        </Head>

        <div className={styles.main}>
          Index page
         
          <Link href="/shop-cart">
          <a>ShopCart</a>
        </Link>

        </div>
      </div>
    </Layout>
  )
}
