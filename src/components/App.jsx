import { useState } from 'react';

import Profile from './ProfileComponent/Profile.jsx';
import user from '../data/user.json';

import { Statistics } from './StatisticsComponent/Statistics.jsx';
import data from '../data/data.json';

import { FriendList } from './FriendListComponent/FriendList.jsx';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import transactions from '../data/transactions.json';

import * as Styled from './styles.js';

import ReactLogo from '../assets/react-logo.svg';

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
        return <Statistics title="Upload stats" stats={data} />;

      case 'friendsList':
        return <FriendList friends={friends} />;

      case 'transactionHistory':
        return <TransactionHistory transactions={transactions} />;

      default:
        return null;
    }
  };

  return (
    <Styled.AppContainer>
      <Styled.NavBar>
        <Styled.Logo src={ReactLogo} alt="React Logo" />
        <Styled.Heading>
          React <br></br>Components
        </Styled.Heading>
        <div>
          <Styled.NavButton onClick={() => handleTabChange('profile')}>
            Social Network Profile
          </Styled.NavButton>
          <Styled.NavButton onClick={() => handleTabChange('statistics')}>
            Statistics Section
          </Styled.NavButton>
          <Styled.NavButton onClick={() => handleTabChange('friendsList')}>
            Friends List
          </Styled.NavButton>
          <Styled.NavButton
            onClick={() => handleTabChange('transactionHistory')}
          >
            Transaction History
          </Styled.NavButton>
        </div>
      </Styled.NavBar>
      <Styled.Content>{renderTabContent()}</Styled.Content>
    </Styled.AppContainer>
  );
};
