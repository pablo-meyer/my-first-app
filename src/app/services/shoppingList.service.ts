import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Flour', 200),
        new Ingredient('Sugar', 50)
      ];

      getAll() {
          return this.ingredients;
      }
      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
      }
}
