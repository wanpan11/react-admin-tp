import React from "react";
import { Card, Layout } from "antd";
import styles from "./index.module.less";
import restStyles from "@src/assets/css/reset.module.less";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate("game");
  };

  return (
    <Layout className={styles.content}>
      <Card className={styles.login_box}>
        <h1 className={styles.title}>登录</h1>

        <Form
          name="basic"
          layout="vertical"
          style={{ width: 300 }}
          onFinish={onFinish}
          requiredMark="optional"
        >
          <Form.Item
            label="账号"
            name="username"
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

          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            className={styles.submit}
          >
            登录
          </Button>
        </Form>
      </Card>
    </Layout>
  );
};

export default Login;
