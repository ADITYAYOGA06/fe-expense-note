import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    //UseState secara terpisah
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //UseState secara bersamaan
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    //Fungsi Handler secara terpisah
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    //Handler bersamaan dalam satu fungsi
    // const inputChangeHandler = (identifier, value) => {
    //     if(identifier === 'title'){
    //         setEnteredTitle(value);
    //     }else if(identifier === 'amount'){
    //         setEnteredAmount(value);
    //     }else{
    //         setEnteredDate(value);
    //     }
    // }


    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(ExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    } 

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2023-01-01' max='2026-12-31' value={setEnteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;