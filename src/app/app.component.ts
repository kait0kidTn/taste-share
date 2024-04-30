import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, provideRouter } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
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
    AboutComponent,
    RouterLink,
    HttpClientModule,
    ManageUsersComponent,
    ManageCategoriesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private readonly httpClient: HttpClient) {}
  isSubscribed?: boolean;
}
