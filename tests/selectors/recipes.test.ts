import { test, expect, describe } from 'vitest';
import { findRecipe, getTitle } from '../../store/selectors/recipes';
import data from '../../data';
import { Recipe } from '../../@types/recipe';

describe('tests structure', () => {
  test('findRecipe exist', () => {
    expect(findRecipe).toBeDefined();
  });
  test('findRecipe is a function', () => {
    expect(findRecipe).toBeTypeOf('function');
  });
});

describe('tests exécution', () => {
  test('find the data recipes from the slug with a strict equality', () => {
    expect(findRecipe(data, 'crepes-raffinees')).toStrictEqual(data[0]);
  });
  test('findRecipe called with and empty recipe array and a slug return undefined', () => {
    // on prépare des paramètres pour notre fonction
    const fakeEmptyRecipeArray: Recipe[] = [];
    const fakeSlug = 'nems au poulet';

    expect(findRecipe(fakeEmptyRecipeArray, fakeSlug)).toBeUndefined();
  });
  test('find the data recipes', () => {
    expect(findRecipe(data, '')).toBeUndefined();
  });

  test('find the data recipes', () => {
    expect(findRecipe(data, 'crepes')).toBe(undefined);
  });
});

describe('getTitle', () => {
  test('getTitle should be a function', () => {
    expect(getTitle).toBeTypeOf('function');
  });

  test('getTitle should return a string title', () => {
    expect(getTitle()).toBeTypeOf('string');
  });
  test('getTitle should return specific title "Voici notre recette" if the state contains exacty 1 recipe', () => {
    expect(getTitle([data[1]])).toBe('Voici notre recette');
  });
  test('getTitle should return specific title "Voici nos 2 recettes" if the state contains exactly 2 recipes', () => {
    expect(getTitle(data)).toBe('Voici nos 2 recettes');
  });
  test('getTitle should return specific title "Pas de recette" if state contains an empty array', () => {
    expect(getTitle([])).toBe('Pas de recette');
  });
});
