import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useEffect, useMemo, useState } from "react";

const { Sider } = Layout;

function SiderCom({ menu, selectKey }: { menu: MenuItem[]; selectKey: string | null }) {
  // 默认展开所有有子菜单的菜单项
  const defaultOpenKeys = useMemo(() => {
    const arr: string[] = [];

    menu.forEach((e) => {
      if (e.children?.length) {
        arr.push(`${e.key}`);
      }
    });

    return arr;
  }, [menu]);

  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys);

  // 每当默认展开的菜单项变化时，更新状态
  useEffect(() => {
    setOpenKeys(defaultOpenKeys);
  }, [defaultOpenKeys]);

  // 计算当前选中的菜单项
  const currentSelectKey = useMemo(() => {
    // 如果没有传入选中的 key，则默认选中第一个菜单项
    if (!selectKey) {
      return menu[0].children ? menu[0].children[0]?.key : menu[0].key;
    }

    return selectKey;
  }, [menu, selectKey]);

  return (
    <Sider theme="light" width={160}>
      <Menu
        mode="inline"
        className="mt-5"
        openKeys={openKeys}
        selectedKeys={[`${currentSelectKey}`]}
        items={menu as MenuProps["items"]}
        onOpenChange={setOpenKeys}
      />
    </Sider>
  );
}

export default SiderCom;
