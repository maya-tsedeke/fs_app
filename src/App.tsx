import React, { useState } from "react";

type Transaction = {
  source: string;
  amount: number;
  date: string;
};

type Props = {
  incomes: Transaction[];
  expenses: Transaction[];
  balance: number;
  saving: number;
  setIncomes: React.Dispatch<React.SetStateAction<Transaction[]>>;
  setExpenses: React.Dispatch<React.SetStateAction<Transaction[]>>;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setSaving: React.Dispatch<React.SetStateAction<number>>;
};

const App: React.FC<Props> = ({
  incomes,
  expenses,
  balance,
  saving,
  setIncomes,
  setExpenses,
  setBalance,
  setSaving,
}) => {
  const [incomeSource, setIncomeSource] = useState<string>("");
  const [incomeAmount, setIncomeAmount] = useState<number>(0);
  const [incomeDate, setIncomeDate] = useState<string>("");

  const [expenseSource, setExpenseSource] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<number>(0);
  const [expenseDate, setExpenseDate] = useState<string>("");

  const [targetSaving, setTargetSaving] = useState<number>(0);

  const addIncome = () => {
    const newIncome: Transaction = {
      source: incomeSource,
      amount: incomeAmount,
      date: incomeDate,
    };
    setIncomes([...incomes, newIncome]);
    setBalance(balance + incomeAmount);
    setIncomeSource("");
    setIncomeAmount(0);
    setIncomeDate("");
  };

  const addExpense = () => {
    const newExpense: Transaction = {
      source: expenseSource,
      amount: expenseAmount,
      date: expenseDate,
    };
    setExpenses([...expenses, newExpense]);
    setBalance(balance - expenseAmount);
    setExpenseSource("");
    setExpenseAmount(0);
    setExpenseDate("");
  };

  const transferToSaving = () => {
    if (balance > 0) {
      setSaving(saving + balance);
      setBalance(0);
    }
  };

  const transferFromSaving = () => {
    if (saving > 0) {
      setBalance(balance + saving);
      setSaving(0);
    }
  };

  const resetTargetSaving = () => {
    setTargetSaving(0);
  };

  const incomeList = incomes.map((income) => (
    <li key={`${income.source}-${income.date}`}>
      {income.source}: {income.amount} Euro On {income.date}
    </li>
  ));

  const expenseList = expenses.map((expense) => (
    <li key={`${expense.source}-${expense.date}`}>
      {expense.source}: {expense.amount} Euro On {expense.date}
    </li>
  ));

  return (
    <div className="grid-container">
      <div className="grid-item">
        <h1>Income</h1>
        <div>
          <label>Source of Income:</label>
          <input
            type="text"
            value={incomeSource}
            onChange={(e) => setIncomeSource(e.target.value)}
          />
        </div>
        <div>
          <label>Amount of Income:</label>
          <input
            type="number"
            value={incomeAmount}
            onChange={(e) => setIncomeAmount(parseInt(e.target.value))}
          />
        </div>
        <div 
className="date">
<label>Date of Income:</label>
<input
type="date"
value={incomeDate}
onChange={(e) => setIncomeDate(e.target.value)}
/>
</div>
<button onClick={addIncome}>Add</button>
<h2>Income List</h2>
{incomeList.length > 0 ? (
<ul>{incomeList}</ul>
) : (
<p>No income added yet.</p>
)}
</div>
<div className="grid-item">
<h1>Expense</h1>
<div>
<label>Source of Expense:</label>
<input
type="text"
value={expenseSource}
onChange={(e) => setExpenseSource(e.target.value)}
/>
</div>
<div>
<label>Amount of Expense:</label>
<input
type="number"
value={expenseAmount}
onChange={(e) => setExpenseAmount(parseInt(e.target.value))}
/>
</div>
<div className="date">
<label>Date of Expense:</label>
<input
type="date"
value={expenseDate}
onChange={(e) => setExpenseDate(e.target.value)}
/>
</div>
<button onClick={addExpense}>Add</button>
<h2>Expense List</h2>
{expenseList.length > 0 ? (
<ul>{expenseList}</ul>
) : (
<p>No expense added yet.</p>
)}
</div>
<div className="grid-item">
<h1>Balance</h1>
<p>Your current balance is {balance} Euro.</p>
<button onClick={transferToSaving}>Transfer to Saving</button>
<button onClick={transferFromSaving}>Transfer from Saving</button>
<h1>Saving</h1>
<p>Your current saving is {saving} Euro.</p>
<div>
<label>Target Saving:</label>
<input
type="number"
value={targetSaving}
onChange={(e) => setTargetSaving(parseInt(e.target.value))}
/>
</div>
<button onClick={() => setSaving(saving + targetSaving)}>
Add to Saving
</button>
<button onClick={resetTargetSaving}>Reset Target Saving</button>
</div>
</div>
);
};

export default App;
