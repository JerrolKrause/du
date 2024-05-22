import { Models } from '../../app/shared/models';

export default [
  {
    id: 10001234,
    type: Models.LoanType.Secured,
    status: Models.LoanStatus.Pending,
  },
  {
    id: 10002345,
    type: Models.LoanType.Unsecured,
    status: Models.LoanStatus.Pending,
  },
  {
    id: 10003456,
    type: Models.LoanType.Secured,
    status: Models.LoanStatus.Active,
    ballance: 4278.34,
    lastPayment: 253.28,
    lastPaymentDate: '2024-04-15',
  },
] as Models.Loan[];
