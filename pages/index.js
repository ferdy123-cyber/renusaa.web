import Layout from "../components/layout";
import style from "./index.module.css";
import HomeImg from "../public/Image/branding-copyright-design-spaceship-graphic-concept.jpg";
import Img from "next/image";
import ig from "../public/Image/instagram.png";
import dribble from "../public/Image/dribbble.png";
import behance from "../public/Image/behance.png";
import right from "../public/Image/right-arrow.png";
import Link from "next/link";
import img1 from "../public/project-img/Interbio-Porto-Website-Template-scaled.jpg";
import img2 from "../public/project-img/BMW-AML-Website-scaled.jpg";
import img3 from "../public/project-img/BP-template-web-thumbnail-scaled.jpg";
import img4 from "../public/project-img/Discovery-hotel-1-1.jpg";
import img5 from "../public/project-img/Fore-web-template-scaled.jpg";
import img6 from "../public/project-img/JET-Express-for-website-1.jpg";
import img7 from "../public/project-img/Kopi-Home.gif";
import img8 from "../public/project-img/MoT-website-template-1-scaled.jpg";
import img9 from "../public/project-img/MRT-website-template-scaled.jpg";
import img10 from "../public/project-img/Toza-1.jpg";
import img11 from "../public/project-img/TSH-Web-template-scaled (1).jpg";
import { Row, Col, Divider, message, Modal } from "antd";
import { useState } from "react";
import ListImage from "../components/project/listImg";
import Navbar from "../components/navbar";

export default function Home() {
  const [visible, setVisible] = useState(false);
  console.log(ListImage);
  return (
    <Layout>
      <Navbar screenHeight={1} />
      <div className={style.container}>
        <div className={style.header}>
          <Img
            className={style.imgHeader}
            src={HomeImg}
            placeholder="blur"
            alt=""
            layout="fill"
          />
          <div className={style.slogan}>
            <h1>We explore your ability and employment solutions</h1>
            <p>
              Highly tailored it design, management and supports service, sicing
              elit, sed do elumos tempor
            </p>
            <button>Get started</button>
          </div>
        </div>
        <div className={style.why_us}>
          <h1>Mengapa harus renusaa studio?</h1>
          <p>
            Kami mengerjakan setiap project dengan memaksimalkan keahlian kami
            dalam bidang Branding & Desain Logo, serta mewujudkan secara
            profesional ekspektasi setiap pelanggan yang mempercayakan
            projectnya kepada kami
          </p>
        </div>
        <div className={style.what_we_offer}>
          <h1>Apa yang kami tawarkan?</h1>
          <p>
            Kami mengerjakan setiap project dengan memaksimalkan keahlian kami
            dalam bidang Branding & Desain Logo, serta mewujudkan secara
            profesional ekspektasi setiap pelanggan yang mempercayakan
            projectnya kepada kami
          </p>
        </div>
        <div className={style.project}>
          <h1>Project</h1>
          <Row>
            <Col className={style.col1} span={24} md={6}>
              <Row>
                <Col className={style.img1} span={24}>
                  <Img
                    src={img1}
                    placeholder="blur"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    onClick={() => setVisible(true)}
                  />
                </Col>
                <Col className={style.img2} span={24}>
                  <Img
                    src={img2}
                    placeholder="blur"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>
              </Row>
            </Col>
            <Col className={style.col2} span={24} md={12}>
              <div className={style.img3}>
                <Img
                  src={img3}
                  placeholder="blur"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Col>
            <Col className={style.col3} span={24} md={6}>
              <Row>
                <Col className={style.img4} span={24}>
                  <Img
                    src={img4}
                    placeholder="blur"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>
                <Col className={style.img5} span={24}>
                  <Img
                    src={img5}
                    placeholder="blur"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>
              </Row>
            </Col>
            <Col className={style.col4} span={24} md={12}>
              <Row>
                <Col className={style.img6} span={24}>
                  <Img
                    src={img6}
                    placeholder="blur"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>
                <Col className={style.img7} span={24} md={12}>
                  <Img
                    src={img7}
                    placeholder="empty"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>
                <Col className={style.img8} span={24} md={12}>
                  <Img
                    src={img8}
                    placeholder="blur"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>
              </Row>
            </Col>
            <Col className={style.col5} span={24} md={12}>
              <Row>
                <Col className={style.img9} span={24} md={12}>
                  <Img
                    src={img9}
                    placeholder="blur"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>
                <Col className={style.img10} span={24} md={12}>
                  <Img
                    src={img10}
                    placeholder="empty"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>
                <Col className={style.img11} span={24}>
                  <Img
                    src={img11}
                    placeholder="blur"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Link href="/project">
            <h2 style={{ cursor: "pointer" }}>PROJECT LAINNYA</h2>
          </Link>
        </div>
      </div>
      {/* <div className={style.container}>
        <div className={style.background}></div>
        <div className={style.header}>
          <div className={style.image}>
            <Image
              src={HomeImg}
              height={715}
              width={750}
              alt=""
              placeholder="blur"
            />
          </div>
          <div className={style.text}>
            <h1>Bangun Brand Anda Sekarang.</h1>
            <p>
              Anda fokus bekerja mengurus pelanggan, sementara{" "}
              <b>reenusa studio</b> akan fokus bekerja membangun brand bisnis
              Anda.
            </p>
            <Link href="/project">
              <button>Lihat Project Kami</button>
            </Link>
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
          <Link href="/testimoni">
            <p>
              Cek Testimoni{" "}
              <span>
                <Image src={right} width={14} height={14} alt="" />
              </span>
            </p>
          </Link>
        </div>
      </div> */}
    </Layout>
  );
}
