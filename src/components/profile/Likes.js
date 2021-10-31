import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Likes({ quantityLikes }) {
  return (
    <li className={s.statInfo}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{quantityLikes}</span>
    </li>
  );
}

Likes.propTypes = {
  quantityLikes: PropTypes.number.isRequired,
};

export default Likes;
