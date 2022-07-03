import propTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({transactions}) => {
    return (
      <table className={css.transactionHistory}>
        <thead className={css.thead}>
          <tr className={css.rowContent}>
            <th className={css.rowTitle}>Type</th>
            <th>Amount</th>
            <th >Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {transactions.map(transaction => (
             <tr key={transaction.id}>
                <td >{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
            </tr>
          ))
            
         }
        </tbody>
      </table>
    )
  }



TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired
      })
    )
  }