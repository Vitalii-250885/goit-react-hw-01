import css from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
