import { Modal, Form, FormInstance } from "antd";
import { memo, useEffect } from "react";
import { getFormElement } from "@src/components/tools";

interface FormModalProps {
  open?: boolean;
  title?: string;
  editInfo: FormItem[];
  noFooter?: boolean;
  maskClosable?: boolean;
  initialValues?: { [key: string]: unknown };
  onOk?: (value: { [key: string]: unknown }) => void;
  onForm?: (form: FormInstance) => void;
  onCancel?: () => void;
  onValuesChange?: (value: { [key: string]: unknown }) => void;
}

const FormModal = ({ open, title, editInfo, noFooter, maskClosable = true, initialValues, onOk, onForm, onCancel, onValuesChange }: FormModalProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open || !editInfo.length) return;

    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      editInfo.forEach(e => {
        if (e.initialValue) {
          form.setFieldValue(e.name, e.initialValue);
        }
      });
    }
  }, [open, initialValues, form, editInfo]);

  useEffect(() => {
    onForm && onForm(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      open={open}
      title={title}
      okText="确定"
      cancelText="取消"
      width={880}
      closable={noFooter ? true : false}
      destroyOnClose
      maskClosable={maskClosable}
      onCancel={onCancel}
      onOk={() => {
        form.submit();
      }}
      afterClose={() => {
        form.resetFields();
      }}
      footer={noFooter ? null : undefined}
    >
      <div className="pt-6">
        <Form form={form} labelCol={{ span: 5 }} labelAlign="right" onFinish={onOk} onValuesChange={onValuesChange}>
          {editInfo.map(e =>
            e.hide ? null : e.type === "blockNode" ? (
              <span key={typeof e.name === "string" ? e.name : e.name.join("_")}>{e.label}</span>
            ) : (
              <Form.Item
                key={typeof e.name === "string" ? e.name : e.name.join("_")}
                name={e.name}
                label={e.label}
                rules={[e.rule]}
                valuePropName={e.type === "switch" ? "checked" : "value"}
                wrapperCol={{ span: e.type === "select" ? 8 : 12 }}
                initialValue={e.type === "radio" ? e.options?.[0].value : undefined}
              >
                {getFormElement(e.type, e)}
              </Form.Item>
            )
          )}
        </Form>
      </div>
    </Modal>
  );
};

export default memo(FormModal);
