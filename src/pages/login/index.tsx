import { useEffect, useState } from "react";
import { Button, Card, Form, Input, Layout } from "antd";
import { useNavigate } from "react-router-dom";

import { loginReq } from "~src/api/account";
import { LOCAL_DYNAMIC_ROUTER, LOCAL_TOKEN, LOCAL_USER_INFO } from "~src/config";
import GLOBAL_ROUTERS from "~src/router/config";
import store from "~src/store/store";
import type { AccountApi } from "~src/types/api";
import { getLocalStorage } from "~src/utils";
import lessStyle from "./index.module.less";

const { setLogin, setDynamicRoutes } = store;

const Login = () => {
  const navigate = useNavigate();
  const [loading, loadingHandle] = useState(false);

  const onFinish = async (values: AccountApi.Login) => {
    loadingHandle(true);
    const res = await loginReq(values);

    localStorage.setItem(LOCAL_TOKEN, res.data.token);
    localStorage.setItem(LOCAL_USER_INFO, JSON.stringify(res.data.userInfo));
    localStorage.setItem(LOCAL_DYNAMIC_ROUTER, JSON.stringify(GLOBAL_ROUTERS.APP_PAGE));

    // 设置登录态 用户信息 动态路由配置
    setLogin({ login: true, userInfo: res.data.userInfo });
    setDynamicRoutes(GLOBAL_ROUTERS.APP_PAGE);

    loadingHandle(false);
    navigate("/");
  };

  useEffect(() => {
    if (getLocalStorage(LOCAL_TOKEN)) navigate("/");
  }, [navigate]);

  return (
    <Layout className={lessStyle.content}>
      <Card className={lessStyle.login_box}>
        <div className={lessStyle.box}></div>

        <h1 className="mb-9 text-center text-2xl">欢迎登录</h1>

        <Form name="basic" layout="vertical" onFinish={onFinish} requiredMark="optional" initialValues={{ account: "管理小明", password: "123" }} className="w-80">
          <Form.Item label="账号" name="account" rules={[{ required: true, message: "请输入你的账号!" }]}>
            <Input className={lessStyle.login_input} placeholder="请输入你的账号" />
          </Form.Item>

          <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入你的密码！" }]}>
            <Input.Password className={lessStyle.login_input} placeholder="请输入你的密码" />
          </Form.Item>

          <div className="flex cursor-pointer justify-between text-neutral-400">
            <div>联系管理员</div>
          </div>

          <Button block size="large" type="primary" htmlType="submit" className="mb-4 mt-9" loading={loading}>
            登录
          </Button>
        </Form>
      </Card>
    </Layout>
  );
};

export default Login;
