import { Card, Layout } from "antd";
import styles from "./index.module.less";
import restStyles from "@src/assets/css/reset.module.less";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { loginReq } from "@src/api/account";
import type { AccountApi } from "@src/types/api";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values: AccountApi.Login) => {
    const res = await loginReq(values);
    console.log("loginReq ===> ", res);
    navigate("/system");
  };

  return (
    <Layout className={styles.content}>
      <Card className={styles.login_box}>
        <div className={styles.box}></div>

        <h1 className={styles.title}>欢迎登录</h1>

        <Form
          name="basic"
          layout="vertical"
          style={{ width: 300 }}
          onFinish={onFinish}
          requiredMark="optional"
          initialValues={{ account: "user", password: "123" }}
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

          <div className={styles.more}>
            <div>联系管理员</div>
          </div>

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
