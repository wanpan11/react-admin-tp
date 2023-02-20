import React from "react";
import { Card, Layout } from "antd";
import styles from "./index.module.less";
import { Link } from "react-router-dom";

const list_1 = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "300px" }}>
        <div className={styles.item}>
          <Link to="game">游戏管理</Link>
        </div>
        <div className={styles.item}>
          <Link to="game">营销管理</Link>
        </div>
        <div className={styles.item}>
          <Link to="game">登录</Link>
        </div>
      </Card>
    </Layout>
  );
};

export default list_1;
