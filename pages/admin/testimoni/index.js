import Layout from "../../../components/layout admin";
import style from "./testimoni.module.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Divider,
  Button,
  Modal,
  message,
  Space,
  Upload,
  Popconfirm,
  Input,
  Comment,
  Avatar,
  Tooltip,
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
  console.log(data);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function confirm(id) {
    message.loading("Loading...");
    axios
      .delete(`http://localhost:5000/testimoni/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        getData();
        message.destroy();
        message.success("File telah dihapus");
      })
      .catch((error) => {
        Router.push("/admin/login");
        message.error(`Sesi anda telah habis`);
        Cookies.remove("token");
        if (error.response && error.response.data) {
          console.log(error.response.data.error);
        } else {
          console.log(error.message);
        }
        console.log(error.message.data);
        setLoading(false);
      });
  }

  function cancel(e) {
    console.log(e);
    message.error("Dibatalkan");
  }

  const getData = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/testimoni/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        Router.push("/admin/login");
        message.error("Sesi telah habis");
        if (error.response && error.response.data) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
        Cookies.remove("token");
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const AddProject = () => {
    const [uploading, setUploading] = useState(false);
    const [logoImg, setLogoImg] = useState(null);
    const [text, setText] = useState(null);
    const [name, setName] = useState(null);
    const [city, setCity] = useState(null);
    const props = {
      onRemove: () => {
        setLogoImg(null);
      },
      beforeUpload: (file) => {
        setLogoImg(file);
        return false;
      },
      logoImg,
    };

    const description = (id) => {
      axios
        .patch(
          `http://localhost:5000/testimoni/${id}`,
          { description: text, name: name, city: city },
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
      console.log(data);
      setUploading(true);
      axios
        .post(`http://localhost:5000/testimoni/add`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
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
        <Upload {...props} maxCount={1} style={{ marginBottom: "10px" }}>
          <Button icon={<UploadOutlined />}>Upload logo klien</Button>
        </Upload>
        <Input
          placeholder="Nama brand..."
          style={{ marginBottom: "10px", marginTop: "10px" }}
          value={name}
          onChange={(e) =>
            setName(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
        />
        <Input
          placeholder="Kota..."
          style={{ paddingBottom: "10px" }}
          value={city}
          onChange={(e) =>
            setCity(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
        />
        <TextArea
          showCount
          autoSize={{ minRows: 2, maxRows: 6 }}
          maxLength={600}
          style={{ marginTop: "15px" }}
          placeholder="Komentar..."
          value={text}
          onChange={(e) =>
            setText(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
        />
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={
            logoImg === null || text === null || name === null || city === null
          }
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
          style={{ position: "fixed", bottom: "40px", right: "2vw", zIndex: 4 }}
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

        {data.map((e) => {
          return (
            <div key={e.id} className={style.comment}>
              <Comment
                className={style.commentChild}
                style={{
                  backgroundColor: "rgb(235, 228, 228)",
                  marginBottom: "15px",
                }}
                actions={[
                  <span key="comment-basic-reply-to">{e.city}</span>,
                  <div key="comment-basic-reply-to" className={style.del}>
                    <Popconfirm
                      title="Hapus file ini? anda tidak dapat memulihkannya"
                      onConfirm={() => confirm(e.id)}
                      onCancel={cancel}
                      okText="Ya"
                      cancelText="Tidak"
                    >
                      <Button type="primary" shape="round" danger>
                        Hapus
                      </Button>
                    </Popconfirm>
                  </div>,
                ]}
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
            </div>
          );
        })}
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
