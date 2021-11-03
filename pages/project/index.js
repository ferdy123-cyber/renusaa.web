import Layout from "../../components/layout";
import style from "./project.module.css";
import img1 from "../../public/project-img/Interbio-Porto-Website-Template-scaled.jpg";
import img2 from "../../public/project-img/BMW-AML-Website-scaled.jpg";
import img3 from "../../public/project-img/BP-template-web-thumbnail-scaled.jpg";
import img4 from "../../public/project-img/Discovery-hotel-1-1.jpg";
import img5 from "../../public/project-img/Fore-web-template-scaled.jpg";
import Img from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, message, Carousel, Image } from "antd";
import Navbar from "../../components/navbar";

const Project = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [imgId, setImgId] = useState(null);

  const openImage = (id) => {
    setImgId(id);
    setVisible(true);
  };

  const change = (val) => {
    setVisible(val);
    setId(null);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/portfolio")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data.error);
          message.error("Ada masalah saat menampilkan data");
        } else {
          console.log(error.message);
          message.error(error.message);
          message.error("Ada masalah saat menampilkan data");
        }
        setLoading(false);
      });
  }, []);
  // const getData = () => {};

  console.log(id);
  return (
    <Layout>
      <Navbar screenHeight={15} />
      <div className={style.container}>
        <Carousel autoplay autoplaySpeed={1800} effect="fade" dots={false}>
          <div className={style.header}>
            <Img
              className={style.imgHeader}
              src={img1}
              placeholder="blur"
              alt=""
              layout="fill"
            />
          </div>
          <div className={style.header}>
            <Img
              className={style.imgHeader}
              src={img2}
              placeholder="blur"
              alt=""
              layout="fill"
            />
          </div>
          <div className={style.header}>
            <Img
              className={style.imgHeader}
              src={img3}
              placeholder="blur"
              alt=""
              layout="fill"
            />
          </div>
          <div className={style.header}>
            <Img
              className={style.imgHeader}
              src={img4}
              placeholder="blur"
              alt=""
              layout="fill"
            />
          </div>
          <div className={style.header}>
            <Img
              className={style.imgHeader}
              src={img5}
              placeholder="blur"
              alt=""
              layout="fill"
            />
          </div>
        </Carousel>
        <h1
          style={{
            fontSize: "38px",
            fontWeight: "200",
            color: "rgb(100, 92, 92)",
            marginTop: "20px",
          }}
        >
          Projects
        </h1>
        <Row
          justify="center"
          style={{
            margin: "auto",
            marginBottom: "30px",
            width: "95vw",
          }}
        >
          {data.map((e) => {
            return (
              <Col
                onMouseEnter={() => setId(e.id)}
                onMouseLeave={() => setId(null)}
                key={e.id}
                span={24}
                md={12}
                xl={8}
                xs={24}
                sm={12}
                lg={8}
                style={{ height: 320, position: "relative" }}
                onClick={() => openImage(e.img_id)}
              >
                <LazyLoadImage
                  src={`https://docs.google.com/uc?id=${e.img_id}`}
                  effect="blur"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                  className={style.img}
                />
                <div
                  className={style.bgHover}
                  style={id === e.id ? { opacity: 1 } : { opacity: 0 }}
                >
                  <h1>Preview</h1>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      {/* {loading === true && (
        <div
          style={{
            width: "100vw",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoadingOutlined style={{ fontSize: 54 }} spin />
        </div>
      )}
      {loading === false && (
        <div className={style.container}>
          <Divider
            style={{
              fontSize: "20px",
              marginTop: "25px",
              marginBottom: "20px",
            }}
            orientation="left"
          >
            Portfolio
          </Divider>
          <Row
            justify="space-around"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            {data.map((e) => {
              return (
                <Col
                  key={e.id}
                  className="gutter-row"
                  style={{
                    maxHeight: "420px",
                    width: "100%",
                    maxWidth: "420px",
                    height: "100vw",
                  }}
                >
                  <LazyLoadImage
                    className={style.image}
                    style={{
                      objectFit: "contain",
                    }}
                    alt=""
                    src={`https://docs.google.com/uc?id=${e.img_id}`} // use normal <img> attributes as props
                    effect="blur"
                    width="100%"
                    height="100%"
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      )} */}
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          style={{ height: "100px" }}
          preview={{
            visible,
            onVisibleChange: (vis) => change(vis),
          }}
        >
          <Image src={`https://docs.google.com/uc?id=${imgId}`} alt="" />
        </Image.PreviewGroup>
      </div>
    </Layout>
  );
};

export default Project;
