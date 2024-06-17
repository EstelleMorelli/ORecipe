import { createAction, createReducer } from '@reduxjs/toolkit';
import checkLogin from '../../middlewares/checkLogin';

interface UserState {
  logged: boolean;
  logins: { email: string; password: string };
  pseudo: string;
  error: null | string;
  token: null | string;
}
export const initialState: UserState = {
  logged: false,
  logins: { email: '', password: '' },
  pseudo: '',
  error: null,
  token: null,
};

export const actionChangeLogin = createAction<{
  inputName: 'email' | 'password';
  newValue: string;
}>('user/CHANGE_LOGIN');

export const actionLogOut = createAction('user/LOGOUT');
export const actionLogIn = createAction('user/LOGIN');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionChangeLogin, (state, action) => {
      state.logins[action.payload.inputName] = action.payload.newValue;
    })
    .addCase(checkLogin.fulfilled, (state, action) => {
      state.logged = true;
      state.pseudo = action.payload.pseudo;
      state.error = null;
      state.token = action.payload.token;
    })
    .addCase(checkLogin.rejected, (state, action) => {
      state.error = 'Erreur de connexion...';
    })
    .addCase(actionLogIn, (state, action) => {
      // le thunk a réussit sa requete vers /login
      // enregistrer le pseudo dans le state
      state.pseudo = action.payload;
      // passer logged à true
      state.logged = true;
    })
    .addCase(actionLogOut, (state) => {
      state.pseudo = '';
      state.logins.email = '';
      state.logins.password = '';
      state.logged = false;
    });
});

export default userReducer;
