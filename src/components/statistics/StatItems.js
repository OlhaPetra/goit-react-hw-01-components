import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const StatItems = ({ label, percentage }) => {
  return (
    <>
      <div className={s.statItems} style={{ backgroundColor: colorGen() }}>
        <span className={s.label}>{label}</span>
        <span className={s.value}>{percentage}%</span>
      </div>
    </>
  );
};

StatItems.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

//функция генерации случайного цвета

function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  return rgb;
}

//-----------------

export default StatItems;
