# Angular 18 Policy Diagnosis App

This is a GitHub-ready Angular 18 application that shows how to diagnose and display policy data on an Angular page.

## Includes

- Angular 18 standalone app structure
- `Policy` model
- `PolicyService`
- Mock policy data, so the app runs without a backend
- Optional real API call for a .NET Core backend
- Loading state, error handling, and browser console diagnosis
- Angular 18 `@if` and `@for` template control flow
- Clean policy details UI

## Run locally

```bash
npm install
npm start
```

Open:

```text
http://localhost:4200
```

## Connect to .NET Core API

Open:

```text
src/app/environments/environment.ts
```

Change:

```ts
useMockData: true
```

to:

```ts
useMockData: false
```

Then update `apiUrl` to your real backend URL.

## Expected API response

```json
[
  {
    "policyId": 1,
    "policyNumber": "POL-10001",
    "policyHolderName": "Amit Patel",
    "policyType": "Health Insurance",
    "startDate": "2026-01-01",
    "endDate": "2026-12-31",
    "status": "Active",
    "premiumAmount": 249.99
  }
]
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial Angular 18 policy diagnosis app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/angular18-policy-diagnosis-app.git
git push -u origin main
```
