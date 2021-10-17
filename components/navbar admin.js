import Image from "next/image";
import { useState } from "react";
import notifImage from "../public/Image/bell.png";
import brandLogo from "../public/Image/REENUSA LOGO HITAM-03.png";
import Link from "next/link";

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
    <div className={`nav-bar ${openNav === true ? "activeNav2" : ""}`}>
      <div className="brand">
        <Link href="/admin">
          <Image src={brandLogo} width={300} height={100} alt="brand-logo" />
        </Link>
      </div>
      <div className="navigation2 adminNavbar">
        <div className="hamburger-menu2">
          <button onClick={() => setNav()}>Menu</button>
          <div className="notifImg">
            <Image src={notifImage} width={26} height={26} />
          </div>
        </div>
        <div className={`collapse-menu2 ${openNav === true ? "active2" : ""}`}>
          <Link href="/admin/project">
            <p>LIST PROJECT</p>
          </Link>
          <p>LIST TESTIMONI</p>
          <p>LOGOUT</p>
          <div className="notifImg">
            <Image src={notifImage} width={26} height={26} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
