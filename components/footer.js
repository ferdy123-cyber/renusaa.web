import Image from "next/image";
import brandLogo from "../public/Image/REENUSA LOGO PUTIH-03.png";
import ig from "../public/Image/instagram.png";
import dribble from "../public/Image/dribbble.png";
import behance from "../public/Image/behance.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="text">
          <h2>Tertarik Bekerjasama dengan kami?</h2>
          <p>
            Setiap project punya tantangan tersendiri, dan team Reenusa Studio
            sangat siap untuk hal tersebut. Mari berdiskusi dengan kami :)
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=6282320189591&text=Hai%20Hai"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <button>HUBUNGI KAMI</button>
        </a>
      </div>
      <div className="bottom-footer">
        <div className="information">
          <Image src={brandLogo} width={220} height={75} alt="LOGO" />
          <p>
            DILO Medan Jl Mongonsidi no. 6A, Anggrung, Kec. Medan Polonia,
            Sumater Utara
          </p>
          <p>+62 823 2018 9591</p>
          <a href="mailto:rizalnugrahasaputra@gmail.com">
            <b>rizalnugrahasaputra@gmail.com</b>
          </a>
          <div className="logoSosmed">
            <a
              href="https://www.instagram.com/reenusa_/"
              target="_blank"
              rel="noreferrer"
            >
              <Image className="img" src={ig} width={30} height={30} alt="" />
            </a>
            <a
              href="https://dribble.com/reenusa"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="img"
                src={dribble}
                width={30}
                height={30}
                alt=""
              />
            </a>
            <a
              href="https://www.behance.net/reenusa"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="img"
                src={behance}
                width={30}
                height={30}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
