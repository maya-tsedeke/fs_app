import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App 
    incomes={[]}
    expenses={[]}
    balance={0}
    saving={0}
    setIncomes={() => {}}
    setExpenses={() => {}}
    setBalance={() => {}}
    setSaving={() => {}}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
