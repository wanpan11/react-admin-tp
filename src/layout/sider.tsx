import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useEffect, useMemo, useState } from "react";

const { Sider } = Layout;

function SiderCom({ menu, selectKey }: { menu: MenuItem[]; selectKey: string | null }) {
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

  useEffect(() => {
    setOpenKeys(defaultOpenKeys);
  }, [defaultOpenKeys]);

  const currentSelectKey = useMemo(() => {
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
