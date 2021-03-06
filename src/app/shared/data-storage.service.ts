import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";


@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipesService: RecipeService) { }

    storeRecipes() {
        const RECİPES = this.recipesService.getRecipes();
        this.http.put('https://ng-recipe-book-33b1a-default-rtdb.firebaseio.com/recipes.json', RECİPES)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
         return this.http
            .get<Recipe[]>('https://ng-recipe-book-33b1a-default-rtdb.firebaseio.com/recipes.json'
            )
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        };
                    });
                }),
                tap(recipes => {
                    this.recipesService.setRecipes(recipes);
                })
                )
           
    }
}
