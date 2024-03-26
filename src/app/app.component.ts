import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WelcomeComponent,
    CommonModule,
    ServicesComponent,
    ContactComponent,
    AddRecipeComponent,
    SignInComponent,
    RouterLinkActive,
    SignUpComponent,
    RouterLink,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isSubscribed: boolean = true;
  constructor(private readonly httpClient: HttpClient) {}

  toHome() {
    document.getElementById('Welcome')?.scrollIntoView({ behavior: 'smooth' });
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
}
