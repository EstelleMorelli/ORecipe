import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

import getFavRecipe from '../../middlewares/getFavRecipe';

function Favorites() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFavRecipe());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  // on recupere dans le state les recettes pref du user connecté
  const recipesPref = useAppSelector((state) => state.recipes.listFav);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Mes recettes préférées"
        text="Les meilleures"
        recipes={recipesPref}
      />
    </Page>
  );
}

export default Favorites;
