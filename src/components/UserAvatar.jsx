import { Avatar } from 'antd';
import Colors from '../constants/colors';

const UserAvatar = ({ size, name, imageUrl }) => {
  return (
    <div className={`flex items-center justify-center bg-[#fceacc]`}>
      <Avatar size={size} src={imageUrl} alt={name}>
        {name && name.charAt(0).toUpperCase()}
      </Avatar>
    </div>
  );
};

export default UserAvatar;
