import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';
import { environment } from '../environments/environment';
import { Policy } from '../models/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private readonly apiUrl = environment.apiUrl;

  private readonly mockPolicies: Policy[] = [
    { policyId: 1, policyNumber: 'POL-10001', policyHolderName: 'Amit Patel', policyType: 'Health Insurance', startDate: '2026-01-01', endDate: '2026-12-31', status: 'Active', premiumAmount: 249.99 },
    { policyId: 2, policyNumber: 'POL-10002', policyHolderName: 'Neha Shah', policyType: 'Auto Insurance', startDate: '2026-02-15', endDate: '2027-02-14', status: 'Pending', premiumAmount: 149.50 },
    { policyId: 3, policyNumber: 'POL-10003', policyHolderName: 'Ravi Mehta', policyType: 'Life Insurance', startDate: '2025-04-01', endDate: '2035-03-31', status: 'Active', premiumAmount: 89.00 },
    { policyId: 4, policyNumber: 'POL-10004', policyHolderName: 'Priya Desai', policyType: 'Home Insurance', startDate: '2024-06-01', endDate: '2025-05-31', status: 'Expired', premiumAmount: 199.75 }
  ];

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<Policy[]> {
    if (environment.useMockData) {
      return of(this.mockPolicies).pipe(delay(500));
    }

    return this.http.get<Policy[]>(this.apiUrl);
  }

  getPolicyById(policyId: number): Observable<Policy | undefined> {
    if (environment.useMockData) {
      const policy = this.mockPolicies.find(item => item.policyId === policyId);
      return of(policy).pipe(delay(300));
    }

    return this.http.get<Policy>(`${this.apiUrl}/${policyId}`);
  }
}
