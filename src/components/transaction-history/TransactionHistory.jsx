import TransactionHistoryItem from "../transaction-history-item/TransactionHistoryItem";

import css from "./TransactionHistory.module.css";

const TransactionHistory = (items) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.headLabel}>Type</th>
          <th className={css.headLabel}>Amount</th>
          <th className={css.headLabel}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(items)[0].map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
