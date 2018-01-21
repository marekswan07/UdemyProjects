import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'testing the desc', 'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d'),
    new Recipe('A Test recipe', 'testing the desc', 'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
