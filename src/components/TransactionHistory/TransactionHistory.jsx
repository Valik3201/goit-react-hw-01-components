import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles.js';

/**
 * TransactionHistory component displays a table of transaction information including type, amount, and currency.
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.transactions - An array of transaction objects.
 * @param {string} props.transactions.id - The unique identifier for each transaction.
 * @param {string} props.transactions.type - The type of the transaction (e.g., "Deposit", "Withdrawal").
 * @param {string} props.transactions.amount - The amount of the transaction.
 * @param {string} props.transactions.currency - The currency in which the transaction occurred.
 * @returns {JSX.Element} - The rendered TransactionHistory component.
 */
export const TransactionHistory = ({ transactions }) => {
  return (
    <Styled.Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{parseFloat(amount).toFixed(2)}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  );
};

/**
 * Prop types for the TransactionHistory component.
 * @type {Object}
 * @property {Array} transactions - An array of transaction objects.
 * @property {string} transactions.id - The unique identifier for each transaction.
 * @property {string} transactions.type - The type of the transaction (e.g., "Deposit", "Withdrawal").
 * @property {string} transactions.amount - The amount of the transaction.
 * @property {string} transactions.currency - The currency in which the transaction occurred.
 */
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
