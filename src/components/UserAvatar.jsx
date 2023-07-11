import { Avatar } from 'antd';
import Colors from '../constants/colors';

const UserAvatar = ({ size, name, imageUrl, job }) => {
  return (
    <div className={`flex flex-col items-center justify-center bg-[#fceacc]`}>
      <Avatar size={size} src={imageUrl} alt={name} />
      <p className={`text-xl mt-4 font-bold text-[${Colors.BLACK}]`}>
        {name.charAt(0).toUpperCase() + name.substr(1)}
      </p>
      <p className={`text-l text-[${Colors.BLACK}]`}>{job}</p>
    </div>
  );
};

export default UserAvatar;
