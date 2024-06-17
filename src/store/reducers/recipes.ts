import { createReducer } from '@reduxjs/toolkit';
import data from '../../data';
import { Recipe } from '../../@types/recipe';
import getRecipe from '../../middlewares/getRecipe';
import getFavRecipe from '../../middlewares/getFavRecipe';
import { actionLogOut } from './user';

export interface RecipesState {
  list: Recipe[];
  isLoading: boolean;
  listFav: Recipe[];
  errorMessage: string;
}
export const initialState: RecipesState = {
  list: [],
  isLoading: false,
  listFav: [],
  errorMessage: '',
};

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRecipe.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getRecipe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    })
    .addCase(getRecipe.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(getFavRecipe.fulfilled, (state, action) => {
      state.listFav = action.payload;
    })
    .addCase(actionLogOut, (state) => {
      state.listFav = [];
    });
});

export default recipesReducer;
