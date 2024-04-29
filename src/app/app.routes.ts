import { Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
];
