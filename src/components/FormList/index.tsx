import { memo, ReactElement, useEffect } from "react";
import { Button, Form, FormInstance, FormProps } from "antd";

import { getFormElement } from "../tools";

export interface FormListProps extends Pick<FormProps, "form" | "colon" | "className" | "style" | "layout" | "labelAlign" | "onValuesChange"> {
  labelCol?: number;
  wrapperCol?: number;

  // 搜索
  searchBtn?: null | ReactElement;
  // 提交
  submitBtn?: boolean;
  submitNode?: ReactElement;

  itemInfo: FormItem[];
  initialValues?: FormProps["initialValues"];
  onOk?: FormProps["onFinish"];
  onForm?: (form: FormInstance) => void;
}

/**
 *
 * @description extend antd Form
 */
const FormList = (props: FormListProps) => {
  const {
    form,
    itemInfo,
    labelCol,
    wrapperCol,
    initialValues,

    searchBtn,
    submitBtn = true,
    submitNode,

    onOk,
    onForm,
    ...restProps
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
    <Form
      form={form ? form : insideForm}
      labelCol={labelCol ? { span: labelCol } : undefined}
      wrapperCol={wrapperCol ? { span: wrapperCol } : undefined}
      onFinish={onOk}
      {...restProps}
    >
      {itemInfo.map(e =>
        e.hide ? null : e.type === "blockNode" ? (
          <span key={typeof e.name === "string" ? e.name : e.name.join("_")}>{e.label}</span>
        ) : (
          <Form.Item
            key={typeof e.name === "string" ? e.name : e.name.join("_")}
            name={e.name ? e.name : undefined}
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
  );
};

export default memo(FormList);
