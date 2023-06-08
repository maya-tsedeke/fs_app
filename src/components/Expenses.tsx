import { useState } from "react";

interface Expense {
   category: string;
   amount: number;
   }
   
   interface ExpensesProps {
   expenses: Expense[];
   setExpenses: (expenses: Expense[]) => void;
   }
   
   const Expenses: React.FC<ExpensesProps> = ({ expenses, setExpenses }) => {
   const [category, setCategory] = useState('');
   const [amount, setAmount] = useState(0);
   
   const addExpense = () => {
   if (category && amount > 0) {
   setExpenses([...expenses, { category, amount }]);
   setCategory('');
   setAmount(0);
   }
   };
   
   const deleteExpense = (index: number) => {
   setExpenses([...expenses.slice(0, index), ...expenses.slice(index + 1)]);
   };
   
   const editExpense = (index: number, updatedExpense: Expense) => {
   const updatedExpenses = [...expenses];
   updatedExpenses[index] = updatedExpense;
   setExpenses(updatedExpenses);
   };
   
   return (
   <div>
   <h2>Expenses</h2>
   <div>
   <label htmlFor="expense-category">Category:</label>
   <input type="text" id="expense-category" value={category} onChange={(e) => setCategory(e.target.value)} />
   </div>
   <div>
   <label htmlFor="expense-amount">Amount:</label>
   <input type="number" id="expense-amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
   </div>
   <button onClick={addExpense}>Add Expense</button>
   <ul>
   {expenses.map((expense, index) => (
      <li key={index}>
      <span>{expense.category} - ${expense.amount}</span>
      <button onClick={() => deleteExpense(index)}>Delete</button>
      <button onClick={() => editExpense(index, { category: "updated category", amount: 100 })}>Edit</button>
      </li>
      ))}
      </ul>
      </div>
      );
      };
      export default Expenses;