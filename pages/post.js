import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Head from 'next/head'
import { useState } from 'react';
import Upload from '../components/upload'
import Navigation from '../components/navigation';


export default function Post() {
    let [isPreview, setIsPreview] = useState()
    const handleUpload = (e) => {
        let tempUrl = URL.createObjectURL(event.target.files[0]);

        setIsPreview(tempUrl)
    };
  return (   
<div className={styles.container}>

<Navigation />

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>
      </Head>

      <main className={styles.main}>

        <Upload />
    
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