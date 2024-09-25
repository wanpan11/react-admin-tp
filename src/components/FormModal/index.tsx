import { memo, useRef } from "react";
import { FormInstance, Modal } from "antd";

import FormList, { FormListProps } from "../FormList";

interface FormModalProps
  extends Pick<FormListProps, "form" | "itemInfo" | "wrapperCol" | "labelCol" | "className" | "initialValues" | "onOk" | "onForm" | "onValuesChange"> {
  open?: boolean;
  title?: string;
  noFooter?: boolean;
  maskClosable?: boolean;
  onCancel?: () => void;
}

const FormModal = (props: FormModalProps) => {
  const { open, title, noFooter, maskClosable = true, onCancel, wrapperCol = 12, labelCol = 5, onForm, ...resetProps } = props;

  const formInstance = useRef<FormInstance<any> | null>(null);

  const getForm = (form: FormInstance<any>) => {
    formInstance.current = form;
    onForm?.(form);
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
        <FormList submitBtn={false} labelCol={labelCol} wrapperCol={wrapperCol} onForm={getForm} {...resetProps} />
      </div>
    </Modal>
  );
};

export default memo(FormModal);
