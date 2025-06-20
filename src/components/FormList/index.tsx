import type { FormInstance, FormProps } from "antd";
import type { ReactElement } from "react";
import { Button, Form } from "antd";
import { memo, useEffect, useMemo } from "react";

import { getFormElement } from "../tools";

export interface FormListProps extends Omit<FormProps, "labelCol" | "wrapperCol"> {
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
function FormList(props: FormListProps) {
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
  const realForm = form || insideForm;

  // 只在初始化时生效
  useEffect(() => {
    onForm?.(realForm);

    if (initialValues) {
      realForm.setFieldsValue(initialValues);
    }
    else {
      itemInfo.forEach((e) => {
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
      realForm.resetFields();
      realForm.setFieldsValue(stageValues);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(stageValues)]);

  /* ======================= render ========================= */
  const submitBtnNode = useMemo(() => {
    if (submitBtn) {
      if (submitNode) {
        return submitNode;
      }
      else {
        return (
          <Button htmlType="submit" type="primary" block>
            保存
          </Button>
        );
      }
    }
    else {
      return null;
    }
  }, [submitBtn, submitNode]);

  return (
    <Form form={realForm} labelCol={labelCol ? { span: labelCol } : undefined} wrapperCol={wrapperCol ? { span: wrapperCol } : undefined} onFinish={onOk} {...restProps}>
      {itemInfo.map((e, idx) => {
        const key = Array.isArray(e.name) ? e.name.join("_") : e.name || idx;

        if (e.hide) {
          return null;
        }

        if (e.type === "blockNode") {
          return <span key={key}>{e.label}</span>;
        }

        return (
          <Form.Item
            key={key}
            name={e.name}
            label={e.label}
            extra={e.extra}
            hidden={!(e.visible ?? true)}
            rules={e.rule ? [e.rule] : undefined}
            valuePropName={e.valuePropName ? e.valuePropName : e.type === "switch" ? "checked" : "value"}
            initialValue={e.type === "radio" ? e.options?.[0].value : e.type === "switch" ? true : undefined}
            {...e.formItemProps}
          >
            {getFormElement(e.type, e)}
          </Form.Item>
        );
      })}

      {searchBtn}

      {submitBtnNode}
    </Form>
  );
}

export default memo(FormList);
