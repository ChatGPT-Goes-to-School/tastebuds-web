import Colors from '../constants/colors';
import { LogoutOutlined } from '@ant-design/icons';

const Logout = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <p
        className={`text-[${Colors.BLACK}] text-xl p-4 mb-8 rounded-xl cursor-pointer hover:bg-[#fff5ed] flex items-center`}
      >
        Logout
        <LogoutOutlined size={48} className="ml-2" />
      </p>
    </div>
  );
};

export default Logout;
