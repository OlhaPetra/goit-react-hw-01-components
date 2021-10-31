import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Followers({ quantityFollowers }) {
  return (
    <li className={s.statInfo}>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{quantityFollowers}</span>
    </li>
  );
}

Followers.propTypes = {
  quantityFollowers: PropTypes.number.isRequired,
};

export default Followers;
