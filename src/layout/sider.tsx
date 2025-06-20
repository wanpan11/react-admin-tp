import { Layout, Menu } from "antd";
import { useEffect, useMemo, useState } from "react";

const { Sider } = Layout;

function SiderCom({ menu, selectKey }: { menu: MenuItem[]; selectKey: string | null }) {
  const [keys, setKeys] = useState<string[]>([]);

  const currentKay = useMemo(() => {
    if (!selectKey) {
      return menu[0].children ? menu[0].children[0]?.key : menu[0].key;
    }

    return selectKey;
  }, [menu, selectKey]);

  useEffect(() => {
    const arr: string[] = [];

    menu.forEach((e) => {
      if (e.children?.length) {
        arr.push(`${e.key}`);
      }
    });

    setKeys(arr);
  }, [menu]);

  return (
    <Sider theme="light" width={160}>
      <Menu
        mode="inline"
        items={menu}
        openKeys={keys}
        selectedKeys={[`${currentKay}`]}
        className="mt-5"
        onOpenChange={(openKeys) => {
          setKeys(openKeys);
        }}
      />
    </Sider>
  );
}

export default SiderCom;
