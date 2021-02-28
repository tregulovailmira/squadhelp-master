import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionPage.module.sass';
import Header from '../../components/Header/Header';
import TransactionsTable from '../../components/TransactionsTable';

function TransactionPage(props) {
    const transactions = [
        {
            id: "1",
            type: true,
            sum: 100
        },
        {
            id: "2",
            type: false,
            sum: 100
        },
        {
            id: "3",
            type: true,
            sum: 100
        },
        {
            id: "4",
            type: false,
            sum: 100
        },

    ];

    const tableClasses = {
        tableData: styles.tableData,
        table: styles.table,
        tableHeader: styles.tableHeader,
        tableBody: styles.tableBody
    }
    return (
        <div>
            <Header/>
            <div className={styles.tableContainer}>
                { transactions 
                    ? <TransactionsTable transactions={transactions} classes={tableClasses}/>
                    : <div className={styles.noTransactions}>No transactions</div>
                }
            </div>
            
        </div>
    )
}

TransactionPage.propTypes = {

}

export default TransactionPage

