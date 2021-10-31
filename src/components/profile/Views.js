import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Views({ quantityViews }) {
  return (
    <li className={s.statInfo}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{quantityViews}</span>
    </li>
  );
}

Views.propTypes = {
  quantityViews: PropTypes.number.isRequired,
};

export default Views;
