import { memo, ReactElement, useEffect, useMemo } from "react";
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
  /**
   * @description 只在初始化时生效
   */
  initialValues?: FormProps["initialValues"];
  /**
   * @description 该值变化后会触发表单值更新
   */
  stageValues?: FormListProps["initialValues"];
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
    stageValues,
    initialValues,

    searchBtn,
    submitBtn = true,
    submitNode,

    onOk,
    onForm,
    ...restProps
  } = props;

  const [insideForm] = Form.useForm();
  const realForm = form ? form : insideForm;

  // 只在初始化时生效
  useEffect(() => {
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

  // 该值变化后会触发表单值更新
  useEffect(() => {
    if (stageValues && realForm) {
      realForm.setFieldsValue(stageValues);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(stageValues)]);

  /* ======================= render ========================= */
  const submitBtnNode = useMemo(() => {
    if (submitBtn) {
      if (submitNode) {
        return submitNode;
      } else {
        return (
          <Button htmlType="submit" type="primary" block>
            保存
          </Button>
        );
      }
    } else {
      return null;
    }
  }, [submitBtn, submitNode]);

  return (
    <Form form={realForm} labelCol={labelCol ? { span: labelCol } : undefined} wrapperCol={wrapperCol ? { span: wrapperCol } : undefined} onFinish={onOk} {...restProps}>
      {itemInfo.map((e, idx) => {
        if (e.hide) {
          return null;
        }

        if (e.type === "blockNode") {
          return <span key={typeof e.name === "string" ? e.name || idx : e.name.join("_")}>{e.label}</span>;
        }

        return (
          <Form.Item
            label={e.label}
            extra={e.extra}
            rules={[e.rule]}
            hidden={!(e.visible ?? true)}
            name={e.name ? e.name : undefined}
            valuePropName={e.type === "switch" ? "checked" : "value"}
            key={typeof e.name === "string" ? e.name || idx : e.name.join("_")}
            initialValue={e.type === "radio" ? e.options?.[0].value : e.type === "switch" ? true : undefined}
          >
            {getFormElement(e.type, e)}
          </Form.Item>
        );
      })}

      {searchBtn}

      {submitBtnNode}
    </Form>
  );
};

export default memo(FormList);
