import Layout from "../../components/layout admin";
import style from "./admin.module.css";
import Link from "next/link";
import { Card, message } from "antd";
import projectImg from "../../public/Image/8362.jpg";
import testiImg from "../../public/Image/4380.jpg";
import orderImg from "../../public/Image/4818.jpg";
import Image from "next/image";
import { authPage } from "../../protectedRoute";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";
import Cookies from "js-cookie";
const { Meta } = Card;

const Dashboard = ({ token }) => {
  const [projectLength, setProjectLength] = useState(0);
  const [testiLength, setTestiLength] = useState(0);
  const getProject = () => {
    axios
      .get("https://app.ferdyfian.xyz/portfolio/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProjectLength(res.data.length);
      })
      .catch((error) => {
        Router.push("/admin/login");
        message.error("Sesi anda telah habis");
        Cookies.remove("token");
      });
  };

  const getTestimoni = () => {
    axios
      .get("https://app.ferdyfian.xyz/testimoni/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTestiLength(res.data.length);
      })
      .catch((error) => {
        Router.push("/admin/login");
        message.error("Sesi anda telah habis");
        Cookies.remove("token");
        console.log(error);
      });
  };

  useEffect(() => {
    getProject();
    getTestimoni();
  }, [getProject, getTestimoni]);
  return (
    <Layout>
      <div className={style.container}>
        <Link href="/admin/project">
          <Card
            hoverable
            style={{
              width: "98%",
              maxWidth: 460,
              marginRight: "1%",
              marginBottom: 10,
              marginLeft: "1%",
            }}
            cover={
              <Image
                alt="example"
                src={projectImg}
                width={760}
                height={700}
                placeholder="blur"
              />
            }
          >
            <Meta title="PROJECT ANDA" description={projectLength} />
          </Card>
        </Link>
        <Link href="/admin/testimoni">
          <Card
            hoverable
            style={{
              width: "98%",
              maxWidth: 460,
              marginRight: "1%",
              marginBottom: 10,
              marginLeft: "1%",
            }}
            cover={
              <Image
                alt="example"
                src={testiImg}
                width={760}
                height={700}
                placeholder="blur"
              />
            }
          >
            <Meta title="DAFTAR TESTIMONI" description={testiLength} />
          </Card>
        </Link>
        <Card
          hoverable
          style={{
            width: "98%",
            maxWidth: 460,
            marginRight: "1%",
            marginBottom: 10,
            marginLeft: "1%",
          }}
          cover={
            <Image
              alt="example"
              src={orderImg}
              width={760}
              height={700}
              placeholder="blur"
            />
          }
        >
          <Meta title="PESANAN" description="23" />
        </Card>
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

export default Dashboard;
