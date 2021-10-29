import Image from "next/image";
import { useState } from "react";
import brandLogo from "../public/Image/REENUSA LOGO PUTIH-04.png";
import Link from "next/link";
import { PauseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);
  const setNav = () => {
    if (openNav === false) {
      setOpenNav(true);
    } else {
      setOpenNav(false);
    }
  };
  return (
    <div className={`nav-bar ${openNav === true ? "activeNav" : ""}`}>
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
          <p>PRICING</p>
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
