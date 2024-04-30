import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {


  

  

  constructor(private readonly httpClient: HttpClient , private router : Router) {}

  public passwordType: string = 'password';

  public changePasswordType(checked: boolean) {
    this.passwordType = checked ? 'text' : 'password';
  }













  
    login(email: string, password: string) {
      console.log({ email, password });
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };
      const jsondata = { "email":email, "password" : password }
      this.httpClient
        .post<any>('http://localhost/phpfiles/login.php', JSON.stringify(jsondata),httpOptions)
        .subscribe(
          (response) => {
            console.log('Login successful:', response);
            if (response.role == "user") {
              // If user is found
              this.router.navigate(['/home']);
              
            } else if (response.role == "Admin") {
              // If admin is found, alert "Admin"
              this.router.navigate(['/admin']);
            } else {
              // If neither user nor admin is found, alert "None"
              alert('None');
            }
          },
          (error) => {
            console.error('Login error:', error);
            // Handle error
            alert('An error occurred while logging in');
          }
        );
    }
  }


 