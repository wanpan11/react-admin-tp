import { useCallback, useMemo, useState } from "react";
import useSwr, { KeyedMutator, SWRConfiguration } from "swr";

interface PageInfo {
  pageNum: number;
  pageSize: number;
}

export const defaultPageInfo: PageInfo = {
  pageNum: 1,
  pageSize: 10,
};

interface UseSwrDataProps<P, R = any> {
  reqKey: string | any[];
  req: (params: P) => Promise<AxiosRes<R>>;

  defaultPage?: PageInfo;
  defaultSearch?: Partial<P>;
  params?: Partial<P>;
  paging?: boolean;

  ready?: boolean;
  swrConfig?: SWRConfiguration;
}

interface UseSwrData<R = any> {
  data?: R;
  error: any;
  isLoading: boolean;
  refresh: KeyedMutator<AxiosRes<R>>;
}
interface UseSwrPagIngDataPage<P, R = any> extends UseSwrData<R> {
  pageInfo: PageInfo;
  searchInfo: Partial<P>;
  onSearch: (value: AnyObject) => void;
  setPage: React.Dispatch<React.SetStateAction<PageInfo>>;
  setSearch: React.Dispatch<React.SetStateAction<Partial<P>>>;
}

export function useSwrData<R, P = any>(props: UseSwrDataProps<P, R> & { paging: true }): UseSwrPagIngDataPage<P, R>;
export function useSwrData<R, P = any>(props: UseSwrDataProps<P, R> & { paging?: false }): UseSwrData<R>;
/**
 * 使用 SWR（stale-while-revalidate）获取数据的自定义 Hook，支持可选的分页功能。
 *
 * @template R - 响应数据的类型。
 * @template P - 请求参数的类型。
 *
 * @param {UseSwrDataProps<P, R>} props - Hook 的属性。
 * @param {string | any[]} props.reqKey - SWR 请求的 key，用于缓存。
 * @param {(params: P) => Promise<R>} props.req - 用于获取数据的请求函数。
 * @param {P} [props.params] - 请求函数的参数。
 * @param {boolean} [props.ready=true] - 标志请求是否准备好发送。
 * @param {boolean} [props.paging=false] - 标志是否启用分页。
 * @param {Partial<P>} [props.defaultSearch={}] - 默认的搜索参数。
 * @param {PageInfo} [props.defaultPage=defaultPageInfo] - 默认的分页信息。
 * @param {SWRConfiguration} [props.swrConfig] - SWR 配置选项。
 *
 * @returns {UseSwrData<R> | UseSwrPagIngDataPage<P, R>} - 如果启用了分页，则返回 SWR 数据和分页信息。
 */
export function useSwrData<R, P = any>(props: UseSwrDataProps<P, R>): UseSwrData<R> | UseSwrPagIngDataPage<P, R> {
  const { reqKey, req, params, ready = true, paging = false, defaultSearch = {}, defaultPage = defaultPageInfo, swrConfig } = props;

  const [pageInfo, setPage] = useState(defaultPage);
  const [searchInfo, setSearch] = useState<Partial<P>>(defaultSearch);

  // 合并参数生成 key
  const key = useMemo(() => {
    let mergeParams: any[] | Record<string, any> | string = reqKey;

    if (paging) {
      mergeParams = { key: mergeParams, ...pageInfo, ...searchInfo, ...params };
    } else {
      if (typeof params === "object" && params !== null) {
        mergeParams = { key: mergeParams, ...params };
      } else {
        mergeParams = [mergeParams, params];
      }
    }

    return mergeParams;
  }, [pageInfo, paging, params, reqKey, searchInfo]);

  // 发送请求
  const { data, isLoading, error, mutate } = useSwr(
    ready ? key : null,
    (data: (P & { key?: string }) | P[]) => {
      // 判断请求参数类型
      if (Array.isArray(data)) {
        const sendData = [...data.slice(1)] as [P];
        return req(...sendData);
      } else {
        delete data.key;
        return req(data);
      }
    },
    swrConfig ? swrConfig : { revalidateOnFocus: false }
  );

  const onSearch = useCallback(
    (value: AnyObject) => {
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

  return {
    data: data?.data,
    error,
    isLoading,
    refresh: mutate,
  };
}
