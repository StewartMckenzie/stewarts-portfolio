import Head from 'next/head'
import Navbar from '../components/navbar/Navbar';
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-DMPrimary'>
      <Head>
        <title>Stewart Mckenzie's Porfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
     <Navbar></Navbar>
    </main>
  );
}
