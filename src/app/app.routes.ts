import { Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';
import { FeedComponent } from './feed/feed.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

export const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent },
  { path: 'admin/manage-recipes', component: ManageRecipesComponent },
  { path: 'admin/manage-categories', component: ManageCategoriesComponent },
  { path: 'admin/manage-users', component: ManageUsersComponent },
];
