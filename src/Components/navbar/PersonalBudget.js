import React, { Component } from 'react';
import { AppProvider } from '../../Context/AppContext';
import Budget from '../Budget';
import ExpenseTotal from '../ExpenseTotal';
import ExpenseList from '../ExpenseList';
import AddExpenseForm from '../AddExpenseForm';
import RemainingBudget from '../Remaining';

class PersonalBudget extends Component {
    render() {
        return(
            <>
                <AppProvider>
                    <div class='container'>
                        <h1 class='mt-3 pt-2'>Personal Budget</h1>
                        <div class='row mt-3'>
                            <div class='col-sm'>
                            <Budget />
                            </div>
                            <div class='col-sm'>
                            <RemainingBudget />
                            </div>
                            <div class='col-sm'>
                            <ExpenseTotal />
                            </div>
                        </div>
    
                        <h3 class='mt-3'>Expenses</h3>
                        <div class='row'>
                            <div class='col-sm'>
                            <ExpenseList />
                            </div>
                        </div>
    
                        <h3 class='mt-3'>Add Expense</h3>
                        <div class='row mt-3'>
                        <div class='col-sm'>
                            <AddExpenseForm />
                            </div>
                        </div>
                    </div>
                    </AppProvider>
                    </> 
        )

    }
    

}

export default PersonalBudget;
