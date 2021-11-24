import Link from "next/link";
import { BsSunFill } from "react-icons/bs";
import {GiHamburgerMenu } from "react-icons/gi";
import MobileLinkContainer from "./mobileLinkContainer";
import {atom,useRecoilState} from "recoil"

const navState = atom({
  key: 'navActive',
  default:false,

})


const Navbar = () => {
  const [navActive, setNavActive] = useRecoilState(navState);
  return (
    <>
      <div className=" flex   font-bold  text-DMText w-screen justify-between text-xl  h-16  fixed top-0">
        <div className="px-10 items-center flex justify-center content-center ">
          <Link href="/">
            <a className=" flex-none flex w-28 text-center justify-center items-center">
              Folio 2021
            </a>
          </Link>
        </div>
        <div className=" px-10  sm:hidden items-center flex justify-center content-center ">
          <div className=" flex py-2 mr-10  text-white font-semibold  rounded-lg shadow-md active:bg-emerald-700 focus:outline-none">
            <Link href="">
              <a className="">Work</a>
            </Link>
          </div>

          <div className=" flex py-2 mr-10  text-white font-semibold  rounded-lg shadow-md active:bg-emerald-700 focus:outline-none">
            <Link href="">
              <a className="">About</a>
            </Link>
          </div>

          <div className=" flex py-2   text-white font-semibold  rounded-lg shadow-md active:bg-emerald-700 focus:outline-none">
            <Link href="">
              <a className="">Contact</a>
            </Link>
          </div>
        </div>

        <Link href="">
          <a className="sm:flex md:hidden flex-none flex w-24 text-center justify-center items-center">
            <GiHamburgerMenu
              onClick={() => {
                setNavActive(!navActive);
              }}
              size="28
              "
            />
          </a>
        </Link>
        {navActive && <MobileLinkContainer />}
      </div>
    </>
  );
};
export default Navbar;
