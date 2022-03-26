import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Salmon Stir Fry', 
      'Healthy Weeknight Meal', 
      'https://www.saveur.com/uploads/2020/11/20/Y7RZPFZEERAZVHJ2VHC2RXMEEY.jpg?quality=85&width=540',
      [
        new Ingredient('Salmon', 4),
        new Ingredient('Green beans', 20)
      ]),
    new Recipe(
      'Another Recipe', 
      'This is a simple test', 
      'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg', 
      [
        new Ingredient('Shrimp', 6),
        new Ingredient('Broccoli', 10),
        new Ingredient('Rice', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }


}