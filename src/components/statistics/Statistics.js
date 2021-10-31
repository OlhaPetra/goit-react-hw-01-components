import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, children }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.statisticsTitle}>{title}</h2>}
      {children}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
