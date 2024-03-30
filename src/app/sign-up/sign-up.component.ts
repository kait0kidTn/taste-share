import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  passwordSignup: any;
  confirmPasswordSignup: any;
  constructor(private readonly httpClient: HttpClient) {}
  public passwordType: string = 'password';
  public confirmPasswordType: string = 'password';
  public passwordMismatch: boolean = false;
  public changePasswordType(checked: boolean) {
    this.passwordType = checked ? 'text' : 'password';
  }
  public changeConfirmPasswordType(checked: boolean) {
    this.confirmPasswordType = checked ? 'text' : 'password';
  }
  public changePasswordType1(checked: boolean) {
    this.passwordType = checked ? 'text' : 'password';
  }
  public validatePasswords() {
    const password = this.passwordSignup.value;
    const confirmPassword = this.confirmPasswordSignup.value;
    this.passwordMismatch = password !== confirmPassword;
  }
  signup(name: string, famname: string, email: string, password: string) {
    console.log({ name, famname, email, password });

    this.httpClient
      .post('http://localhost/signup.php', { name, email, password })
      .subscribe(
        (response) => {
          console.log('Signup successful:', response);
        },
        (error) => {
          console.error('Signup error:', error);
        }
      );
  }
}
