import { memo, useRef } from "react";
import { FormInstance, Modal, ModalProps } from "antd";

import FormList, { FormListProps } from "../FormList";

interface FormModalProps
  extends Pick<ModalProps, "open" | "title" | "classNames" | "className" | "maskClosable" | "onCancel">,
    Pick<FormListProps, "form" | "itemInfo" | "wrapperCol" | "labelCol" | "initialValues" | "onOk" | "onForm" | "onValuesChange"> {
  noFooter?: boolean;
}

const FormModal = (props: FormModalProps) => {
  const { open, title, noFooter, className, classNames, maskClosable = true, onCancel, wrapperCol = 12, labelCol = 5, onForm, ...resetProps } = props;

  const formInstance = useRef<FormInstance<any> | null>(null);

  const getForm = (form: FormInstance<any>) => {
    formInstance.current = form;
    onForm?.(form);
  };

  return (
    <Modal
      open={open}
      title={title}
      className={className}
      classNames={classNames ? classNames : { body: "pt-6" }}
      closable={noFooter ? true : false}
      maskClosable={maskClosable}
      onCancel={onCancel}
      okText="确定"
      cancelText="取消"
      width={880}
      destroyOnClose
      onOk={() => {
        formInstance.current && formInstance.current.submit();
      }}
      afterClose={() => {
        formInstance.current && formInstance.current.resetFields();
      }}
      footer={noFooter ? null : undefined}
    >
      <FormList submitBtn={false} labelCol={labelCol} wrapperCol={wrapperCol} onForm={getForm} {...resetProps} />
    </Modal>
  );
};

export default memo(FormModal);
