import { Recipe } from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Cake', 'Chocolate Cake', 'https://cdn.pinchofyum.com/wp-content/uploads/Chocolate-Cake-5-1-Yoast.jpg'),
        new Recipe('Fake Cake', 'Chocolate Cake', 'https://cdn.pinchofyum.com/wp-content/uploads/Chocolate-Cake-5-1-Yoast.jpg')
    ];
    recipeClicked = new EventEmitter<Recipe>();
    getRecipes() {
        return this.recipes.slice();
    }
}
