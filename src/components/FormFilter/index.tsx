import type { FormInstance } from "antd";
import type { FormListProps } from "../FormList";
import { Button, Card } from "antd";
import { memo, useRef } from "react";
import FormList from "../FormList";

export interface FormFilterProps extends Pick<FormListProps, "form" | "onOk" | "onForm" | "onValuesChange" | "initialValues" | "stageValues"> {
  className?: string;
  filterInfo: FormItem[];
  reset?: boolean;
  loading?: boolean;
  compact?: boolean;
  searchBtn?: boolean;
  onRefresh?: () => void;
}

function FormFilter(props: FormFilterProps) {
  const { className, filterInfo, reset, loading, compact = false, searchBtn = true, onForm, onRefresh, ...resetProps } = props;

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
    <Card classNames={{ body: className || "py-4" }}>
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
    </Card>
  );
}

export default memo(FormFilter);
