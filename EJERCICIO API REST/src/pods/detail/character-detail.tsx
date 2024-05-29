import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CharacterEntityApi } from 'pods/character-collection/api';
import * as classe from "../character-collection/detail.styles";
import { Card } from '@mui/material';
import {CardActions} from '@mui/material';
import {IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


interface Props {
  character: CharacterEntityApi;
  onEdit: (id: string)=> void;
  quotes: string[];
}

export const DetailPage: React.FunctionComponent<Props> = ({ character, onEdit, quotes }) => {
  const { id } = useParams();

  return (
    <div>
      {character && (
        <div>
          <h1>Detalles</h1>
          <img src={character.image} alt={`${character.name}`} />
          <p>Name: {character.name}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
          <p>{character.bestquotes.map((quote, index)=> (
            <li key={index}>{quote}</li>
          ))}</p>
        </div>
      )}


<Card>
      <CardActions>
      <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
   

    </div>
  
      
);
};