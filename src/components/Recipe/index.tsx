/* eslint-disable arrow-body-style */
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Page from '../Page';
import AppHeader from '../AppHeader';

import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { Recipe as IRecipe } from '../../@types/recipe';

import './styles.scss';

interface RecipeProps {
  currentRecipe: IRecipe;
}

function Recipe({ currentRecipe }: RecipeProps) {
  if (!currentRecipe) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={currentRecipe.title}
          thumbnail={currentRecipe.thumbnail}
          author={currentRecipe.author}
          difficulty={currentRecipe.difficulty}
        />
        <Ingredients list={currentRecipe.ingredients} />
        <Instructions steps={currentRecipe.instructions} />
      </div>
    </Page>
  );
}

export default Recipe;
