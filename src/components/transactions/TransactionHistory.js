import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import s from './Transaction.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead className={s.tableThead}>
        <tr>
          <th className={s.tableBorder}>Type</th>
          <th className={s.tableBorder}>Amount</th>
          <th className={s.tableBorder}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={s.tableColor} key={item.id}>
            <TransactionItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
