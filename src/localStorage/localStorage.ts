// fonction qui ajoute le token dans le localstorage
// -> executée à la connexion
export const addValuesToStorage = (token: string, pseudo: string) => {
  localStorage.setItem('jwt', token);
  localStorage.setItem('pseudo', pseudo);
};

// fonction qui enleve le token du localStorage
// -> executé au click sur le bouton deconnexion
export const removeValuesFromStorage = () => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('pseudo');
};

// fonction qui recupère la valeur du token dans le localStorage
// -> executée au premier rendu le l'app
// renvoi le token ou undefined
export const getValuesFromStorage = () => {
  return {
    token: localStorage.getItem('jwt'),
    pseudo: localStorage.getItem('pseudo'),
  };
};
