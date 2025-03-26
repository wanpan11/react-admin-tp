import { memo, useRef } from "react";
import { FormInstance, Modal, ModalProps } from "antd";

import FormList, { FormListProps } from "../FormList";

interface FormModalProps
  extends Pick<ModalProps, "open" | "title" | "classNames" | "className" | "maskClosable" | "onCancel" | "okButtonProps">,
    Pick<FormListProps, "form" | "itemInfo" | "wrapperCol" | "labelCol" | "initialValues" | "stageValues" | "onOk" | "onForm" | "onValuesChange"> {
  noFooter?: boolean;
}

const FormModal = (props: FormModalProps) => {
  const { open, title, noFooter, okButtonProps, className, classNames, maskClosable = true, onCancel, wrapperCol = 12, labelCol = 5, onForm, ...resetProps } = props;

  const formInstance = useRef<FormInstance<any> | null>(null);

  const getForm = (form: FormInstance<any>) => {
    formInstance.current = form;
    onForm?.(form);
  };

  return (
    <Modal
      width={880}
      open={open}
      okText="确定"
      title={title}
      destroyOnClose
      cancelText="取消"
      className={className}
      maskClosable={maskClosable}
      okButtonProps={okButtonProps}
      closable={noFooter ? true : false}
      footer={noFooter ? null : undefined}
      classNames={classNames ? classNames : { body: "pt-6" }}
      afterClose={() => {
        formInstance.current && formInstance.current.resetFields();
      }}
      onCancel={onCancel}
      onOk={() => {
        formInstance.current && formInstance.current.submit();
      }}
    >
      <FormList submitBtn={false} labelCol={labelCol} wrapperCol={wrapperCol} onForm={getForm} {...resetProps} />
    </Modal>
  );
};

export default memo(FormModal);
