<div align="center">
  <img src="https://github.com/Valik3201/goit-react-hw-01-components/blob/main/src/assets/react-logo.svg" alt="React Logo" width="100" height="100">
  <h1>React Components</h1>
</div>

In this repository, you'll find a collection of React components. These components are designed to be modular, customizable, and user-friendly.

## 🌐 App Root Component

All components are seamlessly rendered on the same page within the common container — the `<App>` root component. 

> [!NOTE]\
> The project is set up for automatic deployment to GitHub Pages using GitHub Actions by JamesIves ([GitHub Pages Deployment Action](https://github.com/marketplace/actions/deploy-to-github-pages)). The deployment action is configured to push production-ready code into the `gh-pages` branch.

## 1️⃣ Social Network Profile

### Preview
<div align="center">
  <img src="https://github.com/Valik3201/goit-react-hw-01-components/blob/main/src/assets/profile.png" alt="Profile Component Preview" width="400">
</div>

### Description
The `Profile` component displays information about a social network user. It accepts various props such as `username`, `tag`, `location`, `avatar`, and `stats`. The styling is implemented using Styled Components.

### Example Usage
```jsx
import user from 'path/to/user.json';

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
```

## 2️⃣ Statistics Section

### Preview
<div align="center">
  <img src="https://github.com/Valik3201/goit-react-hw-01-components/blob/main/src/assets/statistics.png" alt="Statistics Component Preview" width="400">
</div>

### Description
The `Statistics` component showcases statistical information with a clean and visually appealing layout. It accepts `title` (optional) and `stats` props. You can customize the background color of the statistical items or generate random colors.

### Example Usage
```jsx
import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
```

## 3️⃣ Friends List

### Preview
<div align="center">
  <img src="https://github.com/Valik3201/goit-react-hw-01-components/blob/main/src/assets/friends-list.png" alt="FriendList Component Preview" width="400">
</div>

### Description
The `FriendList` component allows you to display information about a user's friends. It accepts a `friends` prop (an array of friend objects). The FriendListItem component is also included for individual friend entries.

### Example Usage
```jsx
import friends from 'path/to/friends.json';

<FriendList friends={friends} />;
```

## 4️⃣ Transaction History

### Preview
<div align="center">
  <img src="https://github.com/Valik3201/goit-react-hw-01-components/blob/main/src/assets/transactions.png" alt="TransactionHistory Component Preview" width="400">
</div>

### Description
The `TransactionHistory` component creates a table layout for displaying a user's transaction history. It accepts an `items` prop (an array of transaction objects from transactions.json).

### Example Usage
```jsx
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;
```

Feel free to explore and integrate these components into your React projects! If you encounter any issues or have suggestions for improvement, don't hesitate to open an [issue](https://github.com/Valik3201/goit-react-hw-01-components/issues) or submit a [pull request](https://github.com/Valik3201/goit-react-hw-01-components/pulls). Happy coding! 🎉
