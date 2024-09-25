import { memo, useEffect, useRef } from "react";
import { Button, FormInstance } from "antd";
import classNames from "classnames";

import FormList, { FormListProps } from "../FormList";

export interface FormFilterProps extends Pick<FormListProps, "form" | "onOk" | "onForm" | "onValuesChange"> {
  className?: string;
  filterInfo: FormItem[];
  reset?: boolean;
  loading?: boolean;
  compact?: boolean;
  searchBtn?: boolean;
  /**
   * @description 用于阶段性设置表单值
   */
  stageValues?: FormListProps["initialValues"];
}

const FormFilter = (props: FormFilterProps) => {
  const { className, filterInfo, reset, loading, compact = false, searchBtn = true, stageValues, onForm, ...resetProps } = props;

  const formInstance = useRef<FormInstance<any> | null>(null);

  const getForm = (form: FormInstance<any>) => {
    formInstance.current = form;
    onForm?.(form);
  };

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

  useEffect(() => {
    if (stageValues && formInstance.current) {
      formInstance.current.setFieldsValue(stageValues);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(stageValues)]);

  return (
    <div className={classNames("box-border rounded-md bg-white p-6 dark:border dark:border-dark_border dark:bg-dark_bg", className)}>
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
