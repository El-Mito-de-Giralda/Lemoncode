import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { DetailPage } from 'pods/detail/character-detail';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateQuotes = () => {
    navigate(linkRoutes.createQuotes);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editQuotes(id));
  };



  return (
    <>
    <CharacterCollectionComponent
      CharacterCollection={characterCollection}
      onCreateQuote={handleCreateQuotes}
      onEdit={handleEdit}
    />
   
    </>
  );
};
