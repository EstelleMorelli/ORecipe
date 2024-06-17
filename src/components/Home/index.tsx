import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';
import { useAppSelector } from '../../hooks/redux';
import { getTitle } from '../../store/selectors/recipes';

function Home() {
  const recipes = useAppSelector((state) => state.recipes.list);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={getTitle(recipes)}
        recipes={recipes}
      />
    </Page>
  );
}

export default Home;
