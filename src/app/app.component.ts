import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WelcomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
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
}
