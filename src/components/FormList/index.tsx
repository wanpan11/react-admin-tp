import { memo, ReactElement, useEffect } from "react";
import { Button, Form, FormInstance, FormProps } from "antd";

import { getFormElement } from "../tools";

export interface FormListProps {
  style?: any;
  colon?: boolean;
  className?: string;
  layout?: FormProps["layout"];
  labelCol?: number;
  wrapperCol?: number;
  form?: FormProps["form"];

  // 搜索
  searchBtn?: null | ReactElement;
  // 提交
  submitBtn?: boolean;
  submitNode?: ReactElement;

  itemInfo: FormItem[];
  initialValues?: Record<string, any>;
  onOk?: FormProps["onFinish"];
  onForm?: (form: FormInstance) => void;
  onValuesChange?: FormProps["onValuesChange"];
}

/**
 *
 * @description extend antd Form
 */
const FormList = (props: FormListProps) => {
  const {
    style,
    colon,
    form,
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
  } = props;

  const [insideForm] = Form.useForm();

  useEffect(() => {
    const realForm = form ? form : insideForm;
    onForm?.(realForm);

    if (initialValues) {
      realForm.setFieldsValue(initialValues);
    } else {
      itemInfo.forEach(e => {
        if (e.initialValue !== undefined && e.initialValue !== null) {
          realForm.setFieldValue(e.name, e.initialValue);
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      <Form
        form={form ? form : insideForm}
        style={style}
        colon={colon}
        layout={layout}
        labelAlign="right"
        labelCol={labelCol ? { span: labelCol } : undefined}
        wrapperCol={wrapperCol ? { span: wrapperCol } : undefined}
        onFinish={onOk}
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
              initialValue={e.type === "radio" ? e.options?.[0].value : e.type === "switch" ? true : undefined}
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
