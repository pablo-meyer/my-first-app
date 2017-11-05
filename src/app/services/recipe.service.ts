import { Recipe } from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('Cake', 'Chocolate Cake', 'https://cdn.pinchofyum.com/wp-content/uploads/Chocolate-Cake-5-1-Yoast.jpg',
        [new Ingredient('Water', 200), new Ingredient('Flour', 100)]),
        new Recipe('Fake Cake', 'Chocolate Cake', 'https://cdn.pinchofyum.com/wp-content/uploads/Chocolate-Cake-5-1-Yoast.jpg',
        [new Ingredient('Chocolate', 200), new Ingredient('Sugar', 100)]),
    ];
    recipeClicked = new EventEmitter<Recipe>();
    getRecipes() {
        return this.recipes.slice();
    }
}
