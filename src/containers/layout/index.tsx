import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";

const { Header, Content, Footer, Sider } = Layout;

const LayoutContainer = () => {
  return (
    <>
      <Layout style={{ minHeight: "100%" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <h1 className={styles.logo}>MONEYKEEPER</h1>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              首页
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Moneykeeper © 2020 Jaryoe, Inc.
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutContainer;
