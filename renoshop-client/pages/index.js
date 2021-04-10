import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import {dataList} from '../data/data';



// export async function getStaticProps() {
//   // Get external data from the file system, API, DB, etc.

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: {
//       data: dataList
//     }
//   }
// }

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}


export default function Index({data}) {

  const listItems = data.map((item) =>
    <li>{item.title}</li>
  );

  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>Index Page</title>
        </Head>

        <div className={styles.main}>
        <ul>{listItems}</ul>
         
          <Link href="/shop-cart">
          <a>ShopCart</a>
        </Link>

        </div>
      </div>
    </Layout>
  )
}


