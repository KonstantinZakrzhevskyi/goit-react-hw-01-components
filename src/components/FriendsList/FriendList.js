import FriendListItem from 'components/FriendsList/FriendListItem';

import s from 'components/FriendsList/FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.name}
        />
      ))}
    </ul>
  );
}
