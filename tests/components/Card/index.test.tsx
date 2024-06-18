// on peut pas juste executer Card en lui filant en paramètr eun objet props et tester sa valeur retournée car Card renvoie du JSX donc on va simuler un render de ce JSX dans un fakeDOM (grace à notre customRender) et ensuite on pourra ecrire des assertions sur ce fake DOM avec les matchers de jest-dom qu'on a ajouté dans expect
// it et test c'est pareil
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../customRender';

// pour tester le composant Card on l'importe (c'est une fonction)
import Card from '../../../components/Card';

describe('Card Component', () => {
  it('Should render the card', () => {
    // on génère le faux rendu du composant <Card />
    // avec la fonction render custom qui ajoute autours de Card un provider, un browser router
    render(
      <Card
        title="Nems aux crevettes"
        thumbnail="/url-de-nems"
        difficulty="Facile"
        slug="nems-aux-crevettes"
      />
    );

    // on s'attends à avoir un élément avec le texte "Hello World" dans le DOM
    // https://testing-library.com/docs/queries/about
    expect(screen.getByText('Nems aux crevettes')).toBeInTheDocument();

    // on vérifie que le DOM dispose bien d'un lien contenant le texte "Voir la recette"
    expect(
      screen.getByRole('link', { name: 'Voir la recette' })
    ).toBeInTheDocument();
  });
});
