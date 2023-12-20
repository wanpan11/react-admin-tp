import { memo, ReactElement, useEffect } from "react";
import { Button, Form, FormInstance } from "antd";
import { getFormElement } from "../tools";

export interface FormFilterProps {
  style?: any;
  colon?: boolean;
  layout?: "horizontal" | "vertical" | "inline";
  searchBtn?: null | ReactElement;
  submitNode?: ReactElement;

  submitBtn?: boolean;
  itemInfo: FormItem[];
  className?: string;
  labelCol?: number;
  wrapperCol?: number;
  initialValues?: { [key: string]: unknown };
  onOk?: (value: Record<string, string>) => void;
  onForm?: (form: FormInstance) => void;
  onValuesChange?: (changedValues: any, values: Record<string, string>) => void;
}

/**
 *
 * @description itemInfo change component will rerender
 */
const FormList = ({
  style,
  colon,
  layout,
  searchBtn,
  submitBtn = true,
  submitNode,
  itemInfo,
  className,
  labelCol,
  wrapperCol,
  initialValues,
  onOk,
  onForm,
  onValuesChange,
}: FormFilterProps) => {
  const [form] = Form.useForm();

  const onFinish = (value: Record<string, string>) => {
    onOk && onOk(value);
  };

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      itemInfo.forEach(e => {
        if (e.initialValue !== undefined && e.initialValue !== null) {
          form.setFieldValue(e.name, e.initialValue);
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemInfo, form]);

  useEffect(() => {
    onForm && onForm(form);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      <Form
        form={form}
        style={style}
        labelCol={labelCol ? { span: labelCol } : undefined}
        labelAlign="right"
        colon={colon}
        layout={layout}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
      >
        {itemInfo.map(e =>
          e.hide ? null : e.type === "blockNode" ? (
            <span key={typeof e.name === "string" ? e.name : e.name.join("_")}>{e.label}</span>
          ) : (
            <Form.Item
              key={typeof e.name === "string" ? e.name : e.name.join("_")}
              name={e.name}
              label={e.label}
              extra={e.extra}
              rules={[e.rule]}
              valuePropName={e.type === "switch" ? "checked" : "value"}
              wrapperCol={wrapperCol ? { span: e.type === "select" ? 8 : wrapperCol } : undefined}
              initialValue={e.type === "radio" ? e.options?.[0].value : undefined}
            >
              {getFormElement(e.type, e)}
            </Form.Item>
          )
        )}

        {searchBtn}

        {submitBtn ? (
          submitNode ? (
            submitNode
          ) : (
            <Button htmlType="submit" type="primary" block>
              保存
            </Button>
          )
        ) : null}
      </Form>
    </div>
  );
};

export default memo(FormList);
