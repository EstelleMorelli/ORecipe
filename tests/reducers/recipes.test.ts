// import des outils de vitest
import { describe, test, expect } from 'vitest';

// import du reducer à tester
// on a créé notre reducer avec l'aide de createReducer de toolkit mais on se souvient parce qu'on a fait des redcuers à la main sans toolkit que un reducer c'est une fonction qui prend en param le state et une action et qui doit return un nouveau state
import recipesReducer, { RecipesState } from '../../store/reducers/recipes';
import data from '../../data';

// tests possibles :
// - reducer executé avec un state contenant une liste de recettes vide + une action "getRecipes.fulfilled" avec un tableau de 2 recettes en payload doit renvoyer un nouveau state avec les 2 recettes dedans

describe('recipe reducer test', () => {
  test('reducer called with state with empty recipes array and action "getRecipes.fulfilled" with 2 recipes in payload whould return new state with the 2 recipes', () => {
    // GIVEN - Arrange - les données de depart, les params
    const stateBefore: RecipesState = {
      list: [],
      isLoading: false,
      listFav: [],
      errorMessage: '',
    };
    const actionGet2RecipesInPayload = {
      type: 'GET_RECIPE/fulfilled',
      payload: data,
    };

    // WHEN - Act - execution de notre fonction
    const returnedState = recipesReducer(
      stateBefore,
      actionGet2RecipesInPayload
    );

    // THEN - Assert - on s'attend à recevoir après le when une valeur précise
    const stateAfter = {
      list: data, // les recettes dans list
      isLoading: false, // le loading à false
      listFav: [],
      errorMessage: '',
    };
    expect(returnedState).toEqual(stateAfter);
  });
});
