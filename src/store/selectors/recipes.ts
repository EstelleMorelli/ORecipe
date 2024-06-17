/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

import { Recipe } from '../../@types/recipe';

export function findRecipe(
  recipes: Recipe[],
  searchedSlug: string | undefined
) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

export const getTitle = (recipeList: Recipe[] = []) => {
  if (recipeList.length === 1) {
    return `Voici notre recette`;
  }
  if (recipeList.length > 1) {
    return `Voici nos ${recipeList.length} recettes`;
  }
  return 'Pas de recette';
};
