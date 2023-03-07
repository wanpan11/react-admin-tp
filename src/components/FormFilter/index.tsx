import { memo } from "react";
import lessStyle from "./index.module.less";
import { Form, Button, Row, Col } from "antd";
import type { FormItemInfo } from "@src/types/index";
import { getFormElement } from "../tools";

export interface FormFilterProps {
  reset?: boolean;
  loading?: boolean;
  filterInfo: FormItemInfo[];
  onSubmit: (value: Record<string, string>) => void;
}

const FormFilter = ({
  filterInfo,
  onSubmit,
  reset,
  loading,
}: FormFilterProps) => {
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

          {filterInfo.length > 2 ? null : (
            <div className={lessStyle.button_box_2}>
              {reset ? <Button htmlType="reset">重置</Button> : null}
              <Button htmlType="submit" type="primary" loading={loading}>
                查询
              </Button>
            </div>
          )}
        </Row>

        {filterInfo.length > 2 ? (
          <Row justify="end" className={lessStyle.button_box}>
            {reset ? <Button htmlType="reset">重置</Button> : null}

            <Button htmlType="submit" type="primary" loading={loading}>
              查询
            </Button>
          </Row>
        ) : null}
      </Form>
    </div>
  );
};

export default memo(FormFilter);
