import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  CharacterCollection: CharacterEntityVm[];
  onCreateQuote: () => void;
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  { CharacterCollection, onEdit, onCreateQuote }
) => {


  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateQuote}>
        Add Quote
      </Button>

      <ul className={classes.list}>
        {CharacterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit}  />
          </li>
        ))}
      </ul>
    </div>
  );
};
