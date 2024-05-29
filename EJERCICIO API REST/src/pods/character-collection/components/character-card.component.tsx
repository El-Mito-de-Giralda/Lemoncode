import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { linkRoutes } from 'core/router';
import { Link } from 'react-router-dom';


interface Props {
  character: CharacterEntityVm;
}

interface Quotes {
  onEdit: (id: string)=> void;
}

type UnionType= Props & Quotes;

export const CharacterCard: React.FunctionComponent<UnionType> = ({character, onEdit}) => {

  
  return (
    
    <Card>
      <Link to={linkRoutes.DetailPage(character.id)}>
      <CardHeader 
        title={character.name} 
       
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
          
          </Typography>
        </div>
      </CardContent>
      </Link>
      <CardActions>
      <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
   
    
  );
};
