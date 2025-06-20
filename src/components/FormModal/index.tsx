import type { FormInstance, ModalProps } from "antd";
import type { FormListProps } from "../FormList";
import { Modal } from "antd";

import { memo, useRef } from "react";
import FormList from "../FormList";

interface FormModalProps
  extends Pick<ModalProps, "open" | "width" | "title" | "classNames" | "className" | "maskClosable" | "onCancel" | "okButtonProps">,
  Pick<FormListProps, "form" | "itemInfo" | "wrapperCol" | "labelCol" | "initialValues" | "stageValues" | "onOk" | "onForm" | "onValuesChange"> {
  noFooter?: boolean;
}

function FormModal(props: FormModalProps) {
  const {
    open,
    width = 880,
    title,
    noFooter,
    className,
    classNames,
    okButtonProps,
    wrapperCol = 21,
    labelCol = 3,
    maskClosable = true,
    onForm,
    onCancel,
    ...resetProps
  } = props;

  const formInstance = useRef<FormInstance<any> | null>(null);

  const getForm = (form: FormInstance<any>) => {
    formInstance.current = form;
    onForm?.(form);
  };

  return (
    <Modal
      open={open}
      okText="确定"
      width={width}
      title={title}
      destroyOnHidden
      cancelText="取消"
      className={className}
      maskClosable={maskClosable}
      okButtonProps={okButtonProps}
      closable={!!noFooter}
      footer={noFooter ? null : undefined}
      classNames={classNames || { body: "pt-6" }}
      afterClose={() => {
        formInstance.current && formInstance.current.resetFields();
      }}
      onCancel={onCancel}
      onOk={() => {
        formInstance.current && formInstance.current.submit();
      }}
    >
      <div className="overflow-hidden">
        <FormList submitBtn={false} labelCol={labelCol} wrapperCol={wrapperCol} onForm={getForm} {...resetProps} />
      </div>
    </Modal>
  );
}

export default memo(FormModal);
