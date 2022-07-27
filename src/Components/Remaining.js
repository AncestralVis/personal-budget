import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const RemainingBudget = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    //Makes Remaining Tab Red if the User has Spent More Money Than Budgeted For.
    if (budget < totalExpenses)
    {
        return (
            <div class= {'alert alert-danger p-4'}>
                <span>
                    Remaining: ${budget - totalExpenses}
                </span>
            </div>
        )
    }
    //Makes Remaining Tab Green if User Still has Money Left to Spend
    else if (budget > totalExpenses)
    {
        return (
            <div class= {'alert alert-success p-4'}>
                <span>
                    Remaining: ${budget - totalExpenses}
                </span>
            </div>
        )
    }
    //Makes Remaining Tab Gray if User has Spent Exactly the Amount they Budgeted
    else if (budget == totalExpenses)
    {
        return (
            <div class= {'alert alert-warning p-4'}>
                <span>
                    Remaining: ${budget - totalExpenses}
                </span>
            </div>
        )
    }
}

export default RemainingBudget;