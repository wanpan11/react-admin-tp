import { Card, Layout } from "antd";
import lessStyle from "./index.module.less";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { loginReq } from "@src/api/account";
import type { AccountApi } from "@src/types/api";
import store from "@src/store/store";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values: AccountApi.Login) => {
    const res = await loginReq(values);
    localStorage.setItem("token", res.data.token);
    store.setLogin(true);
    navigate("/");
  };

  return (
    <Layout className={lessStyle.content}>
      <Card className={lessStyle.login_box}>
        <div className={lessStyle.box}></div>

        <h1 className={lessStyle.title}>欢迎登录</h1>

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
              className={lessStyle.login_input}
              placeholder="请输入你的账号"
            />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入你的密码！" }]}
          >
            <Input.Password
              className={lessStyle.login_input}
              placeholder="请输入你的密码"
            />
          </Form.Item>

          <div className={lessStyle.more}>
            <div>联系管理员</div>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            className={lessStyle.submit}
          >
            登录
          </Button>
        </Form>
      </Card>
    </Layout>
  );
};

export default Login;
