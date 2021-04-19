import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MongoClient } from 'mongodb';



export default function Home({name}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MongoDb Connected
        </h1>

        {name.map((job) =>
        <h1>{job.name}</h1>
      )}


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
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if (!client.isConnected()) await client.connect();
    const db = client.db('myFirstDatabase')
    const doc = await db.collection("agendaJobs").find({type: "single"}).toArray();
    

let results = []

for (const key in doc) {
  if (doc.hasOwnProperty(key)) {
    const element = doc[key];
  //  console.log(JSON.stringify(element))
    results.push(element)
  }
}

const plainData = JSON.parse(JSON.stringify(doc))
console.log("resultssss" + plainData)

return {
  props: { name: plainData }
}
}