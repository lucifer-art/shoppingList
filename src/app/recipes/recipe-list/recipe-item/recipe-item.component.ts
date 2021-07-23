import { RecipeService } from './../../recipes.service';
import { Recipe } from './../../recipes.modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  recipe!: Recipe;
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    console.log("adsdasd");
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
