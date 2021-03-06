import Image from "next/image";
import { useEffect, useState } from "react";
import brandLogo from "../public/Image/REENUSA LOGO PUTIH-04.png";
import Link from "next/link";
import { PauseOutlined } from "@ant-design/icons";

const Navbar = ({ screenHeight, whitePage }) => {
  console.log(whitePage);
  const [openNav, setOpenNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const setNav = () => {
    if (openNav === false) {
      setOpenNav(true);
    } else {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      const viewHeight = document.documentElement.clientHeight / screenHeight;
      if (scrollHeight > viewHeight) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  console.log(scroll);
  return (
    <div
      className={`nav-bar ${openNav === true ? "activeNav" : ""} ${
        scroll ? "setBg" : ""
      } ${openNav && scroll ? "activeBg" : ""} ${
        whitePage === true ? "setBg" : ""
      }`}
    >
      <div className="brand">
        <Link href="/">
          <Image
            src={brandLogo}
            layout="fill"
            alt="brand-logo"
            className="brandImg"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="navigation userNavbar">
        <div className="hamburger-menu">
          <PauseOutlined onClick={() => setNav()} />
        </div>
        <div className={`collapse-menu ${openNav === true ? "active" : ""}`}>
          <p>TENTANG</p>

          <Link href="/pricing">
            <p>PRICING</p>
          </Link>
          <Link href="/project">
            <p>PORTFOLIO</p>
          </Link>
          <Link href="/testimoni">
            <p>TESTIMONI CLIENT</p>
          </Link>
          <Link href="/terms-and-condition">
            <p>SYARAT & KETENTUAN</p>
          </Link>

          <a
            href="https://api.whatsapp.com/send/?phone=6282320189591&text=Hai"
            target="_blank"
            rel="noreferrer"
          >
            <button>HUBUNGI KAMI</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
