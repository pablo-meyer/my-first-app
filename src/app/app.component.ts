import { Component } from '@angular/core';
import { ShoppingListService } from './services/shoppingList.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  section = 'Recipes';
  navigate(section: string) {
    this.section = section;
  }
}
