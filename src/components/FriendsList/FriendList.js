import FriendListItem from 'components/FriendsList/FriendListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
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
