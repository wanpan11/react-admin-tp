import type { CompanyApi } from "&src/types/api";
import { companyService } from "&src/api/setting";

import FormFilter from "&src/components/FormFilter";
import FormModal from "&src/components/FormModal";
import { useSwrData } from "&src/hooks/useSwrData";
import { Button, Card, message, Table } from "antd";
import { useState } from "react";

const filterInfo: FormItem[] = [{ name: "projectName", type: "input", label: "厂商名称" }];
const itemInfo: FormItem[] = [
  {
    name: "category",
    label: "类型",
    type: "radio",
    rule: { required: true, message: "请选择厂商类型！" },
    options: [
      { label: "研发", value: 1 },
      { label: "发行", value: 2 },
      { label: "研发一体", value: 3 },
    ],
  },
  {
    label: "厂商名称",
    name: "name",
    type: "input",
    rule: { required: true, message: "请输入厂商名称！" },
  },
  {
    label: "联系人",
    name: "contact",
    type: "input",
    rule: {
      required: true,
      message: "请输入厂商类型联系人！",
    },
  },
  {
    label: "联系电话",
    name: "mobile",
    type: "input",
    rule: {
      required: true,
      message: "请输入正确的厂商联系电话！",
      pattern: /^(13\d|14[014-9]|15[0-35-9]|16[2567]|17[0-8]|18\d|19[0-35-9])\d{8}$/,
    },
  },
];

function Company() {
  const { data, isLoading, onSearch, setPage } = useSwrData({
    reqKey: "companyService.list",
    req: companyService.list,
    paging: true,
  });

  const [modalOpen, modalOpenHandle] = useState(false);
  const [editData, editDataHandle] = useState<any>(null);
  const createOrEdit = async (value: CompanyApi.InsertReq) => {
    const { data } = await companyService.insert(value);
    message.success(data);
    modalOpenHandle(false);
  };
  const clearEdit = () => {
    modalOpenHandle(false);
    editDataHandle(null);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "类型",
      dataIndex: "category",
    },
    {
      title: "厂商名称",
      dataIndex: "name",
    },
    {
      title: "联系人",
      dataIndex: "contact",
    },
    {
      title: "联系电话",
      dataIndex: "mobile",
    },
    {
      title: "创建时间",
      dataIndex: "updateTime",
    },
    {
      title: "编辑",
      key: "edit",
      render: (record: any) => {
        return (
          <>
            <Button type="link">删除</Button>
            <Button
              type="link"
              onClick={() => {
                modalOpenHandle(true);
                editDataHandle(record);
              }}
            >
              编辑
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <FormFilter loading={isLoading} filterInfo={filterInfo} onOk={onSearch} reset />

      <Card className="mt-1">
        <div className="mb-2">
          <Button
            type="primary"
            onClick={() => {
              modalOpenHandle(true);
            }}
          >
            新建厂商
          </Button>
        </div>

        <Table
          rowKey="id"
          columns={columns}
          loading={isLoading}
          dataSource={data?.list}
          pagination={{
            onChange: (pageNum, pageSize) => {
              setPage({ pageNum, pageSize });
            },
          }}
        />
      </Card>

      <FormModal
        title="厂商编辑"
        open={modalOpen}
        itemInfo={itemInfo}
        initialValues={editData}
        onCancel={() => {
          clearEdit();
        }}
        onOk={(value) => {
          createOrEdit(value as CompanyApi.InsertReq);
        }}
      />
    </div>
  );
}

export default Company;
