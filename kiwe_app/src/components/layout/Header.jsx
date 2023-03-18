import React from 'react';
import '../../styles/langPage.css';
import '../../global.css';

export default function Header() {
  return (
    <header className="flex flex-row w-screen px-6 py-5 z-50">
      <div className="w-full h-10 flex algin">
        <img className="trasform scale-x-[-1]" src="/assets/kiwes_logo.png" alt="키위새" />
        <span className=" font-extrabold text-myGreen  text-3xl">KiWES</span>
      </div>
      <div className="w-9 my-auto">
        <img src="/assets/ring.png" alt="알림" />
      </div>
    </header>
  );
}
