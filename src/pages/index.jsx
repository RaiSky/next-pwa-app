import Head from 'next/head';
import Image from 'next/image';
import styles from '../assets/styles/home.module.css';
import MainLayout from '../layout/main-layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainLayout>
        <h1 className={styles.title}>Home page</h1>
      </MainLayout>
    </>
  );
}
