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
    status: Models.LoanStatus.Complete,
  },
] as Models.Loan[];
