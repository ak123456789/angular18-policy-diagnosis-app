import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Policy } from '../../models/policy.model';
import { PolicyService } from '../../services/policy.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-policy-list',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './policy-list.component.html',
  styleUrl: './policy-list.component.css'
})
export class PolicyListComponent implements OnInit {

  policies: Policy[] = [];
  selectedPolicy: Policy | null = null;

  loading = false;
  errorMessage = '';

  readonly apiMode = environment.useMockData ? 'Mock Data Mode' : 'Real API Mode';
  readonly apiUrl = environment.apiUrl;

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies(): void {
    this.loading = true;
    this.errorMessage = '';
    this.selectedPolicy = null;

    this.policyService.getPolicies().subscribe({
      next: (data: Policy[]) => {
        this.policies = data;
        this.loading = false;
        console.log('Policy data received:', data);
        console.table(data);
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = 'Unable to load policy data. Please check API URL, CORS, server status, and response format.';
        console.error('Policy API error:', error);
      }
    });
  }

  viewPolicy(policy: Policy): void {
    this.selectedPolicy = policy;
    console.log('Selected policy:', policy);
  }

  clearPolicies(): void {
    this.policies = [];
    this.selectedPolicy = null;
    this.errorMessage = '';
    console.log('Policy table cleared.');
  }

  get activeCount(): number { return this.policies.filter(policy => policy.status === 'Active').length; }
  get pendingCount(): number { return this.policies.filter(policy => policy.status === 'Pending').length; }
  get expiredCount(): number { return this.policies.filter(policy => policy.status === 'Expired').length; }
}
