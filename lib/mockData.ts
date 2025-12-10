export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  status: 'completed' | 'pending' | 'failed';
}

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '2025-12-01T10:30:00Z',
    description: 'Salary Deposit',
    amount: 2500.00,
    type: 'credit',
    status: 'completed'
  },
  {
    id: '2',
    date: '2025-12-02T14:15:00Z',
    description: 'Grocery Store',
    amount: 156.78,
    type: 'debit',
    status: 'completed'
  },
  {
    id: '3',
    date: '2025-12-03T09:45:00Z',
    description: 'Electric Bill',
    amount: 89.50,
    type: 'debit',
    status: 'pending'
  },
  {
    id: '4',
    date: '2025-12-04T16:20:00Z',
    description: 'Freelance Payment',
    amount: 750.00,
    type: 'credit',
    status: 'completed'
  },
  {
    id: '5',
    date: '2025-12-05T11:10:00Z',
    description: 'Online Shopping',
    amount: 234.99,
    type: 'debit',
    status: 'failed'
  },
  {
    id: '6',
    date: '2025-12-06T13:30:00Z',
    description: 'Restaurant',
    amount: 67.45,
    type: 'debit',
    status: 'completed'
  },
  {
    id: '7',
    date: '2025-12-07T15:45:00Z',
    description: 'Bonus Payment',
    amount: 500.00,
    type: 'credit',
    status: 'completed'
  }
];
