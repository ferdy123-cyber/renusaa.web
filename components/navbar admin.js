import Image from "next/image";
import { useState } from "react";
import notifImage from "../public/Image/bell.png";
import brandLogo from "../public/Image/REENUSA LOGO HITAM-03.png";
import Link from "next/link";
import {
  Menu,
  Dropdown,
  Modal,
  Button,
  Space,
  Form,
  Input,
  Checkbox,
  message,
} from "antd";
import { DownOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import Router from "next/router";
import axios from "axios";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    const data = {
      password: password,
      passwordRepeat: passwordRepeat,
      newPassword: newPassword,
    };
    message.loading("Loading");
    axios
      .patch(`http://localhost:5000/reset`, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        message.destroy();
        message.success("Passwordtelah diganti");
        setIsModalVisible(false);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data);
          message.destroy();
          message.error(error.response.data.error);
        } else {
          message.error(error.message);
        }
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const setNav = () => {
    if (openNav === false) {
      setOpenNav(true);
    } else {
      setOpenNav(false);
    }
  };

  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: "Keluar dari akun ini?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        Cookies.remove("token");
        Router.push("/admin/login");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }
  const menu = (
    <Menu>
      <Menu.Item onClick={showModal}>
        <p>Reset password</p>
      </Menu.Item>
      <Menu.Item onClick={showConfirm}>
        <p>Logout</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      className={`nav-bar admLayout ${openNav === true ? "activeNav2" : ""}`}
    >
      <div className="brand">
        <Link href="/admin">
          <Image
            src={brandLogo}
            width={300}
            height={100}
            alt="brand-logo"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="navigation2 adminNavbar">
        <div className="hamburger-menu2">
          <button onClick={() => setNav()}>Menu</button>
          <div className="notifImg">
            <Image src={notifImage} width={26} height={26} alt="" />
          </div>
        </div>
        <div className={`collapse-menu2 ${openNav === true ? "active2" : ""}`}>
          <Link href="/admin/project">
            <p>LIST PROJECT</p>
          </Link>
          <Link href="/admin/testimoni">
            <p>LIST TESTIMONI</p>
          </Link>
          <Dropdown overlay={menu} trigger={["click"]}>
            <p
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              AKUN <DownOutlined />
            </p>
          </Dropdown>
          ,
          <div className="notifImg">
            <Image src={notifImage} width={26} height={26} alt="" />
          </div>
        </div>
      </div>
      <Modal
        title="Reset password"
        visible={isModalVisible}
        onOk={onFinish}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            span: 14,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Password lama"
            value
            name="password lama"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Password lama (ulangi)"
            name="password lama (ulangi)"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Password baru"
            name="password baru"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Navbar;
