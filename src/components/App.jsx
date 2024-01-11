import { useState } from 'react';

import Profile from './Profile.jsx';
import user from '../data/user.json';

export const App = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        );
      case 'statistics':
        // return <Statistics />;
        break;

      case 'friendsList':
        // return <FriendsList />;
        break;

      case 'transactionHistory':
        // return <TransactionHistory />;
        break;

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>React Components</h1>

      <div className="nav-btn">
        <button onClick={() => handleTabChange('profile')}>
          1️⃣ Social Network Profile
        </button>
        <button onClick={() => handleTabChange('statistics')}>
          2️⃣ Statistics Section
        </button>
        <button onClick={() => handleTabChange('friendsList')}>
          3️⃣ Friends List
        </button>
        <button onClick={() => handleTabChange('transactionHistory')}>
          4️⃣ Transaction History
        </button>
      </div>

      {renderTabContent()}
    </div>
  );
};
