import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTransactionAction } from '../../actions/actionCreator';

function TransactionsTable(props) {

    const { classes } = props;

    const dispatch = useDispatch();
    const getTransactions = bindActionCreators(getTransactionAction, dispatch);
    const { transactions, isFetching, error } = useSelector(state => state.transactions);

    useEffect(() => {
        getTransactions();
    }, []);

    const renderTrasactions = (transactions) => {
        return transactions.map((transaction, index) => 
        <tr key={transaction.id}>
            <td>{index + 1}</td>
            <td className={classes.tableData}>
                {`${transaction.type ? '+' : '-'}${transaction.sum}`}
            </td>
        </tr>);
    }

    if(isFetching){
        return <div>Loading...</div>;
    };
    if(error){
        return <div>Error</div>;
    };
    if(!isFetching && !error) {
        
    };
    
    return (
        <table className={classes.table}>
            <thead className={classes.tableHeader}>
                <tr>
                    <td>Number</td>
                    <td>Transaction</td>
                </tr>
            </thead>
            <tbody className={classes.tableBody}>
                {renderTrasactions(transactions)}
            </tbody>
        </table>
    )
}

TransactionsTable.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.bool.isRequired,
        sum: PropTypes.number.isRequired
    }).isRequired).isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default TransactionsTable;

