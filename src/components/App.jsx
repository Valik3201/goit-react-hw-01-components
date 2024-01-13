import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

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

/**
 * App component serves as the main entry point for the application, rendering different tabs based on user selection.
 * @component
 * @returns {JSX.Element} - The rendered App component.
 */
export const App = () => {
  const [activeTab, setActiveTab] = useState('profile');

  /**
   * Handles the change of the active tab.
   * @function
   * @param {string} tab - The tab to set as active.
   */
  const handleTabChange = tab => {
    setActiveTab(tab);
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles the mobile menu open/closed state.
   * @function
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Renders the content for the active tab.
   * @function
   * @returns {JSX.Element | null} - The rendered content for the active tab, or null if the tab is not recognized.
   */
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
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <Styled.AppContainer>
        <Styled.NavBar isOpen={isMenuOpen}>
          <Styled.Logo src={ReactLogo} alt="React Logo" />
          <Styled.Heading>
            React <br />
            Components
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
        <Styled.BurgerButton isOpen={isMenuOpen} onClick={toggleMenu}>
          ☰
        </Styled.BurgerButton>
        <Styled.Content key={activeTab} fadeType="in" isOpen={isMenuOpen}>
          {renderTabContent()}
        </Styled.Content>
      </Styled.AppContainer>
    </StyleSheetManager>
  );
};
