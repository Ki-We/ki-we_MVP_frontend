import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  FavoriteBorderOutlined,
  AddCircleOutlineOutlined,
  ChatBubbleOutlineOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';

export default function Nav() {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const activeClass = 'text-green-500';

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <ul className="flex justify-around max-w-screen-lg mx-auto py-2">
        <li className="flex flex-col items-center justify-center w-20">
          <Link to="/mainpage" className={`pb-1 ${value === '/mainpage' ? activeClass : ''}`}>
            <HomeOutlined />
          </Link>
          <span className={`text-xs font-medium ${value === '/mainpage' ? activeClass : ''}`}>HOME</span>
        </li>
        <li className="flex flex-col items-center justify-center w-20">
          <Link to="/wish" className={`pb-1 ${value === '/wish' ? activeClass : ''}`}>
            <FavoriteBorderOutlined />
          </Link>
          <span className={`text-xs font-medium ${value === '/wish' ? activeClass : ''}`}>WISH</span>
        </li>
        <li className="flex flex-col items-center justify-center w-20">
          <Link to="/start/createpost" className={`pb-1 ${value === '/start/createpost' ? activeClass : ''}`}>
            <AddCircleOutlineOutlined style={{ fontSize: '2.5rem' }} />
          </Link>
          <span className={`text-xs font-medium ${value === '/start/createpost' ? activeClass : ''}`}>ADD</span>
        </li>
        <li className="flex flex-col items-center justify-center w-20">
          <Link to="/chat" className={`pb-1 ${value === '/chat' ? activeClass : ''}`}>
            <ChatBubbleOutlineOutlined />
          </Link>
          <span className={`text-xs font-medium ${value === '/chat' ? activeClass : ''}`}>CHAT</span>
        </li>
        <li className="flex flex-col items-center justify-center w-20">
          <Link to="/start/profile" className={`pb-1 ${value === '/start/profile' ? activeClass : ''}`}>
            <AccountCircleOutlined />
          </Link>
          <span className={`text-xs font-medium ${value === '/start/profile' ? activeClass : ''}`}>MY</span>
        </li>
      </ul>
    </nav>
  );
}
