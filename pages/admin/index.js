import Layout from "../../components/layout admin";
import style from "./admin.module.css";
import Link from "next/link";
import { Card } from "antd";
import projectImg from "../../public/Image/8362.jpg";
import testiImg from "../../public/Image/4380.jpg";
import orderImg from "../../public/Image/4818.jpg";
import Image from "next/image";

const { Meta } = Card;

const Dashboard = () => {
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
                width={460}
                height={400}
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
              width={460}
              height={400}
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
              width={460}
              height={400}
              placeholder="blur"
            />
          }
        >
          <Meta title="PESANAN" description="23" />
        </Card>
      </div>

      {/* <p className={style.p}>DASHBOARD</p>
      <div className={style.container}>
        <Link href="/admin/project">
          <div className={style.dashboardMenu}>
            <p>PROJECT ANDA</p>
            <div>12</div>
          </div>
        </Link>
        <div className={style.dashboardMenu}>
          <p>DAFTAR TESTIMONI</p>
        </div>
        <div className={style.dashboardMenu}>
          <p>PESANAN</p>
        </div>
      </div> */}
    </Layout>
  );
};

export default Dashboard;
