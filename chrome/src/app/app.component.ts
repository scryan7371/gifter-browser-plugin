import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  user;

  ngOnInit(): void{
    // Check for Login Creds
    const authToken = sessionStorage.getItem('authToken');
    if (authToken) {
      this.isLoggedIn = true;
    }
    const user = sessionStorage.getItem('user');
  }
}
