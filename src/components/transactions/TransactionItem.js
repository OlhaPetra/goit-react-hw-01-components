import PropTypes from 'prop-types';
import s from './Transaction.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={s.tableBorder}>{type}</td>
      <td className={s.tableBorder}>{amount}</td>
      <td className={s.tableBorder}>{currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
