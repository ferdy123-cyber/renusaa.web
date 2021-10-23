import Layout from "../../../components/layout admin";
import style from "./testimoni.module.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import MobileUi from "../../../components/mobileUi";
import {
  Divider,
  Button,
  Modal,
  message,
  Space,
  Upload,
  Popconfirm,
  Input,
} from "antd";
import { useState, useEffect } from "react";
import { authPage } from "../../../protectedRoute";
import Router from "next/router";
import Cookies from "js-cookie";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import axios from "axios";

const { TextArea } = Input;

const Testimoni = ({ token }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getData = () => {
    setLoading(true);
    axios
      .get("https://app.ferdyfian.xyz/testimoni/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        // Router.push("/admin/login");
        if (error.response && error.response.data) {
          message.error(error.response.data);
        } else {
          message.error(error.message);
        }
        // Cookies.remove("token");
        // setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const AddProject = () => {
    const [uploading, setUploading] = useState(false);
    const [logoImg, setLogoImg] = useState(null);
    const [ssImg, setSsImg] = useState(null);
    const [text, setText] = useState(null);
    const props = {
      onRemove: () => {
        // const index = logoImg.indexOf(file);
        // const newFileList = logoImg.slice();
        // newFileList.splice(index, 1);
        setLogoImg(null);
      },
      beforeUpload: (file) => {
        setLogoImg(file);
        return false;
      },
      logoImg,
    };

    const props2 = {
      onRemove: () => {
        // const index = logoImg.indexOf(file);
        // const newFileList = logoImg.slice();
        // newFileList.splice(index, 1);
        setSsImg(null);
      },
      beforeUpload: (file) => {
        setSsImg(file);
        return false;
      },
      ssImg,
    };

    const description = (id) => {
      axios
        .patch(
          `https://app.ferdyfian.xyz/testimoni/${id}`,
          { description: text },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          message.success("file berhasil di upload");
          setUploading(false);
          getData();
        })
        .catch((error) => {
          console.log(error);
          message.error("Ada masalah");
          setUploading(false);
        });
    };

    const data = new FormData();

    const handleUpload = () => {
      data.append("logo", logoImg);
      data.append("testimoni", ssImg);
      console.log(data);
      setUploading(true);
      axios
        .post(`https://app.ferdyfian.xyz/testimoni/add`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          description(response.data.data.id);
        })
        .catch((error) => {
          console.log(error);
          message.error("Upload gagal");
          setUploading(false);
        });
    };

    return (
      <>
        <Upload {...props} maxCount={1} style={{ paddingBottom: "10px" }}>
          <Button icon={<UploadOutlined />}>Upload logo klien</Button>
        </Upload>
        <Upload {...props2} maxCount={1}>
          <Button style={{ marginTop: "10px" }} icon={<UploadOutlined />}>
            Upload screenshot
          </Button>
        </Upload>
        <TextArea
          showCount
          autoSize={{ minRows: 2, maxRows: 6 }}
          maxLength={600}
          style={{ marginTop: "15px" }}
          placeholder="Deskripsi..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={logoImg === null || ssImg === null || text === null}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? "Uploading" : "Start Upload"}
        </Button>
      </>
    );
  };

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
        <Button
          style={{ position: "fixed", bottom: "40px", right: "2vw" }}
          type="primary"
          shape="round"
          value="ok"
          size="large"
          onClick={showModal}
        >
          Upload
        </Button>
        <Modal
          style={{ borderRadius: "8px" }}
          centered
          title="Upload gambar"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <AddProject token={token} />
        </Modal>
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

export async function getServerSideProps(ctx) {
  const token = await authPage(ctx);
  return {
    props: {
      token,
    },
  };
}

export default Testimoni;
