import { Modal, FormInstance } from "antd";
import { memo, useRef } from "react";
import FormList from "../FormList";

interface FormModalProps {
  open?: boolean;
  title?: string;
  noFooter?: boolean;
  maskClosable?: boolean;
  onCancel?: () => void;

  editInfo: FormItem[];
  wrapperCol?: number;
  initialValues?: { [key: string]: unknown };
  onOk?: (value: { [key: string]: unknown }) => void;
  onForm?: (form: FormInstance) => void;
  onValuesChange?: (value: { [key: string]: unknown }) => void;
}

const FormModal = ({ open, title, noFooter, maskClosable = true, onCancel, editInfo, wrapperCol = 12, initialValues, onOk, onForm, onValuesChange }: FormModalProps) => {
  const formInstance = useRef<FormInstance<any> | null>(null);

  const getForm = (form: FormInstance<any>) => {
    formInstance.current = form;
    onForm && onForm(form);
  };

  return (
    <Modal
      open={open}
      title={title}
      okText="确定"
      cancelText="取消"
      width={880}
      destroyOnClose
      closable={noFooter ? true : false}
      maskClosable={maskClosable}
      onCancel={onCancel}
      onOk={() => {
        formInstance.current && formInstance.current.submit();
      }}
      afterClose={() => {
        formInstance.current && formInstance.current.resetFields();
      }}
      footer={noFooter ? null : undefined}
    >
      <div className="pt-6">
        <FormList
          submitBtn={false}
          itemInfo={editInfo}
          labelCol={5}
          wrapperCol={wrapperCol}
          initialValues={initialValues}
          onOk={onOk}
          onForm={getForm}
          onValuesChange={onValuesChange}
        />
      </div>
    </Modal>
  );
};

export default memo(FormModal);
