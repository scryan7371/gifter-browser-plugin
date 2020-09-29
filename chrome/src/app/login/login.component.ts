import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ALERT_STATUS } from '../notification/notification';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  processing = false;
  loginForm;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService){
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f(): any{
    return this.loginForm.controls;
  }

  executeLogin = async (): Promise<void> => {
    try {
      this.processing = true;
      const username = this.f.username.value;
      const password = this.f.password.value;
      await this.loginService.login(username, password).toPromise();
      this.processing = false;
      this.notificationService.alert('Login Successful', ALERT_STATUS.SUCCESS);
    } catch (error) {
      this.processing = false;
      this.notificationService.alert('Login Failed', ALERT_STATUS.ERROR);
    }
  }
}
