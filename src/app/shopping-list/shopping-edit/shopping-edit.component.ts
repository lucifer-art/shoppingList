import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.modal';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:true})
  nameInputRef!: ElementRef;
  @ViewChild('amountInput',{static:true})
  amountInputRef!: ElementRef;
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(event: any) {
    event.preventDefault();
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
    this.slService.addIngredient(newIngredient);
  }

}