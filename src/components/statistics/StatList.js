import PropTypes from 'prop-types';
import StatItems from './StatItems';
import s from './Statistics.module.css';

function StatList({ items }) {
  return (
    <ul className={s.statList}>
      {items.map(item => (
        <li key={item.id}>
          <StatItems label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatList;
