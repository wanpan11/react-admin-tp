import type { ResponseList } from "&src/types/api";
import type { SelectProps } from "antd";
import type { AnyObject, PagingSwrProps } from "use-swr-data/dist/interface";

import { Select, Spin } from "antd";
import debounce from "lodash/debounce";
import { useEffect, useMemo, useState } from "react";
import useSwrData from "use-swr-data";

interface LazyLoadSelectProps<P extends AnyObject, R extends ResponseList<any>> {
  value?: SelectProps["value"];
  fieldNames?: SelectProps["fieldNames"];
  searchKey: string;
  reqParams: PagingSwrProps<R, P>["params"];
  reqFunc: PagingSwrProps<R, P>["req"];
  onChange?: SelectProps["onChange"];
}

export default function LazyLoadSelect<P extends AnyObject, R extends ResponseList<any>>({ value, fieldNames, searchKey = "name", reqParams, reqFunc, onChange }: LazyLoadSelectProps<P, R>) {
  const [list, setList] = useState<any[]>([]);

  const { data, pageInfo, onSearch, setPage } = useSwrData({
    reqKey: reqFunc.name,
    req: reqFunc,
    params: reqParams,
    paging: true,
    defaultPage: { pageNum: 1, pageSize: 100 },
    swrConfig: {
      revalidateOnFocus: false,
      revalidateIfStale: true,
      revalidateOnMount: true,
      dedupingInterval: 0,
    },
  });
  useEffect(() => {
    if (!data)
      return;

    if (data?.pageNum > 1) {
      setList(draft => [...draft, ...data.list]);
    }
    else {
      setList(data.list);
    }
  }, [data]);

  const displayList = useMemo(() => {
    const newList = [...list];

    if (pageInfo.pageNum === data?.totalPage)
      return newList;

    newList.push({
      title: "loading",
      label: (
        <div className="flex justify-center">
          <Spin />
        </div>
      ),
      value: "loading",
    });

    return list;
  }, [list, data, pageInfo]);

  const onSearchData = debounce((value) => {
    onSearch({ [searchKey]: value } as PagingSwrProps["defaultSearch"]);
    setList([]);
  }, 500);
  const onloadData = debounce(() => {
    setPage(draft => ({ ...draft, pageNum: pageInfo.pageNum + 1 }));
  }, 200);

  return (
    <Select
      showSearch
      allowClear
      value={value}
      filterOption={false}
      options={displayList}
      fieldNames={fieldNames}
      onSearch={onSearchData}
      onPopupScroll={(e) => {
        const container = e.target as HTMLDivElement;
        const scrollTop = container?.scrollTop;
        const containerHeight = (container.firstChild as HTMLDivElement)?.clientHeight;

        if (data && containerHeight - scrollTop < 300 && data.totalPage > pageInfo.pageNum)
          onloadData();
      }}
      onChange={(value) => {
        onSearch({ [searchKey]: "" } as PagingSwrProps["defaultSearch"]);
        onChange?.(value);
      }}
    />
  );
}
