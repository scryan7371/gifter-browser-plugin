import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  processing = false;
  loginForm;

  constructor(private fb: FormBuilder){
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f(): any{
    return this.loginForm.controls;
  }

  ngOnInit(): void{
    // Check for login creds
  }

  executeLogin(): void{
  }
}
