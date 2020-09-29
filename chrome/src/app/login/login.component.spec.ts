import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  });
  it('should create the login component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });
});
