import { describe, expect, it } from 'vitest';
import { render, screen } from '../../customRender';
import Content from '../../../components/Content';
import data from '../../../data';

describe('Content Component', () => {
  it('Should render the content', () => {
    render(
      <Content
        title="Le titre de la recette"
        text="Le texte de la recette"
        recipes={data}
      />
    );
    expect(screen.getByText('Le titre de la recette')).toBeInTheDocument();
    expect(screen.getByText('Le texte de la recette')).toBeInTheDocument();
  });
});
