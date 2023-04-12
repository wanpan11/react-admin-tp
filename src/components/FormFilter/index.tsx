/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect } from "react";
import lessStyle from "./index.module.less";
import { Form, Button, Row, Col } from "antd";
import { getFormElement } from "@src/components/tools";
import type { FormItemInfo } from "@src/components/type";

export interface FormFilterProps {
  filterInfo: FormItemInfo[];
  initialValues?: { [key: string]: unknown };
  reset?: boolean;
  loading?: boolean;
  onSubmit?: (value: Record<string, string>) => void;
  compact?: boolean;
}

const FormFilter = ({
  filterInfo,
  initialValues,
  onSubmit,
  reset,
  loading,
  compact = false,
}: FormFilterProps) => {
  const [form] = Form.useForm();

  const onFinish = (value: Record<string, string>) => {
    onSubmit && onSubmit(value);
  };

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBtn = () => {
    return (
      <div className={lessStyle[compact ? "button_box_2" : "button_box_1"]}>
        {reset ? <Button htmlType="reset">重置</Button> : null}

        <Button htmlType="submit" type="primary" loading={loading}>
          查询
        </Button>
      </div>
    );
  };

  return (
    <div className={lessStyle.filter_box}>
      <Form form={form} onFinish={onFinish} colon={false}>
        <Row gutter={21} style={{ paddingRight: 200 }}>
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

          {getBtn()}
        </Row>
      </Form>
    </div>
  );
};

export default memo(FormFilter);
