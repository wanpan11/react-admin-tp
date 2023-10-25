/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect } from "react";
import { Form, Button, FormInstance } from "antd";
import { getFormElement } from "@src/components/tools";
import classNames from "classnames";

export interface FormFilterProps {
  searchBtn?: boolean;
  filterInfo: FormItem[];
  initialValues?: { [key: string]: unknown };
  reset?: boolean;
  loading?: boolean;
  compact?: boolean;
  className?: string;
  onSubmit?: (value: Record<string, string>) => void;
  onForm?: (form: FormInstance) => void;
  onValuesChange?: (changedValues: any, values: Record<string, string>) => void;
}

const FormFilter = ({ searchBtn = true, filterInfo, initialValues, reset, loading, compact = false, className, onSubmit, onForm, onValuesChange }: FormFilterProps) => {
  const [form] = Form.useForm();

  const onFinish = (value: Record<string, string>) => {
    onSubmit && onSubmit(value);
  };

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      filterInfo.forEach(e => {
        if (e.initialValue !== undefined && e.initialValue !== null) {
          form.setFieldValue(e.name, e.initialValue);
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterInfo, form]);

  useEffect(() => {
    onForm && onForm(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBtn = () => {
    return (
      <div className={compact ? "" : "absolute bottom-0 right-10"}>
        {reset ? <Button htmlType="reset">清空</Button> : null}

        <Button htmlType="submit" type="primary" loading={loading} className="ml-6">
          查询
        </Button>
      </div>
    );
  };

  return (
    <div className={classNames("box-border rounded-md bg-white p-6", className)}>
      <Form form={form} colon={false} layout="inline" style={{ paddingRight: 200, position: "relative" }} onFinish={onFinish} onValuesChange={onValuesChange}>
        {filterInfo.map(e =>
          e.hide ? null : e.type === "blockNode" ? (
            <span key={typeof e.name === "string" ? e.name : e.name.join("_")}>{e.label}</span>
          ) : (
            <Form.Item
              key={typeof e.name === "string" ? e.name : e.name.join("_")}
              name={e.name}
              label={e.label}
              valuePropName={e.type === "switch" ? "checked" : "value"}
            >
              {getFormElement(e.type, e)}
            </Form.Item>
          )
        )}

        {searchBtn && getBtn()}
      </Form>
    </div>
  );
};

export default memo(FormFilter);
