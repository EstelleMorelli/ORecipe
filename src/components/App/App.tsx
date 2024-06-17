import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import Home from '../Home';
import Menu from '../Menu';
import Error from '../Error';
import Recipe from '../Recipe';
import Loading from './Loading';
import Favorites from '../Favorites/Favorites';
import { Recipe as IRecipe } from '../../@types/recipe';
import { addTokenToAxiosInstance } from '../../axios/axios';
import './App.scss';
import getRecipe from '../../middlewares/getRecipe';
import { getValuesFromStorage } from '../../localStorage/localStorage';
import checkLogin from '../../middlewares/checkLogin';
import { actionLogIn } from '../../store/reducers/user';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRecipe());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // objet avec token et pseudo
    const localStorageValues = getValuesFromStorage();
    if (localStorageValues.token && localStorageValues.pseudo) {
      // -> demander au reducer de faire le login
      dispatch(actionLogIn(localStorageValues.pseudo));
      // -> ajouter le token dans l'instance axios
      addTokenToAxiosInstance(localStorageValues.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const recipesList: IRecipe[] = useAppSelector((state) => state.recipes.list);
  const loading = useAppSelector((state) => state.recipes.isLoading);
  const logged = useAppSelector((state) => state.user.logged);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="" element={<Home />} />
        {logged && <Route path="/favorites" element={<Favorites />} />}
        {recipesList.map((currentRecipe) => (
          <Route
            key={currentRecipe.id}
            path={`/recipe/${currentRecipe.slug}`}
            element={<Recipe currentRecipe={currentRecipe} />}
          />
        ))}
        <Route
          path="*"
          element={
            <>
              <Menu />
              <Error />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
