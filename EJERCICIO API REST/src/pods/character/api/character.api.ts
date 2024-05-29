import { Character, CharacterQuote } from './character.api-model';
import axios from 'axios';

interface Props {
  character: Character;
  onEdit: (id: string)=> void;
}

const CharacterListUrl= "api/characters";


export const getCharacter = async (id: string): Promise<Character> => {
  const response=await fetch(`${CharacterListUrl}/${id}`)
    return await response.json();
  
};

export const updateCharacterQuotes = async (id, newQuotes) => {
  console.log(id);
  const url = `${CharacterListUrl}/${id}`;

  try {
    // Obtener el objeto completo
    const userResponse = await axios.get(url);
    const characterData = userResponse.data;

    // Modificar solo la parte necesaria
    characterData.bestquotes.push(newQuotes);
    console.log(newQuotes);

    // Enviar el objeto modificado usando PUT
    const response = await axios.put(url, characterData);
    console.log('Usuario actualizado:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};