import Layout from "../../components/layout";
import style from "./project.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Divider, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Project = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://app.ferdyfian.xyz/portfolio")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data.error);
          message.error(error.response.data.error);
        } else {
          console.log(error.message);
          message.error(error.message);
        }
        setLoading(false);
      });
  }, []);
  // const getData = () => {};

  console.log(data);
  return (
    <Layout>
      {loading === true && (
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
      )}
    </Layout>
  );
};

export default Project;
