import Layout from "../../../components/layout admin";
import style from "./project.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Divider } from "antd";

const Project = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://app.ferdyfian.xyz/portfolio")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const getData = () => {};

  console.log(data);
  return (
    <Layout>
      <div className={style.container}>
        <Divider
          style={{ fontSize: "20px", marginTop: "25px", marginBottom: "20px" }}
          orientation="left"
        >
          Project
        </Divider>
        <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
    </Layout>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch("https://app.ferdyfian.xyz/portfolio");
//   const data = await res.json();

//   return {
//     props: {
//       projectData: data,
//     }, // will be passed to the page component as props
//   };
// }

export default Project;
