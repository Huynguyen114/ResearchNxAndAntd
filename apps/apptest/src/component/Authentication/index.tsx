import { Card, Tabs } from 'antd';
import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './styles.scss';
const logo = require('../../assets/images/Logo/Logo.png');

const index = () => {
  const { TabPane } = Tabs;
  return (
    <div className="Authentication">
      <Card>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Sign in" key="1">
            <SignIn />
          </TabPane>
          <TabPane tab="Sign up" key="2">
            <SignUp />
          </TabPane>
        </Tabs>
      </Card>
      <div className="footer">
        <p>
          © 2021 GGN Partners. All Rights Reserved ® | Stocks Web Portal v1.0.0
        </p>
      </div>
    </div>
  );
};

export default index;
