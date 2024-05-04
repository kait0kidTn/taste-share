import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [FormsModule, CommonModule],
})
export class SignUpComponent {
  name: string = '';
  famname: string = '';
  email: string = '';
  password: string = '';

  constructor(private readonly httpClient: HttpClient) {}

  signup() {
    const userData = {
      name: this.name,
      famname: this.famname,
      email: this.email,
      password: this.password,
    };

    this.httpClient
      .post<any>('http://localhost/phpfiles/signup.php', userData)
      .subscribe(
        (response) => {
          console.log('Signup successful:', response);
          // Reset form fields after successful signup
          this.name = '';
          this.famname = '';
          this.email = '';
          this.password = '';
        },
        (error) => {
          console.error('Signup error:', error);
        }
      );
  }
}
