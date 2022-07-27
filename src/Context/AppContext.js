import React, { createContext, useReducer, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//Used to update the state, based on action
export const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            }
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            }
        default:
            return state;
    }
};
const budgetFromLocalStorage = JSON.parse(localStorage.getItem('budget'));
const expensesFromLocalStorage = JSON.parse(localStorage.getItem('expenses'));
//Sets the information for when the app loads.
const initialState = {
    budget: budgetFromLocalStorage,
    expenses: expensesFromLocalStorage,
    // [
    //     {id: uuidv4(), name:'Shopping', cost:40},
    //     {id: uuidv4(), name:'Food', cost:100},
    //     {id: uuidv4(), name:'Investments', cost:400},
    //     {id: uuidv4(), name:'Gas', cost:200},
    //     {id: uuidv4(), name:'Fun', cost:50},
    //     {id: uuidv4(), name:'Groceries', cost:200},
    // ],
};

//Creates the context. Components import this to use and get the state.
export const AppContext = createContext();

//Provider. Wraps components wanted to give access to state
//Accepts Children (wrapped components)
export const AppProvider = (props) => {
    //Sets App State, Takes Reducer, and Initial State.
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('budget', JSON.stringify(state.budget))
    }, [state.budget])

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(state.expenses))
    }, [state.expenses])

    //Returns Context. Adds Values Wanted to Expose.
    return (
    <AppContext.Provider 
        value={{
            expenses: state.expenses,
            budget: state.budget,
            dispatch,
        }}
    >
        {props.children}
    </AppContext.Provider>
    )
};