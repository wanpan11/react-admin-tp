import { memo, useRef } from "react";
import { Button, FormInstance } from "antd";
import classNames from "classnames";
import FormList from "../FormList";

export interface FormFilterProps {
  reset?: boolean;
  compact?: boolean;
  loading?: boolean;
  className?: string;
  searchBtn?: boolean;

  filterInfo: FormItem[];
  initialValues?: Record<string, any>;
  onSubmit?: (value: Record<string, any>) => void;
  onForm?: (form: FormInstance) => void;
  onValuesChange?: (changedValues: any, values: Record<string, any>) => void;
}

const FormFilter = ({ searchBtn = true, filterInfo, initialValues, reset, loading, compact = false, className, onSubmit, onForm, onValuesChange }: FormFilterProps) => {
  const formInstance = useRef<FormInstance<any> | null>(null);

  const getForm = (form: FormInstance<any>) => {
    formInstance.current = form;
    onForm && onForm(form);
  };

  const getBtn = () => {
    return (
      <div className={compact ? "ml-10" : "absolute bottom-0 right-0"}>
        {reset ? <Button htmlType="reset">重置</Button> : null}

        <Button htmlType="submit" type="primary" loading={loading} className="ml-6">
          查询
        </Button>
      </div>
    );
  };

  return (
    <div className={classNames("box-border rounded-md bg-white p-6 dark:border dark:border-dark_border dark:bg-dark_bg", className)}>
      <FormList
        layout="inline"
        colon={false}
        submitBtn={false}
        className="relative"
        itemInfo={filterInfo}
        initialValues={initialValues}
        searchBtn={searchBtn ? getBtn() : null}
        onOk={onSubmit}
        onForm={getForm}
        onValuesChange={onValuesChange}
      />
    </div>
  );
};

export default memo(FormFilter);
