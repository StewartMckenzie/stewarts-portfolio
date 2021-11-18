import Link from "next/link";
import { BsSunFill } from "react-icons/bs";
import {GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className=' flex text-DMText w-screen sm:justify-around content-evenly h-16 bg-black fixed top-0'>
        <Link href='/'>
          <a className=' flex-none flex w-24 text-center justify-center items-center'>
            Stewart
          </a>
        </Link>

        <div className='flex-grow sm:hidden  flex justify-center content-center '>
          {" "}
          <Link href=''>
            <a className='flex w-24 text-center justify-center items-center'>
              My Work
            </a>
          </Link>
          <Link href=''>
            <a className='flex w-24 text-center justify-center items-center'>
              Github
            </a>
          </Link>
          <Link href=''>
            <a className='flex w-24 text-center justify-center items-center'>
              Linkedin
            </a>
          </Link>
        </div>

        <Link href=''>
          <a className='flex-none flex w-24 text-center justify-center items-center'>
            <BsSunFill size='20' />
          </a>
        </Link>

        <div>
          <GiHamburgerMenu size='20' />
        </div>
      </div>
    </>
  );
};
export default Navbar;
