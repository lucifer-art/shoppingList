import { RecipeService } from './recipes.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Recipe } from './recipes.modal';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorage:DataStorageService,private recipeService:RecipeService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.recipeService.getRecipes();
        if(recipes.length === 0) {
            return this.dataStorage.fetchRecipe();
        } else {
            return recipes;
        }
        
        // throw new Error('Method not implemented.');
    }

}