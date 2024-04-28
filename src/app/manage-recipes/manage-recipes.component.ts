import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Recipe {
  id: number;
  name: string;
  category: string;
  publisher: string;
}

interface Comment {
  id: number;
  recipe_id: number;
  poster: string;
  content: string;
}

@Component({
  selector: 'app-manage-recipes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manage-recipes.component.html',
  styleUrl: './manage-recipes.component.css',
})
export class ManageRecipesComponent {
  public recipes: Recipe[] = [
    {
      id: 0,
      name: 'Crepe',
      category: 'Dessert',
      publisher: 'Mr. Dayekh Rayen',
    },
    {
      id: 1,
      name: 'Brownies',
      category: 'Dessert',
      publisher: 'Mr. Ben Amira Ilyes',
    },
  ];

  public comments: Comment[] = [
    { id: 0, recipe_id: 0, content: 'content', poster: 'Rayen Dayekh' },
  ];

  public showComments: boolean = false;
  public shownComments: Comment[] = [];

  constructor() {}

  public changeComments(recipeId: number): void {
    this.showComments = true;
    this.shownComments = this.comments.filter((c) => c.recipe_id === recipeId);
    console.log(this.shownComments);
  }

  public deleteRecipe(recipeId: number): void {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
  }

  public deleteComment(commentId: number) {
    this.comments = this.comments.filter((comment) => comment.id !== commentId);
    this.shownComments = this.comments;
  }
}
