import Layout from "../../components/layout";
import style from "./testimoni.module.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { message, Comment } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import LazyLoad from "react-lazyload";

const Testimoni = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:5000/testimoni")
      .then((res) => {
        setData(res.data.data);
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
      <Navbar whitePage={true} screenHeight={2000} />
      <div className={style.container}>
        <div className={style.header}>
          <h1>Testimonial</h1>
          <p>
            Kepuasan klien adalah hal penting bagi kami. Lihat hal apa saja yang
            klien katakan tentang kami.
          </p>
        </div>
        <div className={style.data}>
          {data.map((e) => {
            return (
              <LazyLoad
                height={400}
                offset={50}
                key={e.id}
                className={style.comment}
              >
                <Comment
                  className={style.commentChild}
                  style={{
                    backgroundColor: "rgb(235, 228, 228)",
                    marginBottom: "25px",
                  }}
                  actions={[<span key="comment-basic-reply-to">{e.city}</span>]}
                  author={<a>{e.name}</a>}
                  avatar={
                    <img
                      className={style.none}
                      style={{
                        width: "80px",
                        height: "80px",
                        marginRight: "15px",
                        objectFit: "contain",
                        backgroundColor: "white",
                        boxShadow: "0px 0px 1px",
                      }}
                      size="large"
                      src={`https://docs.google.com/uc?id=${e.logo_img_id}`}
                      alt="Han Solo"
                    />
                  }
                  content={
                    <div className={style.content}>
                      <span>{e.description}</span>
                    </div>
                  }
                />
                <img
                  className={style.avatar}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 1px",
                  }}
                  size="large"
                  src={`https://docs.google.com/uc?id=${e.logo_img_id}`}
                  alt="Han Solo"
                />
              </LazyLoad>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Testimoni;
