import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import { getSortedPostsData } from '../libs/posts'



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

// export async function getServerSideProps(context) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: {
//       data: data
//     }, // will be passed to the page component as props
//   }
// }


export default function Index({allPostsData}) {

  const listItems = allPostsData.map((item) =>
    <li key={item.id}>
      <Link href={item.id.toString()}>
          <a>{item.title}</a>
        </Link>
      </li>
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



export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}