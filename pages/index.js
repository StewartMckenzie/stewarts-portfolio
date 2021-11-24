import Head from 'next/head'
import Navbar from '../components/navbar/Navbar';
import MobileLinkContainer from "../components/navbar/mobileLinkContainer.js";
import { atom, useRecoilState } from "recoil";

const navState = atom({
  key: "navActive",
  default: false,
});
export default function Home() {
  
    const [navActive, setNavActive] = useRecoilState(navState);
  return (
    
    <main className="flex flex-col items-center justify-center min-h-screen bg-DMPrimary">
      <Head>
        <title>Stewart Mckenzie's Porfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      {navActive && <MobileLinkContainer />}
    </main>
  );
}
