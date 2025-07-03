import type { Key, KeyedMutator, SWRConfiguration } from "swr";
import { DEFAULT_PAGE } from "&src/config";
import { useCallback, useMemo, useState } from "react";
import useSwr from "swr";

export type SimpleKey = string | any[];
export type SearchType<P> = P extends object ? Partial<P> : P;
interface PageType {
  pageNum: number;
  pageSize: number;
}

export interface UseSwrDataProps<P = any, R = any> {
  reqKey: SimpleKey; // 请求的 key 可以是字符串或数组
  req: (params: P) => Promise<AxiosRes<R>>; // 请求函数 返回 Promise<AxiosRes<R>>
  ready?: boolean; // 是否准备就绪，默认为 true
  paging?: boolean; // 是否分页，默认为 false
  params?: SearchType<P>; // 受控请求参数 受控
  defaultPage?: PageType; // 默认分页信息 非受控
  defaultSearch?: SearchType<P>; // 默认搜索信息 非受控
  swrConfig?: SWRConfiguration; // swr 配置项
}

interface UseSwrData<R = any> {
  data?: R;
  error: any;
  isLoading: boolean;
  refresh: KeyedMutator<AxiosRes<R>>;
}
interface UseSwrPagIngDataPage<P = any, R = any> extends UseSwrData<R> {
  pageInfo: PageType;
  searchInfo?: SearchType<P>;
  onSearch: (value: SearchType<P>) => void;
  setPage: React.Dispatch<React.SetStateAction<PageType>>;
  setSearch: React.Dispatch<React.SetStateAction<SearchType<P> | undefined>>;
}

export function useSwrData<R = any, P = any>(props: UseSwrDataProps<P, R> & { paging: true }): UseSwrPagIngDataPage<P, R>;
export function useSwrData<R = any, P = any>(props: UseSwrDataProps<P, R> & { paging?: false }): UseSwrData<R>;
export function useSwrData<R = any, P = any>(props: UseSwrDataProps<P, R>): UseSwrData<R> | UseSwrPagIngDataPage<P, R> {
  const { reqKey, req, params, ready = true, paging = false, defaultSearch, defaultPage = DEFAULT_PAGE, swrConfig } = props;

  const [pageInfo, setPage] = useState(defaultPage);
  const [searchInfo, setSearch] = useState(defaultSearch);

  const mergeKey: Key = useMemo(() => {
    if (ready === false) {
      return null;
    }

    if (Array.isArray(reqKey)) {
      if (paging) {
        return [reqKey, params, pageInfo, searchInfo];
      }
      else {
        return [reqKey, params];
      }
    }
    else {
      if (paging) {
        return { key: reqKey, ...params, ...pageInfo, ...searchInfo };
      }
      else {
        return { key: reqKey, ...params, ...pageInfo, ...searchInfo };
      }
    }
  }, [pageInfo, paging, params, ready, reqKey, searchInfo]);

  const { data, isLoading, error, mutate } = useSwr(
    mergeKey,
    async (data: (P & { key?: SimpleKey }) | [SimpleKey, P]) => {
      if (Array.isArray(data)) {
        let sendData = {};
        const paramsList = data.slice(1) as [P];
        paramsList.forEach((item) => {
          if (typeof item === "object" && item) {
            sendData = { ...sendData, ...item };
          }
        });

        return req(sendData as P);
      }
      else {
        delete data.key;
        return req(data);
      }
    },
    swrConfig || { revalidateOnFocus: false }
  );

  const onSearch = useCallback(
    (value: SearchType<P>) => {
      setSearch(value);
      setPage(defaultPage);
    },
    [defaultPage]
  );

  if (paging) {
    return {
      data: data?.data,
      error,
      isLoading,
      refresh: mutate,
      pageInfo,
      searchInfo,
      onSearch,
      setPage,
      setSearch,
    };
  }
  else {
    return {
      data: data?.data,
      error,
      isLoading,
      refresh: mutate,
    };
  }
}
