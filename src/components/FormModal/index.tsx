import { memo } from "react";
import lessStyle from "./index.module.less";
import { Modal, Form } from "antd";
import type { FormItemInfo } from "@src/types/index";
import { getFormElement } from "../tools";

interface FormModalProps {
  open: boolean;
  title: string;
  editInfo: FormItemInfo[];
  onCancel: () => void;
  onOk: (value: { [key: string]: unknown }) => void;
}

const FormModal = ({
  open,
  title,
  editInfo,
  onCancel,
  onOk,
}: FormModalProps) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title={title}
      okText="确定"
      cancelText="取消"
      width={800}
      closable={false}
      destroyOnClose
      maskClosable={false}
      onCancel={onCancel}
      onOk={() => {
        form.submit();
      }}
    >
      <div className={lessStyle.content}>
        <Form
          form={form}
          labelCol={{ span: 5 }}
          labelAlign="left"
          onFinish={onOk}
          // validateTrigger="onSubmit"
        >
          {editInfo.map(e => (
            <Form.Item
              key={e.name}
              name={e.name}
              label={e.label}
              rules={e.rule ? [e.rule] : undefined}
            >
              {getFormElement(e.type, e)}
            </Form.Item>
          ))}
        </Form>
      </div>
    </Modal>
  );
};

export default memo(FormModal);
