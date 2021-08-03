import { RecipeService } from './../recipes/recipes.service';
import { Recipe } from './../recipes/recipes.modal';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private http:HttpClient,private recipeService: RecipeService){}

    storeRecipe() {
        const recipe = this.recipeService.getRecipes();
        this.http.put('https://angular-practice-546fd-default-rtdb.firebaseio.com/recipe.json',recipe).subscribe(response => {
            console.log(response);
        })
    }

    fetchRecipe() {
        return this.http.get<Recipe[]>('https://angular-practice-546fd-default-rtdb.firebaseio.com/recipe.json').pipe(map((response: Recipe[]) => {
            return response.map(rec => {
                return { ...rec, ingredients: rec.ingredients ? rec.ingredients : [] }
            })
        }),
        tap(response=>{
            console.log(response);
            this.recipeService.setRecipes(response);
        })
        )
    }
}