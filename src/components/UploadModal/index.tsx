import { memo, useState } from "react";
import { notification, Upload } from "antd";
import type { UploadProps } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import FormModal from "../FormModal";

const { Dragger } = Upload;

const UploadModal = ({
  open,
  title,
  maxCount = 1,
  onCancel,
  onOk,
}: {
  open: boolean;
  title: string;
  maxCount?: number;
  onCancel?: () => void;
  onOk?: (value: any) => void;
}) => {
  const [file, fileHandle] = useState<any>([]);

  // 批量导入
  const props: UploadProps = {
    name: "file",
    accept: ".xls,.xlsx",
    fileList: file,
    maxCount: maxCount,
    onChange({ fileList }) {
      fileHandle(fileList);
    },
    beforeUpload(_, fileList) {
      fileHandle(fileList);
      return false;
    },
  };
  const importConf: FormItem[] = [
    {
      name: "importConf",
      label: (
        <div>
          {/* <h3>1、下载模板</h3>
          <div>
            请下载模版，按格式修改后上传 <Button type="link">模板下载</Button>{" "}
          </div> */}

          {/* <h3>2、上传文件</h3> */}
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或将文件拖至此处上传 最多{maxCount}个文件</p>
            <p className="ant-upload-hint">仅支持 .xls,.xlsx 格式文件</p>
          </Dragger>

          {/* <h3>3、注意事项</h3>
          <div>1. 单个文件上传最多支持5000行；</div>
          <div>2. 数据填充按照日期及数据名进行识别；</div>
          <div>3. 冲突数据默认直接覆盖</div> */}
        </div>
      ),
      type: "blockNode",
    },
  ];

  return (
    <FormModal
      open={open}
      title={title}
      editInfo={importConf}
      onCancel={() => {
        onCancel && onCancel();
      }}
      onOk={() => {
        if (!file.length) {
          notification.error({ message: "请上传文件！" });
          return;
        }

        onOk && onOk(file);
      }}
    />
  );
};

export default memo(UploadModal);
