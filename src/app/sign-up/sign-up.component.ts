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
  constructor(private readonly httpClient: HttpClient) {}
  public passwordType: string = 'password';
  public changePasswordType(checked: boolean) {
    this.passwordType = checked ? 'text' : 'password';
  }
  signup(username: string, email: string, password: string) {
    console.log({ username, email, password });

    this.httpClient
      .post('http://localhost/signup.php', { username, email, password })
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
