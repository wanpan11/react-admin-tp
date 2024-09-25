import { memo } from "react";
import { Button } from "antd";
import classNames from "classnames";

import FormList, { FormListProps } from "../FormList";

export interface FormFilterProps extends Pick<FormListProps, "form" | "initialValues" | "onOk" | "onForm" | "onValuesChange"> {
  className?: string;
  filterInfo: FormItem[];
  reset?: boolean;
  loading?: boolean;
  compact?: boolean;
  searchBtn?: boolean;
}

const FormFilter = (props: FormFilterProps) => {
  const { className, filterInfo, reset, loading, compact = false, searchBtn = true, ...resetProps } = props;

  const getBtn = () => {
    return (
      <div className={compact ? "ml-10" : "absolute bottom-0 right-0"}>
        {reset ? <Button htmlType="reset">重置</Button> : null}

        <Button className="ml-6" htmlType="submit" type="primary" loading={loading}>
          查询
        </Button>
      </div>
    );
  };

  return (
    <div className={classNames("box-border rounded-md bg-white p-6 dark:border dark:border-dark_border dark:bg-dark_bg", className)}>
      <FormList colon={false} layout="inline" submitBtn={false} className="relative" itemInfo={filterInfo} searchBtn={searchBtn ? getBtn() : null} {...resetProps} />
    </div>
  );
};

export default memo(FormFilter);
