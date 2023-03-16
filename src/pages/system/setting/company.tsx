import { useState } from "react";
import FormFilter from "@src/components/FormFilter";
import FormModal from "@src/components/FormModal";
import { Card, Button, Table } from "antd";
import { useRequest } from "ahooks";
import { companyService } from "@src/api/setting";
import type { CompanyApi } from "@src/types/api";
import type { FormItemInfo } from "@src/types/index";

const filterInfo: FormItemInfo[] = [
  { name: "projectName", type: "input", label: "厂商名称" },
];

const editInfo: FormItemInfo[] = [
  {
    name: "category",
    label: "类型",
    type: "radio",
    rule: { required: true, message: "请选择厂商类型！" },
    options: [
      { label: "研发", value: "1" },
      { label: "发行", value: "2" },
      { label: "研发一体", value: "3" },
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
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    },
  },
];

const Company = () => {
  const [ModalOpen, ModalOpenHandle] = useState(false);

  const { data, error, loading, run } = useRequest(companyService.list, {
    defaultParams: [{ pageNum: 1, pageSize: 5, name: "" }],
    loadingDelay: 300,
  });

  const columns = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "类型",
      key: "category",
      dataIndex: "category",
    },
    {
      title: "厂商名称",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "联系人",
      key: "contact",
      dataIndex: "contact",
    },
    {
      title: "联系电话",
      key: "mobile",
      dataIndex: "mobile",
    },
    {
      title: "创建时间",
      key: "updateTime",
      dataIndex: "updateTime",
    },
    {
      title: "编辑",
      key: "edit",
      render: () => {
        return (
          <>
            <Button type="link">删除</Button>
            <Button type="link">编辑</Button>
          </>
        );
      },
    },
  ];

  const onSearch = async () => {
    run({ pageNum: 1, pageSize: 10, name: "" });
  };

  const createOrEdit = async (value: CompanyApi.InsertReq) => {
    try {
      const res = await companyService.insert(value);
      console.log(res);
    } catch (error) {
      console.log("createManufacturerReq err");
    }
    ModalOpenHandle(false);
  };

  if (error) {
    console.error("companyService.list ===> ", error);
  }

  return (
    <div>
      <FormFilter
        loading={loading}
        filterInfo={filterInfo}
        onSubmit={onSearch}
        reset
      />

      <div style={{ height: "12px" }}></div>

      <Card>
        <div style={{ marginBottom: "12px" }}>
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
          dataSource={data?.data.list}
          columns={columns}
          rowKey="id"
          loading={loading}
        />
      </Card>

      <FormModal
        open={ModalOpen}
        title="厂商编辑"
        editInfo={editInfo}
        onCancel={() => {
          ModalOpenHandle(false);
        }}
        onOk={value => {
          createOrEdit(value as CompanyApi.InsertReq);
        }}
      />
    </div>
  );
};

export default Company;
