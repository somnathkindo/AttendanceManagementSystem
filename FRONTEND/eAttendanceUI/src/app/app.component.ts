import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginServiceService } from './service/loginService/login-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'eAttendanceUI';
  lg: boolean = false;  // Represents the login status (true if logged in, false otherwise)
  private statusSubscription: Subscription = new Subscription();  // Subscription to login status changes

  constructor(private loginService: LoginServiceService,private router:Router) {}

  ngOnInit(): void {
    // Subscribe to the login status observable to get updates
    this.statusSubscription = this.loginService.loginStatus$.subscribe(status => {
      this.lg = status?.status ?? false;  // Update lg based on the login status
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the status observable to avoid memory leaks
    this.statusSubscription.unsubscribe();
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
    window.history.replaceState(null, '', '/login');
  }
}
