import { Layout, Menu } from "antd";
import { useEffect, useMemo, useState } from "react";

const { Sider } = Layout;

const SiderCom = ({
  menu,
  selectKey,
}: {
  menu: MenuItem[];
  selectKey: string | null;
}) => {
  const [keys, keysHandle] = useState<string[]>([]);

  const currentKay = useMemo(() => {
    if (!selectKey) {
      return menu[0].children ? menu[0].children[0]?.key : menu[0].key;
    }

    return selectKey;
  }, [menu, selectKey]);

  useEffect(() => {
    const arr: string[] = [];

    menu.forEach(e => {
      if (e.children?.length) {
        arr.push(`${e.key}`);
      }
    });

    keysHandle(arr);
  }, [menu]);

  return (
    <Sider theme="light" width={160}>
      <div style={{ height: "28px" }}></div>

      <Menu
        mode="inline"
        openKeys={keys}
        selectedKeys={[`${currentKay}`]}
        items={menu}
        onOpenChange={openKeys => {
          keysHandle(openKeys);
        }}
      />
    </Sider>
  );
};

export default SiderCom;