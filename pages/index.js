import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import { MongoClient } from 'mongodb';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navigation from '../components/navigation';
import { useUser } from '@auth0/nextjs-auth0';


export default function Home({name}) {

  const { user } = useUser({ redirectTo: '/login' })

  // Server-render loading state
  if (!user || user.isLoggedIn === false) {
    return <div>
      Loading...
      {process.env.NEXTAUTH_URL}
      <p>

      <Link href="/api/auth/login">
          <a>login</a>
        </Link>

      </p>


    </div>
  }


  return (
    <div className={styles.container}>


<Navigation />

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MongoDb Query
        </h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <h2>
        <Link href="/api/auth/logout">
          <a>logout</a>
        </Link>
      </h2>

      <img src={user.picture}></img>

        {name ?
        
        name.map((job, index) => 

        <Card key={index}>
  <Card.Header>{job.data.userId}</Card.Header>
  <div className={styles.horizontal}>
  <Image
  src="/images/avatar.jpg"
  alt="Picture of a triangle"
  width={500}
  height={500}
/>
  <Card.Body>
    <Card.Title>{job.name}</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
   <Button variant="primary">Post Now</Button> 
   {' '}
   <Button variant="secondary">Cancel Post</Button>
  </Card.Body>
  </div>
</Card>


      ) : ""};

      




      </main>

      

      <footer className={styles.footer}>

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps({req, res}) {


  return {
    props: {}, // Will be passed to the page component as props
  }


}