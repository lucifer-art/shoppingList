import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.modal";
import { Recipe } from "./recipes.modal";

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

    recipeSelected = new Subject<Recipe>();
    // private recipes:Recipe[] = [
    //     new Recipe('Burger',
    //     'Test value 1',
    //     'https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg',
    //     [
    //         new Ingredient('Meat',1),
    //         new Ingredient('French Fries',1),
    //     ]),
    //     new Recipe('Maharaja Burger',
    //     'Test description 2',
    //     'https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg',
    //     [
    //         new Ingredient('Meat',1),
    //         new Ingredient('French Fries',1),
    //         new Ingredient('Pepsi',1),
    //     ])
    //   ];

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipe:Recipe[]) {
        this.recipes = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index]
    }

    addIngredientToShoppingList(ingredient: Ingredient[]){
        this.slService.addIngredients(ingredient);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number,newRecipe:Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }
}