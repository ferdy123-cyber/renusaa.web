import Layout from "../../components/layout admin";
import style from "./admin.module.css";
import Link from "next/link";
import { Card } from "antd";
import projectImg from "../../public/Image/8362.jpg";
import testiImg from "../../public/Image/4380.jpg";
import orderImg from "../../public/Image/4818.jpg";
import Image from "next/image";
import { authPage } from "../../protectedRoute";

const { Meta } = Card;

const Dashboard = ({ token }) => {
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
            <Meta title="PROJECT ANDA" description="1" />
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
              src={testiImg}
              width={760}
              height={700}
              placeholder="blur"
            />
          }
        >
          <Meta title="DAFTAR TESTIMONI" description="12" />
        </Card>
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
