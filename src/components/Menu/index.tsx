import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import './styles.scss';

function Menu() {
  const recipes = useAppSelector((state) => state.recipes.list);
  const logged = useAppSelector((state) => state.user.logged);
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'menu-link menu-link--active' : 'menu-link'
        }
        to="/"
      >
        Accueil
      </NavLink>
      {logged && (
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
        >
          Mes recettes pref ❤️
        </NavLink>
      )}
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
