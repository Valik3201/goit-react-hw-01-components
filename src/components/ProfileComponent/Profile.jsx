// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import styles
import styles from './/Profile.module.scss';

/**
 * Profile component displays user information and statistics.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.username - User's name.
 * @param {string} props.tag - User's tag.
 * @param {string} props.location - User's location.
 * @param {string} props.avatar - URL of the user's avatar image.
 * @param {Object} props.stats - User statistics.
 * @param {number} props.stats.followers - Number of followers.
 * @param {number} props.stats.views - Number of views.
 * @param {number} props.stats.likes - Number of likes.
 * @returns {JSX.Element} Returns the JSX element for the Profile component.
 */
const Profile = ({ username, tag, location, avatar, stats }) => {
  // Destructure stats for easier access
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        {/* Display user avatar */}
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        {/* Display user's name */}
        <p className={styles.name}>{username}</p>
        {/* Display user's tag */}
        <p className={styles.tag}>@{tag}</p>
        {/* Display user's location */}
        <p className={styles.location}>{location}</p>
      </div>

      {/* Display user statistics */}
      <ul className={styles.stats}>
        <li>
          {/* Display followers count */}
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          {/* Display views count */}
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          {/* Display likes count */}
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Define prop types for the component
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

// Export the Profile component as the default export
export default Profile;
