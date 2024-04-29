import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    WelcomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
})
export class HomeComponent {
  isSubscribed: boolean = false;

  toHome() {
    document.getElementById('Welcome')?.scrollIntoView({ behavior: 'smooth' });
  }

  toServices() {
    document.getElementById('Services')?.scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById('Aboutt')?.scrollIntoView({ behavior: 'smooth' });
  }
  toContact() {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
