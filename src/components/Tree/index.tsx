import { memo, useMemo } from "react";
import { Checkbox } from "antd";

type TreeProps = {
  treeData: {
    id: number | string;
    name: string;
    children: TreeProps["treeData"];
  }[];
  selectKeys: (number | string)[];
  onChange: (keys: string[]) => void;
};

const Tree = ({ treeData, selectKeys = [], onChange }: TreeProps) => {
  const mapKeys = useMemo(() => {
    if (selectKeys.length < 1) return [];

    const strKeys = selectKeys.map(e => e.toString());
    const tempArr: string[] = [];

    const addKeys = (arr: TreeProps["treeData"], newPath: string) => {
      arr.forEach((ele: any) => {
        const next = strKeys.indexOf(`${ele.id}`);
        if (!~next) return;

        if (ele.children.length) {
          addKeys(ele.children, `${newPath ? newPath + "_" : ""}${ele.id}`);
        } else {
          tempArr.push(`${newPath ? newPath + "_" : ""}${ele.id}`);
        }
      });
    };
    addKeys(treeData, "");

    return tempArr;
  }, [selectKeys, treeData]);

  const change = (arr: string[]) => {
    let tempArr: string[] = [];

    arr.forEach(keys => {
      tempArr = [...tempArr, ...keys.split("_")];
    });

    onChange([...new Set<string>(tempArr)]);
  };

  return useMemo(() => {
    const getEle = (
      roleConf: TreeProps["treeData"],
      deep: number,
      parentId = ""
    ) => {
      return roleConf.map(conf => {
        const newPath = parentId ? `${parentId}_${conf.id}` : `${conf.id}`;

        const idx = mapKeys.indexOf(newPath);
        const parentArr = mapKeys.filter(str => {
          return str.indexOf(newPath) === 0 ? true : false;
        });

        if (conf.children.length) {
          return (
            <div
              key={conf.id}
              style={{
                padding: deep === 0 ? "12px 0" : "8px 0",
                borderBottom:
                  deep === 0 ? "1px solid rgba(0, 0, 0, 0.08)" : "0",
              }}
            >
              <div>
                <Checkbox
                  style={{
                    color: `rgba(0, 0, 0, ${0.2 * deep + 0.4})`,
                  }}
                  checked={parentArr.length > 0}
                  onChange={evn => {
                    const check = evn.target.checked;
                    const keys: string[] = [];

                    if (check) {
                      // 添加子项
                      const addKeys = (arr: any, newPath: string) => {
                        arr.forEach((element: any) => {
                          if (element.children.length) {
                            addKeys(
                              element.children,
                              `${newPath}_${element.id}`
                            );
                          } else {
                            keys.push(`${newPath}_${element.id}`);
                          }
                        });
                      };
                      addKeys(conf.children, newPath);
                    } else {
                      // 删除子项
                      mapKeys.forEach((key, idx) => {
                        const match = key.indexOf(newPath);
                        if (match === 0) {
                          mapKeys.splice(idx, 1, "");
                        }
                      });
                    }

                    change([...mapKeys.filter(e => !!e), ...keys]);
                  }}
                >
                  {conf.name}
                </Checkbox>
              </div>

              <div className=" ml-6">
                {getEle(conf.children, deep + 1, newPath)}
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={conf.id}
              style={{
                display: deep === 0 ? "block" : "inline-block",
                padding: deep === 0 ? "12px 0" : "8px 20px 8px 0",
                borderBottom:
                  deep === 0 ? "1px solid rgba(0, 0, 0, 0.08)" : "0",
              }}
            >
              <Checkbox
                style={{
                  color: conf.children.length
                    ? `rgba(0, 0, 0, ${0.2 * deep + 0.4})`
                    : `rgba(0, 0, 0, 0.8)`,
                }}
                checked={idx > -1 ? true : false}
                onChange={evn => {
                  const check = evn.target.checked;

                  if (check) {
                    mapKeys.push(newPath);
                  } else {
                    mapKeys.splice(idx, 1);
                  }

                  change([...mapKeys]);
                }}
              >
                {conf.name}
              </Checkbox>
            </div>
          );
        }
      });
    };

    return <div>{getEle(treeData, 0)}</div>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapKeys, treeData]);
};

export default memo(Tree);
