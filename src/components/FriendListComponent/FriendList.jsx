import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles.js';

export const FriendList = ({ friends }) => {
  return (
    <Styled.List>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </Styled.List>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Styled.ListItem>
      <Styled.StatusIndicator isOnline={isOnline} />
      <Styled.Avatar src={avatar} alt="User avatar" width="48" />
      <Styled.Name>{name}</Styled.Name>
    </Styled.ListItem>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
