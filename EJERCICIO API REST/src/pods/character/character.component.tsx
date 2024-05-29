import React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useParams } from 'react-router-dom';
import * as text from "./character.styles";
import { CharacterEntityApi} from 'pods/character-collection/api';
import { Character } from './api';
import { updateCharacterQuotes } from './api';


interface Props {
  character: CharacterEntityApi;
  onEdit: (id: string)=> void;
  onSave: (id: string)=> void;
}

export const generarClave= (id)=> {
  let sufijo=0;
    var clave= `UserInput_${id}_${sufijo}`;
    console.log(clave);
  return {clave};
};


export const CharacterComponent: React.FunctionComponent<Props> = ({ character, onSave, onEdit }) => {
  const { id } = useParams();
  const [texto, setTexto] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cita = event.target.value;
    setTexto(cita);
  };

  const guardarCita = async () => {
    const success = await updateCharacterQuotes(id, texto);
    if (onSave) {
      onSave(texto);
      navigate(linkRoutes.DetailPage(id));
    } else {
      console.error('onSaveQuote is not defined');
    }
  };

  return (
    <div>
      <label>Cita:</label>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
      />
      <button onClick={guardarCita}>Guardar</button>
      <div>La cita proporcionada es: {texto}</div>
    </div>
  );
};
