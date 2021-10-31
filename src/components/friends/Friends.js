import PropTypes from 'prop-types';
import FriendItem from './FriendsItem';
import s from './Friends.module.css';

function Friends({ items }) {
  return (
    <div className={s.friends}>
      <ul className={s.itemsList}>
        {items.map(item => (
          <li className={s.item} key={item.id}>
            <FriendItem
              friendImg={item.avatar}
              friendName={item.name}
              friendStatus={item.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

Friends.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default Friends;
