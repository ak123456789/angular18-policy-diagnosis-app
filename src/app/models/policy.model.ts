export interface Policy {
  policyId: number;
  policyNumber: string;
  policyHolderName: string;
  policyType: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Pending' | 'Expired' | 'Cancelled';
  premiumAmount: number;
}
