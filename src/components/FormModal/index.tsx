import { memo, useEffect } from "react";
import { Modal, Form } from "antd";
import { getFormElement } from "@src/components/tools";

interface FormModalProps {
  open?: boolean;
  title?: string;
  editInfo: FormItem[];
  initialValues?: { [key: string]: unknown };
  onCancel?: () => void;
  onOk?: (value: { [key: string]: unknown }) => void;
  noFooter?: boolean;
}

const FormModal = ({
  open,
  title,
  editInfo,
  initialValues,
  onCancel,
  onOk,
  noFooter,
}: FormModalProps) => {
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

  return (
    <Modal
      open={open}
      title={title}
      okText="确定"
      cancelText="取消"
      width={800}
      closable={noFooter ? true : false}
      destroyOnClose
      maskClosable={false}
      onCancel={onCancel}
      onOk={() => {
        form.submit();
      }}
      afterClose={() => {
        form.resetFields();
      }}
      footer={noFooter ? null : undefined}
    >
      <div className="min-h-[300px] p-8 pl-0 pr-0">
        <Form
          form={form}
          labelCol={{ span: 5 }}
          labelAlign="right"
          onFinish={onOk}
        >
          {editInfo.map(e =>
            e.hide ? null : e.type === "blockNode" ? (
              <span key={e.name}> {e.label} </span>
            ) : (
              <Form.Item
                wrapperCol={{
                  span: e.type === "select" ? 8 : 12,
                }}
                key={e.name}
                name={e.name}
                label={e.label}
                rules={[e.rule]}
                extra={e.extra}
                initialValue={
                  e.type === "radio" ? e.options?.[0].value : undefined
                }
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
