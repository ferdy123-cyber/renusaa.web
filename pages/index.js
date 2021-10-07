import Layout from "../components/layout";
import style from "./index.module.css";
import HomeImg from "../public/Image/home.jpg";
import Image from "next/image";
import ig from "../public/Image/instagram.png";
import dribble from "../public/Image/dribbble.png";
import behance from "../public/Image/behance.png";
import right from "../public/Image/right-arrow.png";

export default function Home() {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.background}></div>
        <div className={style.header}>
          <div className={style.image}>
            <Image src={HomeImg} height={715} width={750} alt="" />
          </div>
          <div className={style.text}>
            <h1>Bangun Brand Anda Sekarang.</h1>
            <p>
              Anda fokus bekerja mengurus pelanggan, sementara{" "}
              <b>reenusa studio</b> akan fokus bekerja membangun brand bisnis
              Anda.
            </p>
            <button>Lihat Project Kami</button>
          </div>
        </div>
        <div className={style.sosmed}>
          <a
            href="https://www.instagram.com/reenusa_/"
            target="_blank"
            rel="noreferrer"
          >
            <Image className="img" src={ig} width={35} height={35} alt="" />
          </a>
          <a
            href="https://dribble.com/reenusa"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="img"
              src={dribble}
              width={35}
              height={35}
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
              width={35}
              height={35}
              alt=""
            />
          </a>
        </div>
        <div className={style.toTestimoni}>
          <p>
            Cek Testimoni{" "}
            <span>
              <Image src={right} width={14} height={14} />
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
}
