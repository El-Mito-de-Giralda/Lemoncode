import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { updateCharacterQuotes } from './api';
import { CharacterComponent } from './character.component';
import { linkRoutes } from 'core/router';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState("");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();


  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editQuotes(id));
  };

const handleSave = async ()=> {


    } 


  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, [id]);

  return (
  <CharacterComponent 
    character={character} 
    onEdit={handleEdit} 
    onSave={handleSave}
     />
  );
};
