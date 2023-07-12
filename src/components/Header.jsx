import { useEffect, useState } from 'react';
import {
  BellOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import SearchBar from './Searchbar';

const Header = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, []);

  return (
    <div className="pl-8 pt-8 pr-8 w-full flex justify-between">
      <div>
        <h1 className="pb-2">Overview</h1>
        <p>Hello {user}, welcome back!</p>
      </div>
      <div className="justify-center items-center gap-2 flex">
        <SearchBar />
        <Button
          type="primary"
          shape="circle"
          icon={<ShoppingCartOutlined style={{ fontSize: '150%' }} />}
          className="bg-[#4daf81] flex items-center justify-center hover:!bg-[#fceacc]"
          style={{ width: '48px', height: '48px' }}
        />
        <Button
          type="default"
          shape="circle"
          icon={<BellOutlined />}
          className="bg-white flex items-center justify-center"
          style={{ width: '48px', height: '48px' }}
        />
        <Button
          type="default"
          shape="circle"
          icon={<SettingOutlined />}
          className="bg-white flex items-center justify-center"
          style={{ width: '48px', height: '48px' }}
        />
      </div>
    </div>
  );
};

export default Header;
