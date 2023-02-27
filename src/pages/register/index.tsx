import React from "react";
import { Card, Layout } from "antd";
import styles from "./index.module.less";
import restStyles from "@src/assets/css/reset.module.less";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { loginReq } from "@src/api/game";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Register = () => {
  const navigate = useNavigate();
  const [from] = Form.useForm();

  console.log("from ===> ", from);
  const onFinish = async (values: { account: string; password: string }) => {
    const res = await loginReq(values);

    console.log("res ===> ", res);

    navigate("/game");
  };

  return (
    <Layout className={styles.content}>
      <Card className={styles.login_box}>
        <h1 className={styles.title}>
          <ArrowLeftOutlined
            className={styles.back}
            onClick={() => {
              navigate("/");
            }}
          />
          账号注册
        </h1>

        <Form
          form={from}
          name="basic"
          layout="vertical"
          style={{ width: 300 }}
          onFinish={onFinish}
          requiredMark="optional"
        >
          <Form.Item
            label="账号"
            name="account"
            rules={[{ required: true, message: "请输入你的账号!" }]}
          >
            <Input
              className={restStyles.login_input}
              placeholder="请输入你的账号"
            />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入你的密码！" }]}
          >
            <Input.Password
              className={restStyles.login_input}
              placeholder="请输入你的密码"
            />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入你的密码！" }]}
          >
            <Input.Password
              className={restStyles.login_input}
              placeholder="请输入你的密码"
            />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入你的密码！" }]}
          >
            <Input.Password
              className={restStyles.login_input}
              placeholder="请输入你的密码"
            />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入你的密码！" }]}
          >
            <Input.Password
              className={restStyles.login_input}
              placeholder="请输入你的密码"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            className={styles.submit}
          >
            注册
          </Button>
        </Form>
      </Card>
    </Layout>
  );
};

export default Register;
