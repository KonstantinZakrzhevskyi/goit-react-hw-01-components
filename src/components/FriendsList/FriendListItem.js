import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
