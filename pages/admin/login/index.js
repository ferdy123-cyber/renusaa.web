import { Form, Input, Button, Alert, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Image from "next/image";
import logo from "../../../public/Image/REENUSA LOGO HITAM-05.png";
import style from "./login.module.css";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import Router from "next/router";
import { unAuthPage } from "../../../protectedRoute";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onClose = (e) => {
    console.log(e, "I was closed.");
  };

  const onFinish = (values) => {
    setLoading(true);
    const data = {
      email: values.email,
      password: values.password,
    };
    axios
      .post("https://app.ferdyfian.xyz/login", data)
      .then((res) => {
        console.log(res.data.data);
        setAlert(false);
        setLoading(false);
        message.success("Login berhasil");
        Cookies.set("token", res.data.data.token);
        Router.push("/admin");
      })
      .catch((error) => {
        setAlert(true);
        if (error.response && error.response.data) {
          console.log(error.response.data.error);
          setError(error.response.data.error);
        } else {
          console.log(error.message);
          setError(error.message);
        }
        setLoading(false);
      });
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{
        width: "92%",
        maxWidth: "550px",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <div className={style.loginField}>
        <Image
          src={logo}
          width={150}
          height={150}
          objectFit="contain"
          placeholder="blur"
        />
        <p>Login ke akun kamu</p>
      </div>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button warning"
          style={{
            backgroundColor: "#5d5c55",
            color: "white",
            border: "solid 1px #5d5c55",
            marginTop: "15px",
          }}
        >
          {loading ? "Loading..." : "Log in"}
        </Button>
      </Form.Item>
      {alert === true && (
        <Alert
          message="Login gagal"
          description={error}
          type="error"
          closable
          onClose={onClose}
        />
      )}
    </Form>
  );
};

export async function getServerSideProps(ctx) {
  await unAuthPage(ctx);
  return {
    props: {},
  };
}

export default Login;
