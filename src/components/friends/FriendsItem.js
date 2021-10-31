import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import s from './Friends.module.css';

const FriendItem = ({ friendImg, friendName, friendStatus }) => {
  return (
    <>
      <span
        className={s.status}
        style={{ backgroundColor: friendStatus === true ? 'green' : 'red' }}
      ></span>
      <img src={friendImg} alt={friendName} width="80" className={s.image} />
      <p className={s.name}>{friendName}</p>
    </>
  );
};

FriendItem.defaultProps = {
  friendImg: defaultImage,
};

FriendItem.propTypes = {
  friendImg: PropTypes.string,
  friendName: PropTypes.string.isRequired,
  friendStatus: PropTypes.bool.isRequired,
};

export default FriendItem;
