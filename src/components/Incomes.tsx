import React, { useState } from 'react';

interface Income {
   category: string;
   amount: number;
}

interface IncomesProps {
   incomes: Income[];
   setIncomes: (incomes: Income[]) => void;
}

const Incomes: React.FC<IncomesProps> = ({ incomes, setIncomes }) => {
   const [category, setCategory] = useState('');
   const [amount, setAmount] = useState(0);

   const addIncome = () => {
      if (category && amount > 0) {
         setIncomes([...incomes, { category, amount }]);
         setCategory('');
         setAmount(0);
      }
   };

   const deleteIncome = (index: number) => {
      setIncomes([...incomes.slice(0, index), ...incomes.slice(index + 1)]);
   };

   const editIncome = (index: number, updatedIncome: Income) => {
      const updatedIncomes = [...incomes];
      updatedIncomes[index] = updatedIncome;
      setIncomes(updatedIncomes);
   };
   return (

      <div>
         <h2>Incomes</h2>
         <div>
            <label htmlFor="income-category">Category:</label>
            <input type="text" id="income-category" value={category} onChange={(e) => setCategory(e.target.value)} />
         </div>
         <div>
            <label htmlFor="income-amount">Amount:</label>
            <input type="number" id="income-amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
         </div>
         <button onClick={addIncome}>Add Income</button>
         <ul>
            {incomes.map((income, index) => (
               <li key={index}>
                  <span>{income.category}</span>
                  <span>{income.amount}</span>
                  <button onClick={() => deleteIncome(index)}>Delete</button>
                  <button onClick={() => editIncome(index, { category: 'Updated Category', amount: 100 })}>Edit</button>
               </li>
            ))}
         </ul>
      </div>
   );
};
export default Incomes; 