import { useMemo } from "react";
import { Checkbox } from "antd";
import classNames from "classnames";

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
    if (!selectKeys.length) return [];

    const strKeys = selectKeys.map(e => e.toString());
    const tempArr: string[] = [];

    const addKeys = (arr: TreeProps["treeData"], parentPath: string) => {
      arr.forEach((ele: any) => {
        const next = strKeys.indexOf(`${ele.id}`);
        if (!~next) return;

        const newPath = `${parentPath ? parentPath + "_" : ""}${ele.id}`;

        if (ele.children.length) {
          tempArr.push(newPath);
          addKeys(ele.children, newPath);
        } else {
          tempArr.push(newPath);
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
    const getEle = (roleConf: TreeProps["treeData"], deep: number, parentId = "") => {
      return roleConf.map(conf => {
        const newPath = parentId ? `${parentId}_${conf.id}` : `${conf.id}`;

        const idx = mapKeys.indexOf(newPath);
        const parentArr = mapKeys.filter(str => {
          return str.indexOf(newPath) === 0 ? true : false;
        });

        if (conf.children.length) {
          return (
            <div key={conf.id} className={classNames(deep === 0 ? "border-b border-neutral-200 pb-3 pt-3" : "pb-2 pt-2")}>
              <div>
                <Checkbox
                  checked={parentArr.length > 0}
                  style={{
                    color: `rgba(0, 0, 0, ${0.2 * deep + 0.4})`,
                  }}
                  onChange={evn => {
                    const check = evn.target.checked;
                    const keys: string[] = [];

                    if (check) {
                      // 添加子项
                      const addKeys = (arr: any, newPath: string) => {
                        arr.forEach((element: any) => {
                          if (element.children.length) {
                            addKeys(element.children, `${newPath}_${element.id}`);
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

              <div className="ml-8">{getEle(conf.children, deep + 1, newPath)}</div>
            </div>
          );
        } else {
          return (
            <div key={conf.id} className={classNames(deep === 0 ? "block border-b border-neutral-200 pb-3 pt-3" : "inline-block pb-2 pr-5 pt-2")}>
              <Checkbox
                checked={idx > -1 ? true : false}
                style={{
                  color: conf.children.length ? `rgba(0, 0, 0, ${0.2 * deep + 0.4})` : `rgba(0, 0, 0, 0.8)`,
                }}
                onChange={evn => {
                  const check = evn.target.checked;

                  if (check) {
                    mapKeys.push(newPath);
                  } else {
                    // 保留父级
                    const currentKeyArr = mapKeys[idx].split("_");
                    currentKeyArr.pop();

                    mapKeys.splice(idx, 1, currentKeyArr.join("_"));
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

export default Tree;
