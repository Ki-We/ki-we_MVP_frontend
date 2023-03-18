import React from 'react';
import '../../styles/langPage.css';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className="logobox">
        <img src="/assets/kiwes_logo.png" alt="키위새" />
        <span className="title">KiWES</span>
      </div>
      <div style={{ width: '' }}>
        <img src="/assets/ring.png" alt="알림" />
      </div>
    </header>
  );
}
