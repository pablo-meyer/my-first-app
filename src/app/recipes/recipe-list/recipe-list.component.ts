import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectRecipeItem= new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Cake', 'Chocolate Cake', 'https://cdn.pinchofyum.com/wp-content/uploads/Chocolate-Cake-5-1-Yoast.jpg'),
    new Recipe('Cake', 'Chocolate Cake', 'https://cdn.pinchofyum.com/wp-content/uploads/Chocolate-Cake-5-1-Yoast.jpg')
  ];
  constructor() { }
  onSelected(recipe: Recipe) {
    console.log(recipe);
    this.selectRecipeItem.emit(recipe);
  }
  ngOnInit() {
  }

}
