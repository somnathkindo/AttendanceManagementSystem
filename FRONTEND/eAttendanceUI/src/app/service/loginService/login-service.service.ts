import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LoginStatus {
  name: string;
  mail: string;
  role: number;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private loginStatusSubject = new BehaviorSubject<LoginStatus | null>(null); // Track login status with BehaviorSubject
  loginStatus$ = this.loginStatusSubject.asObservable();  // Expose the observable for other components to subscribe

  constructor() {}

  // Setter for LoginStatus
  setLoginStatus(status: LoginStatus): void {
    this.loginStatusSubject.next(status);  // Update the login status
  }

  // Getter for LoginStatus
  getLoginStatus(): LoginStatus | null {
    return this.loginStatusSubject.value;
  }

  // Getter for Status (whether the user is logged in)
  getStatus(): boolean {
    return this.loginStatusSubject.value?.status ?? false;
  }

  // Logout and reset login status
  logout(): void {
    this.loginStatusSubject.next(null);  // Reset the login status
  }
}
