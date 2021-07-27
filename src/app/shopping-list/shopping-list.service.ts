import { Ingredient } from './../shared/ingredient.modal';
import { Subject } from 'rxjs';
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient('Sandwich',28),
        new Ingredient('Apple',18),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
        console.log(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}