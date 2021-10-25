import Layout from "../../components/layout";
import style from "./testimoni.module.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import MobileUi from "../../components/mobileUi";
import { Divider, message, Input } from "antd";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";

const Testimoni = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const getData = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/testimoni")
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        message.error("Gagal memproses data");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div className={style.container}>
        <Divider
          style={{
            fontSize: "20px",
            marginTop: "15px",
            marginBottom: "40px",
          }}
          orientation="left"
        >
          Testimoni
        </Divider>
        {loading === false && (
          <div className="map">
            {data.map((e) => (
              <div className={style.data} key={e.id}>
                <div className={style.div1}>
                  <LazyLoadImage
                    style={{
                      width: "80%",
                      maxWidth: "200px",
                      maxHeight: "200px",
                      objectFit: "contain",
                    }}
                    alt=""
                    src={`https://docs.google.com/uc?id=${e.logo_img_id}`} // use normal <img> attributes as props
                    effect="blur"
                    width="100%"
                    height="100%"
                  />
                  {show === true && <p>{e.description}</p>}
                </div>
                <div className={style.div2}>
                  <MobileUi show={show}>
                    <div className={style.testimoniSS}>
                      <LazyLoadImage
                        style={{ maxWidth: 270 }}
                        afterLoad={() => setShow(true)}
                        beforeLoad={() => setShow(false)}
                        alt=""
                        src={`https://docs.google.com/uc?id=${e.testimoni_img_id}`} // use normal <img> attributes as props
                        effect="blur"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  </MobileUi>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Testimoni;
