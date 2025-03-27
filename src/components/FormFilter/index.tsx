import { memo, useRef } from "react";
import { Button, FormInstance } from "antd";
import classNames from "classnames";

import FormList, { FormListProps } from "../FormList";

export interface FormFilterProps extends Pick<FormListProps, "form" | "onOk" | "onForm" | "onValuesChange" | "initialValues" | "stageValues"> {
  className?: string;
  filterInfo: FormItem[];
  reset?: boolean;
  loading?: boolean;
  compact?: boolean;
  searchBtn?: boolean;
}

const FormFilter = (props: FormFilterProps) => {
  const { className, filterInfo, reset, loading, compact = false, searchBtn = true, onForm, ...resetProps } = props;

  const formInstance = useRef<FormInstance<any> | null>(null);

  const getForm = (form: FormInstance<any>) => {
    formInstance.current = form;
    onForm?.(form);
  };

  const getBtn = () => (
    <div className={compact ? "ml-10" : "absolute bottom-0 right-0"}>
      {reset ? <Button htmlType="reset">重置</Button> : null}

      <Button className="ml-6" htmlType="submit" type="primary" loading={loading}>
        查询
      </Button>
    </div>
  );

  return (
    <div className={classNames("box-border rounded-md bg-white p-6", className)}>
      <FormList
        colon={false}
        layout="inline"
        submitBtn={false}
        className="relative"
        itemInfo={filterInfo}
        searchBtn={searchBtn ? getBtn() : null}
        onForm={getForm}
        {...resetProps}
      />
    </div>
  );
};

export default memo(FormFilter);
