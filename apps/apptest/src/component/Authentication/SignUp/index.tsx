import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import './styles.scss';

const SignUp = () => {
  const { Option } = Select;
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="signUp">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="firstName"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            className="specialInput"
            rules={[{ required: true }]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          // label="Username"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input placeholder="Mobile" />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true }]}
            className="specialInput"
          >
            <Select placeholder="Entity">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
