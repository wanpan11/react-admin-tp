/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect } from "react";
import { Form, Button } from "antd";
import { getFormElement } from "@src/components/tools";

export interface FormFilterProps {
  filterInfo: FormItem[];
  initialValues?: { [key: string]: unknown };
  reset?: boolean;
  loading?: boolean;
  onSubmit?: (value: Record<string, string>) => void;
  compact?: boolean;
}

const FormFilter = ({
  filterInfo,
  initialValues,
  onSubmit,
  reset,
  loading,
  compact = false,
}: FormFilterProps) => {
  const [form] = Form.useForm();

  const onFinish = (value: Record<string, string>) => {
    onSubmit && onSubmit(value);
  };

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBtn = () => {
    return (
      <div className={compact ? "" : "absolute bottom-0 right-6"}>
        {reset ? <Button htmlType="reset">重置</Button> : null}

        <Button
          type="primary"
          className="ml-6"
          htmlType="submit"
          loading={loading}
        >
          查询
        </Button>
      </div>
    );
  };

  return (
    <div className="rounded- box-border rounded-lg bg-white p-6">
      <Form
        form={form}
        colon={false}
        layout="inline"
        onFinish={onFinish}
        className="relative pr-52"
      >
        {filterInfo.length > 0
          ? filterInfo.map(e => {
              return (
                <Form.Item key={e.name} name={e.name} label={e.label}>
                  {getFormElement(e.type, e)}
                </Form.Item>
              );
            })
          : null}

        {getBtn()}
      </Form>
    </div>
  );
};

export default memo(FormFilter);
