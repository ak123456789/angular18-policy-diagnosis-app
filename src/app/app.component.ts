import { Component } from '@angular/core';
import { PolicyListComponent } from './components/policy-list/policy-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PolicyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 18 Policy Diagnosis App';
}
