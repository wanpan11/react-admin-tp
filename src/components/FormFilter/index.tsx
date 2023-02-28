import React, { memo } from "react";
import lessStyle from "./index.module.less";
import { Form, Input, Select, Button, Row, Col, DatePicker } from "antd";
import type { FilterInfo } from "@src/types/index";

const { RangePicker } = DatePicker;

export interface FormFilterProps {
  reset?: boolean;
  filterInfo: FilterInfo[];
  onSubmit: (value: Record<string, string>) => void;
}

const FormFilter = ({ filterInfo, onSubmit, reset }: FormFilterProps) => {
  const getFormElement = (type: string, info: FilterInfo) => {
    switch (type) {
      case "input":
        return <Input />;

      case "select":
        return <Select options={info.options} />;

      case "date":
        return <RangePicker placeholder={["开始时间", "结束时间"]} />;
    }
  };

  const onFinish = (value: Record<string, string>) => {
    onSubmit(value);
  };

  return (
    <div className={lessStyle.filter_box}>
      <Form onFinish={onFinish} colon={false}>
        <Row gutter={24}>
          {filterInfo.length > 0
            ? filterInfo.map(e => {
                return (
                  <Col key={e.name} span={6}>
                    <Form.Item name={e.name} label={e.label}>
                      {getFormElement(e.type, e)}
                    </Form.Item>
                  </Col>
                );
              })
            : null}
        </Row>

        <Row justify="end" className={lessStyle.button_box}>
          {reset ? <Button htmlType="reset">重置</Button> : null}

          <Button htmlType="submit" type="primary">
            查询
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default memo(FormFilter);
