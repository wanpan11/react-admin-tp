import type { ResponseList } from "&src/types/api";
import type { PagingSwrProps } from "@wanp/use-swr-data";
import type { SelectProps } from "antd";
import useSwrData from "@wanp/use-swr-data";
import { Select, Spin } from "antd";
import debounce from "lodash/debounce";
import { useEffect, useMemo, useState } from "react";

interface LazyLoadSelectProps<P extends AnyObject, R extends ResponseList<any>> extends Pick<SelectProps, "fieldNames" | "onChange" | "value" | "disabled"> {
  reqKey: string;
  reqFunc: PagingSwrProps<R, P>["req"];
  reqParams?: PagingSwrProps<R, P>["params"];
  searchKey?: string;
}

export default function LazyLoadSelect<P extends AnyObject, R extends ResponseList<any>>(props: LazyLoadSelectProps<P, R>) {
  const { reqKey, reqFunc, reqParams, searchKey, onChange, ...reset } = props;
  const [list, setList] = useState<any[]>([]);

  const { data, pageInfo, onSearch, setPage } = useSwrData({
    reqKey,
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

    return newList;
  }, [list, data, pageInfo]);

  const onSearchData = debounce((value) => {
    if (!searchKey)
      return;

    onSearch({ [searchKey]: value } as PagingSwrProps["defaultSearch"]);
    setList([]);
  }, 500);
  const onloadData = debounce(() => {
    setPage(draft => ({ ...draft, pageNum: pageInfo.pageNum + 1 }));
  }, 200);

  return (
    <Select
      allowClear
      filterOption={false}
      options={displayList}
      showSearch={!!searchKey}
      onSearch={searchKey ? onSearchData : undefined}
      onPopupScroll={(e) => {
        const container = e.target as HTMLDivElement;
        const scrollTop = container?.scrollTop;
        const containerHeight = (container.firstChild as HTMLDivElement)?.clientHeight;

        if (data && containerHeight - scrollTop < 300 && data.totalPage > pageInfo.pageNum)
          onloadData();
      }}
      onChange={(value) => {
        onSearch({});
        onChange?.(value);
      }}
      {...reset}
    />
  );
}
