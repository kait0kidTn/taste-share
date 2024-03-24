import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WelcomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public passwordType: string = 'password';

  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  toServices() {
    document.getElementById('Services')?.scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
  }
  toContact() {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  public changePasswordType(checked: boolean) {
    this.passwordType = checked ? 'text' : 'password';
  }
  login(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    this.http.post('http://localhost/login.php', formData).subscribe(
      (response) => {
        console.log('Login successful:', response);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }

  signup(username: string, email: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    this.http.post('http://localhost/signup.php', formData).subscribe(
      (response) => {
        console.log('Signup successful:', response);
      },
      (error) => {
        console.error('Signup error:', error);
      }
    );
  }
}
