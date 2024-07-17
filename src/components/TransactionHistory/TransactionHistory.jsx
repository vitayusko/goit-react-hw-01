import s from "./TransactionHistory.module.css";

const YourTableComponent = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.trHead}>
          <th className={s.thHead}>Type</th>
          <th className={s.thHead}>Amount</th>
          <th className={s.thHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td className={s.tdBoby}>{transaction.type}</td>
            <td className={s.tdBoby}>{transaction.amount}</td>
            <td className={s.tdBoby}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default YourTableComponent;
