import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'



export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
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


  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>Index Page</title>
        </Head>

        <div className={styles.main}>
        <ul>
          {data.map(({ id, body, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                {body}
              </small>
            </li>
          ))}
        </ul>
         

        </div>
      </div>
    </Layout>
  )
}