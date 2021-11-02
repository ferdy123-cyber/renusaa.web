import Layout from "../../../components/layout admin";
import style from "./project.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Divider,
  Button,
  Modal,
  message,
  Space,
  Upload,
  Popconfirm,
} from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { authPage } from "../../../protectedRoute";
import Router from "next/router";
import Cookies from "js-cookie";

const Project = ({ token }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getData = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/portfolio/admin", {
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
        message.error("Sesi anda telah habis");
        Cookies.remove("token");
        setLoading(false);
      });
  };

  function confirm(id) {
    message.loading("Loading...");
    axios
      .delete(`http://localhost:5000/portfolio/${id}`, {
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

  const AddProject = () => {
    const props = {
      name: "file",
      action: "http://localhost:5000/portfolio/add",
      headers: {
        authorization: `Bearer ${token}`,
      },
      onChange(info) {
        console.log(info.file.percent);
        if (info.file.status !== "uploading") {
        }
        if (info.file.status === "done") {
          handleCancel();
          message.success(`${info.file.name} file berhasil di upload`);
          getData();
        } else if (info.file.status === "error") {
          handleCancel();
          message.error(`${info.file.name} upload gagal.`);
        }
      },
    };
    return (
      <>
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Upload
            {...props}
            name="file"
            listType="picture"
            maxCount={4}
            multiple
          >
            <Button icon={<UploadOutlined />}>Upload (Max: 4)</Button>
          </Upload>
        </Space>
      </>
    );
  };

  useEffect(() => {
    getData();
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
            Project
          </Divider>
          <Row
            justify="space-around"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            {data.map((e) => {
              return (
                <>
                  <Col
                    key={e.id}
                    className="gutter-row"
                    style={{
                      maxHeight: "420px",
                      width: "95%",
                      maxWidth: "420px",
                      height: "100vw",
                      position: "relative",
                      border: id === e.id ? "2px solid #ff4d4f" : "",
                      borderRadius: "8px",
                      marginBottom: "5px",
                      paddingBottom: "10px",
                    }}
                  >
                    <LazyLoadImage
                      onClick={
                        id === e.id ? () => setId(null) : () => setId(e.id)
                      }
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
                    {id === e.id && (
                      <Popconfirm
                        className={style.delBtn}
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
                    )}
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      )}
      <Button
        style={{ position: "fixed", bottom: "5vh", right: "2vw" }}
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

export default Project;
