import * as React from 'react';
import { Form, Input } from 'antd';

interface IProps {
  field: any;
  form: any;
  client: any;
  path: string;
}

export class InputComponent extends React.Component<IProps> {

  render() {
    const { form, field, path } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Form.Item label={field.title}>
        {getFieldDecorator(path || field.name)(
          // @ts-ignore
          <Input size="large" />
        )}
      </Form.Item>
    );
  }
}
