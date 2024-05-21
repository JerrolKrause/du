/**
 * Global model definitions
 *
 * There are 2 module declarations in this file. 1 is for custom hand coded models, the other is for automatically generated ones from swagger
 *
 * Custom model definitions
 *
 */
export module Models {
  export interface Auth {
    data: {
      userGuid: string;
      token: string;
      expires?: string;
      expirationSeconds?: number;
    };
    success: boolean;
    meta: { requestTraceId: string };
  }

  export interface User {
    id: number;
    name?: string;
    username: string;
    email?: string;
    favColor?: Color;
    website?: string;
    phone?: string;
  }

  export enum Color {
    red,
    blue,
    orange,
  }

  export interface Loan {
    id: number;
    type: LoanType;
    status: LoanStatus;
  }

  export enum LoanStatus {
    Pending = 'PENDING',
    Complete = 'COMPLETE',
  }

  export enum LoanType {
    Secured = 'SECURED',
    Unsecured = 'UNSECURED',
  }

  interface LoanDetails {
    id: number;
    type: LoanType;
    verifications: Verification[];
  }

  interface Verification {
    type: VerificationTypes;
    status: VerificationStatus;
  }

  enum VerificationTypes {
    Identity,
    Income,
    Vehicle,
  }

  enum VerificationStatus {
    New,
    Submitted,
    ActionRequired,
    Verified,
  }
}

/**
 * Models automatically generated from swagger with nswagstudio
 *
 * Generate models with NSwagStudio: https://github.com/RSuter/NSwag/wiki/NSwagStudio
 * Make sure to point at the docs url in the top green header
 * IE http://localhost:57462/swagger/docs/v1
 * NOT http://localhost:57462/swagger/ui/index#/

 Config Options:
  - Set namespace to Models
  - TS version 2.7
  - Generate DTO types: Checked
  - Type Style: Interface
  - Null Value: Null
  - Leave everything else blank or unchecked here
  - Remove redundent " | undefined" from each one
 */
export module Models {
  /********************************
   *  BEGIN NSWAG STUDIO COPY/PASTE
   ********************************/
  /********************************
   *  END NSWAG STUDIO COPY/PASTE
   ********************************/
}
