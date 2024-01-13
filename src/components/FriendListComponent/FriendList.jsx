import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles.js';

/**
 * FriendList component displays a list of friends with their avatars, names, and online status.
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.friends - An array of friend objects.
 * @param {number} props.friends.id - The unique identifier for each friend.
 * @param {string} props.friends.avatar - The URL of the friend's avatar image.
 * @param {string} props.friends.name - The name of the friend.
 * @param {boolean} props.friends.isOnline - Indicates whether the friend is currently online.
 * @returns {JSX.Element} - The rendered FriendList component.
 */
export const FriendList = ({ friends }) => {
  return (
    <Styled.List>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </Styled.List>
  );
};

/**
 * FriendListItem component displays individual friend information, including avatar, name, and online status.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.avatar - The URL of the friend's avatar image.
 * @param {string} props.name - The name of the friend.
 * @param {boolean} props.isOnline - Indicates whether the friend is currently online.
 * @returns {JSX.Element} - The rendered FriendListItem component.
 */
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Styled.ListItem>
      <Styled.StatusIndicator isOnline={isOnline} />
      <Styled.Avatar src={avatar} alt="User avatar" width="48" />
      <Styled.Name>{name}</Styled.Name>
    </Styled.ListItem>
  );
};

/**
 * Prop types for the FriendList component.
 * @type {Object}
 * @property {Array} friends - An array of friend objects.
 * @property {number} friends.id - The unique identifier for each friend.
 * @property {string} friends.avatar - The URL of the friend's avatar image.
 * @property {string} friends.name - The name of the friend.
 * @property {boolean} friends.isOnline - Indicates whether the friend is currently online.
 */
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
