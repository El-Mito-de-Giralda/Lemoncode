import { CharacterEntityApi } from './character-collection.api-model';
import { CharacterEntityVm } from '../character-collection.vm';
import { Character } from 'pods/character/api';

interface Props {
  character: CharacterEntityVm;

}


const url= "api/characters";


export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response= await fetch(url);
  const data=await response.json()
  if(response.ok) { return data
    
  } 
  else {
    throw Error(response.statusText)}
};

const CharacterListUrl= "api/characters";

export const getCharacter = async (id: string): Promise<Character> => {
  const response=await fetch(`${CharacterListUrl}/${id}`);
  if (response.ok) {
    return await response.json();

  } else {
    throw new Error(response.statusText);
  }
  
};


export const getQuote= async (id): Promise<CharacterEntityApi[]>=> {
  const url3= `api/characters/${id}`;
  const response= await fetch(url3);
  if(response.ok) {return await response.json()}
  else {
    throw Error(response.statusText);
  }
}


export const deleteCharacter = async (id: string): Promise<boolean> => {
  const response= await fetch(`${CharacterListUrl}/${id}`, {method: "DELETE"});
  return response.ok;
};
