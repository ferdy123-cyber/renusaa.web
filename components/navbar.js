import Image from "next/image";
import { useState } from "react";
import brandLogo from "../public/Image/REENUSA LOGO HITAM-03.png";

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
        <Image src={brandLogo} width={300} height={100} alt="brand-logo" />
      </div>
      <div className="navigation">
        <div className="hamburger-menu">
          <button onClick={() => setNav()}>Menu</button>
        </div>
        <div className={`collapse-menu ${openNav === true ? "active" : ""}`}>
          <p>TENTANG</p>
          <p>PRICING</p>
          <p>PROJECTS</p>
          <p>TESTIMONI CLIENT</p>
          <p>SYARAT & KETENTUAN</p>
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
