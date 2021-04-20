import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MongoClient } from 'mongodb';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navigation from '../components/navigation';



export default function Home({name}) {
  return (
    <div className={styles.container}>


<Navigation />

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MongoDb Query
        </h1>
        <h2>
        <Link href="/post">
          <a>Post</a>
        </Link>
      </h2>

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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time



 // Database Name
const client = new MongoClient('mongodb+srv://test:test123@cluster0.klpfd.mongodb.net/myFirstDatabase?retryWrites=true', {
  useNewUrlParser: true
});

if (!client.isConnected()) await client.connect();
    const db = client.db('myFirstDatabase')
    const doc = await db.collection("agendaJobs").find({type: "normal"}).toArray();
    

let results = []

for (const key in doc) {
  if (doc.hasOwnProperty(key)) {
    const element = doc[key];
  //  console.log(JSON.stringify(element))
    results.push(element)
  }
}

const plainData = JSON.parse(JSON.stringify(doc))
console.log("resultssss" + JSON.stringify(plainData))

return {
  props: { name: plainData }
}
}