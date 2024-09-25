import { useState } from "react";
import { useRequest } from "ahooks";
import { Button, Card, notification, Table } from "antd";

import { companyService } from "~src/api/setting";
import FormFilter from "~src/components/FormFilter";
import FormModal from "~src/components/FormModal";
import { DEFAULT_PAGE } from "~src/config";
import type { CompanyApi } from "~src/types/api";

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
      pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    },
  },
];

const Company = () => {
  const [searchInfo, searchInfoHandle] = useState<Record<string, any>>({});
  const [pageInfo, pageInfoHandle] = useState(DEFAULT_PAGE);

  const { data, error, loading } = useRequest(() => companyService.list({ ...pageInfo, ...searchInfo }), {
    refreshDeps: [searchInfo, pageInfo],
  });
  if (error) {
    console.error("companyService.list ===> ", error);
  }

  const onSearch = (query: Record<string, any>) => {
    searchInfoHandle(query);
    pageInfoHandle(DEFAULT_PAGE);
  };

  const [ModalOpen, ModalOpenHandle] = useState(false);
  const [editData, editDataHandle] = useState<any>(null);
  const createOrEdit = async (value: CompanyApi.InsertReq) => {
    try {
      const res = await companyService.insert(value);
    } catch (error: any) {
      notification.error({
        message: "companyService.insert ===> " + error.message,
      });
    }
    ModalOpenHandle(false);
  };
  const clearEdit = () => {
    ModalOpenHandle(false);
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
                ModalOpenHandle(true);
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
      <FormFilter loading={loading} filterInfo={filterInfo} onOk={onSearch} reset />

      <Card className="mt-3">
        <div className="mb-2">
          <Button
            type="primary"
            onClick={() => {
              ModalOpenHandle(true);
            }}
          >
            新建厂商
          </Button>
        </div>

        <Table
          rowKey="id"
          columns={columns}
          loading={loading}
          dataSource={data?.data.list}
          pagination={{
            onChange: (pageNum, pageSize) => {
              pageInfoHandle({ pageNum, pageSize });
            },
          }}
        />
      </Card>

      <FormModal
        title="厂商编辑"
        open={ModalOpen}
        itemInfo={itemInfo}
        initialValues={editData}
        onCancel={() => {
          clearEdit();
        }}
        onOk={value => {
          createOrEdit(value as CompanyApi.InsertReq);
        }}
      />
    </div>
  );
};

export default Company;
