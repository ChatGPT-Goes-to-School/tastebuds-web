import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  BarChartOutlined,
  ShoppingCartOutlined,
  BookOutlined,
} from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Navigate, useNavigate } from 'react-router-dom';
import Colors from '../constants/colors';
import UserAvatar from './UserAvatar';
import Logout from './Logout';

const Sidebar = () => {
  const [selected, setSelected] = React.useState('/');
  const navigate = useNavigate();
  return (
    <Layout
      hasSider
      className="h-screen bg-[#fceacc] flex flex-col ml-auto mr-auto"
    >
      <Sider className="h-screen w-full flex justify-center fixed left-0 top-0 bottom-0 items-center">
        <div className="w-full flex flex-col h-screen bg-[#fceacc]">
          <UserAvatar
            name="John Doe"
            size={128}
            imageUrl="https://scontent.fsin3-1.fna.fbcdn.net/v/t31.18172-8/15732054_1829744933948321_6912147507579640372_o.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oeNbB7sKxMwAX-oWQIB&_nc_ht=scontent.fsin3-1.fna&oh=00_AfB1Aep5dYFEHkV_ZSyj5d5c9uW06oxPC6ddyg1SQLG8_g&oe=64D4A13B"
            job="Software Engineer"
          />

          <Menu
            mode="inline"
            defaultSelectedKeys={[selected]}
            className="h-full pt-6 pl-4 pr-4"
            onClick={({ key }) => {
              navigate(key);
            }}
            items={[
              {
                key: '/',
                icon: <HomeOutlined />,
                label: 'Home',
              },
              {
                key: '/search',
                icon: <SearchOutlined />,
                label: 'Search',
              },
              {
                key: '/analytics',
                icon: <BarChartOutlined />,
                label: 'Analytics',
              },
              {
                key: '/grocery',
                icon: <ShoppingCartOutlined />,
                label: 'Grocery',
              },
              {
                key: '/collection',
                icon: <BookOutlined />,
                label: 'Collection',
              },
            ]}
          />
          <Logout />
        </div>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
