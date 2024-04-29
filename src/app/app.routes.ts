import { Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';
import { FeedComponent } from './feed/feed.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';

export const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent },
  { path: 'admin/manage-recipes', component: ManageRecipesComponent },
];
