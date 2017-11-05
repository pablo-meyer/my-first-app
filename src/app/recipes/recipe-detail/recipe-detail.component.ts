import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../services/shoppingList.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
   constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  sendToCart() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredientes);
  }

}
