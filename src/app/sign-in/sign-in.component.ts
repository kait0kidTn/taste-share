import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private readonly httpClient: HttpClient) {}
  public passwordType: string = 'password';
  public changePasswordType(checked: boolean) {
    this.passwordType = checked ? 'text' : 'password';
  }
  login(email: string, password: string) {
    console.log({ email, password });

    this.httpClient
      .post('http://localhost/login.php', { email, password })
      .subscribe(
        (response) => {
          console.log('Login successful:', response);
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
  }
}
