import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { atom, useRecoilState } from "recoil";
const navState = atom({
  key: "navActive",
  default: false,
});
const hoverState = atom({
  key: "hoverActive",
  default: '',
});
const MobileLinkContainer = () => {
  const [navActive, setNavActive] = useRecoilState(navState);
  const [hoverActive, setHoverActive] = useRecoilState(hoverState);
  return (
    <div className="fixed flex flex-col text-white bg-black w-screen  h-full justify-evenly  items-center ">
      {" "}
      <Link href="">
        <a
          onMouseOver={() => setHoverActive("work")}
          className={`flex pl-12    h-full  w-full text-6xl text-center  items-center`}
        >
          Work
        </a>
      </Link>
      <Link href="">
        <a
          onMouseOver={() => setHoverActive("about")}
          className={`flex pl-12    h-full  w-full text-6xl text-center  items-center`}
        >
          About
        </a>
      </Link>
      <Link href="">
        <a
          onMouseOver={() => {
            setHoverActive("contact");
            console.log(hoverActive);
          }}
          className={`flex pl-12    h-full  w-full text-6xl text-center ${
            hoverActive == "about" || "contact" ? null : "blur"
          } items-center`}
        >
          Contact
        </a>
      </Link>
      <Link href="">
        <a className=" fixed flex-none flex w-24 text-center justify-center items-center top-5 right-0">
          <AiOutlineClose
            onClick={() => {
              setNavActive(!navActive);
            }}
            size="28"
          />
        </a>
      </Link>
    </div>
  );
};
export default MobileLinkContainer;
