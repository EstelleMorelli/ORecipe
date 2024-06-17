import './styles.scss';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import checkLogin from '../../middlewares/checkLogin';
import { actionChangeLogin, actionLogOut } from '../../store/reducers/user';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { removeTokenFromAxiosInstance } from '../../axios/axios';
import { removeValuesFromStorage } from '../../localStorage/localStorage';

function AppHeader() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.user.logins.email);
  const password = useAppSelector((state) => state.user.logins.password);
  const pseudo = useAppSelector((state) => state.user.pseudo);
  const logged = useAppSelector((state) => state.user.logged);
  const error = useAppSelector((state) => state.user.error);
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <div>
        <LoginForm
          email={email}
          password={password}
          changeField={(value: string, name: 'email' | 'password') => {
            dispatch(actionChangeLogin({ inputName: name, newValue: value }));
          }}
          handleLogin={() => {
            dispatch(checkLogin());
          }}
          handleLogout={() => {
            dispatch(actionLogOut());
            removeTokenFromAxiosInstance();
            removeValuesFromStorage();
          }}
          isLogged={logged}
          loggedMessage={`Bonjour ${pseudo}`}
        />
        {error && <p className="error">{error}</p>}
      </div>
    </header>
  );
}

export default AppHeader;
